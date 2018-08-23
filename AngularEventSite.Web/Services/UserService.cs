namespace AngularEventSite.Web.Services
{
    using System;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    using AutoMapper;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.MemberTypes;

    using JetBrains.Annotations;

    using StructureMap;

    using Umbraco.Core;
    using Umbraco.Core.Logging;
    using Umbraco.Core.Models.Membership;
    using Umbraco.Core.Security;
    using Umbraco.Web.Security;

    /// <summary>
    /// The user service.
    /// </summary>
    [UsedImplicitly]
    public class UserService : BlueLeet.Common.DisposableObject, IUserService
    {
        private readonly IConfigService configService;

        // ReSharper disable once NotAccessedField.Local
        private readonly Lazy<IMappingEngine> mappingEngine;

        private IUser currentUser;

        private WebSecurity webSecurity;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserService"/> class.
        /// </summary>
        /// <param name="httpContextBase">
        /// The http Context Base.
        /// </param>
        /// <param name="configService">
        /// The config Service.
        /// </param>
        public UserService(HttpContextBase httpContextBase, IConfigService configService)
        {
            this.configService = configService;
            mappingEngine = new Lazy<IMappingEngine>(() => DependencyResolver.Current.GetService<IMappingEngine>());
            webSecurity = new FrontendSafeWebSecurity(httpContextBase, ApplicationContext.Current);
        }

        /// <summary>
        /// Gets the current user.
        /// </summary>
        public IUser CurrentUser
        {
            get
            {
                // Check if we have explicit set a user.
                if (currentUser != null)
                {
                    return currentUser;
                }

                var userTicket = new HttpContextWrapper(HttpContext.Current).GetUmbracoAuthTicket();
                if (userTicket != null)
                {
                    return currentUser ?? (currentUser =
                                               ApplicationContext.Current.Services.UserService.GetByUsername(
                                                   userTicket.Name));
                }

                // Login has expired set the user to null and return.
                currentUser = null;
                return null;
            }
        }

        /// <inheritdoc />
        public bool IsAuthenticated()
        {
            return webSecurity.ValidateCurrentUser();
        }

        /// <inheritdoc />
        public void LoginAsMember()
        {
            string username;
            EnsureAdminMemberCreated(out username);
            FormsAuthentication.SetAuthCookie(username, true);
        }

        /// <summary>
        /// Map a <paramref name="user"/> as admin <see cref="ISiteMember"/>.
        /// </summary>
        /// <param name="user">
        /// The user.
        /// </param>
        /// <returns>
        /// The <see cref="ISiteMember"/>.
        /// </returns>
        public ISiteMember MapAsMember(IUser user)
        {
            // Ensure that we have a member and if we  do log them in
            string username;
            EnsureAdminMemberCreated(out username);
            FormsAuthentication.SetAuthCookie(username, true);

            // Mapper.AddProfile(memberProfile);
            // return mappingEngine.Value.Map<IUser, IAngularEventSiteMember>(user);
            var mapper = DependencyResolver.Current.GetService<IContainer>().GetInstance<IMappingEngine>();
            using (mapper)
            {
                return mapper.Map<IUser, ISiteMember>(user);
            }
        }

        /// <inheritdoc />
        public void SetCurrentUser(IUser user)
        {
            currentUser = user;
        }

        /// <inheritdoc />
        public bool ValidateUser(string username, string password)
        {
            var userProvider = Membership.Providers["UsersMembershipProvider"];
            return userProvider != null && userProvider.ValidateUser(username, password);
        }

        /// <inheritdoc />
        public bool ValidateUser(string email)
        {
            var userProvider = Membership.Providers["UsersMembershipProvider"];
            var username = userProvider?.GetUserNameByEmail(email);
            if (string.IsNullOrEmpty(username))
            {
                return false;
            }

            return true;
        }
        
        /// <inheritdoc />
        public void EnsureAdminMemberCreated(out string username)
        {
            var backofficeMember = ApplicationContext.Current.Services.MemberService.GetByEmail(CurrentUser.Email);
            if (backofficeMember != null)
            {
                username = backofficeMember.Username;
            }
            else
            {
                var adminMemberTypeAlias = nameof(AdminMember);

                // We have no member mapped to this backoffice user lets create one.
                var member = ApplicationContext.Current.Services.MemberService.CreateMember(
                    CurrentUser.Username,
                    CurrentUser.Email,
                    CurrentUser.Name,
                    adminMemberTypeAlias);

                var nameSplit = CurrentUser.Name.Split(' ');
                member.SetValue(configService.PropFirstName, nameSplit[0]);
                member.SetValue(configService.PropLastName, nameSplit[1]);
                member.SetValue(configService.PropIsEmailConfirmed, true);
                member.SetValue(configService.PropAvatar, string.Empty);
                member.SetValue(configService.PropSignature, string.Empty);
                member.SetValue(configService.PropSecurityToken, string.Empty);
                member.SetValue(configService.PropSecurityTokenExpireDate, null);
                member.SetValue(configService.PropCompany, "Claremont");

                ApplicationContext.Current.Services.MemberService.Save(member);
                ApplicationContext.Current.Services.MemberService.AssignRole(member.Id, configService.NewMemberGroup);

                username = member.Username;
            }
        }

        /// <inheritdoc />
        protected override void DisposeResources()
        {
            webSecurity?.Dispose();
        }

        private class FrontendSafeWebSecurity : WebSecurity
        {
            private ApplicationContext applicationContext;

            private IUser currentUser;

            /// <inheritdoc />
            public FrontendSafeWebSecurity(HttpContextBase httpContext, ApplicationContext applicationContext)
                : base(httpContext, applicationContext)
            {
                this.applicationContext = applicationContext;
            }

            /// <inheritdoc />
            public override IUser CurrentUser
            {
                get
                {
                    try
                    {
                        var userTicket = new HttpContextWrapper(HttpContext.Current).GetUmbracoAuthTicket();
                        if (userTicket != null)
                        {
                            return currentUser ?? (currentUser =
                                                       applicationContext.Services.UserService.GetByUsername(
                                                           userTicket.Name));
                        }
                    }
                    catch (Exception e)
                    {
                        LogHelper.Error<UserService>(e.Message, e);
                    }

                    // Login has expired set the user to null and return.
                    currentUser = null;
                    return null;
                }
            }

            /// <inheritdoc />
            public override bool ValidateCurrentUser()
            {
                var user = CurrentUser;
                if (user != null && user.IsApproved && !user.IsLockedOut)
                {
                    return true;
                }

                return false;
            }
        }
    }
}