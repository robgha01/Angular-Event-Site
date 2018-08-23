namespace AngularEventSite.Web.Services
{
    using System;
    using System.Linq;
    using System.Reactive.Concurrency;
    using System.Reactive.Linq;
    using System.Reactive.Subjects;
    using System.Web.Mvc;
    using System.Web.Security;

    using AutoMapper;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.Enums;

    using StructureMap;

    using Umbraco.Core;
    using Umbraco.Core.Logging;
    using Umbraco.Core.Models;
    using Umbraco.Core.Services;
    using Umbraco.Web;
    using Umbraco.Web.PublishedCache;

    /// <summary>
    /// The membership helper.
    /// </summary>
    public class MembershipService : IMembershipService
    {
        private readonly IConfigService configService;

        private readonly Lazy<IMappingEngine> mappingEngine;

        private readonly Subject<ISiteMember> memberRegisterSubject = new Subject<ISiteMember>();

        private readonly IMemberService memberService;

        /// <summary>
        /// Initializes a new instance of the <see cref="MembershipService"/> class.
        /// </summary>
        /// <param name="configService">
        /// The config Service.
        /// </param>
        public MembershipService(IConfigService configService)
        {
            memberService = ApplicationContext.Current.Services.MemberService;
            this.configService = configService;
            mappingEngine = new Lazy<IMappingEngine>(
                () => DependencyResolver.Current.GetService<IContainer>().GetInstance<IMappingEngine>());
            MemberRegisterObservable = memberRegisterSubject.ObserveOn(TaskPoolScheduler.Default).AsObservable();
        }

        /// <inheritdoc />
        public IObservable<ISiteMember> MemberRegisterObservable { get; }

        /// <inheritdoc />
        public bool ConfirmEmail(IMember member)
        {
            var mappedMember = MapMember(member);
            if (!mappedMember.IsEmailConfirmed)
            {
                mappedMember.IsEmailConfirmed = true;
                mappedMember.SecurityToken = string.Empty;
                ReverseMapMember(mappedMember, true);
                return true;
            }

            return false;
        }

        /// <inheritdoc />
        public string GeneratePassword()
        {
            return Membership.GeneratePassword(8, 1);
        }

        /// <inheritdoc />
        public ISiteMember MapMember(IMember member)
        {
            // Mapper.AddProfile(this.memberProfile);
            var mapper = DependencyResolver.Current.GetService<IContainer>().GetInstance<IMappingEngine>();
            using (mapper)
            {
                return mapper.Map<IMember, ISiteMember>(member);
            }
        }

        /// <inheritdoc />
        public ISiteMember MapMember(IPublishedContent member)
        {
            // Mapper.AddProfile<AngularEventSiteMemberProfile>();
            // return mappingEngine.Value.Map<MemberPublishedContent, IAngularEventSiteMember>((MemberPublishedContent)member);
            var mapper = DependencyResolver.Current.GetService<IContainer>().GetInstance<IMappingEngine>();
            using (mapper)
            {
                return mapper.Map<MemberPublishedContent, ISiteMember>((MemberPublishedContent)member);
            }
        }

        /// <inheritdoc />
        public IMember Register(
            IMemberEntity memberEntity,
            out MembershipCreateStatus createStatus,
            LoginType loginType = LoginType.Standard,
            string profileImageUrl = null,
            string facebookUserAccessToken = null)
        {
            if (string.IsNullOrEmpty(profileImageUrl) && !string.IsNullOrEmpty(memberEntity.SocialProfileImageUrl))
            {
                profileImageUrl = memberEntity.SocialProfileImageUrl;
            }

            return Register(
                memberEntity.UserName,
                memberEntity.Email,
                memberEntity.FirstName,
                memberEntity.LastName,
                memberEntity.Password,
                out createStatus,
                loginType,
                profileImageUrl,
                facebookUserAccessToken);
        }

        /// <summary>
        /// Handles registration of a <see cref="IMember"/>.
        /// </summary>
        /// <param name="username">
        /// The username.
        /// </param>
        /// <param name="email">
        /// The email.
        /// </param>
        /// <param name="firstName">
        /// The first Name.
        /// </param>
        /// <param name="lastName">
        /// The last Name.
        /// </param>
        /// <param name="password">
        /// The password.
        /// </param>
        /// <param name="createStatus">
        /// Outputs a <see cref="MembershipCreateStatus"/> indicating the success.
        /// </param>
        /// <param name="loginType">
        /// Set the login type.
        /// </param>
        /// <param name="profileImageUrl">
        /// Optional: A profile image url.
        /// </param>
        /// <param name="facebookUserAccessToken">
        /// Optional: A facebook user access token.
        /// </param>
        /// <returns>
        /// Returns a registered <see cref="IMember"/>.
        /// </returns>
        public IMember Register(
            string username,
            string email,
            string firstName,
            string lastName,
            string password,
            out MembershipCreateStatus createStatus,
            LoginType loginType = LoginType.Standard,
            string profileImageUrl = null,
            string facebookUserAccessToken = null)
        {
            IMember member = null;
            var services = ApplicationContext.Current.Services;
            var umbracoHelper = new UmbracoHelper(UmbracoContext.Current);
            var newMemberGroup = configService.NewMemberGroup;

            var userToSave = umbracoHelper.MembershipHelper.CreateRegistrationModel(nameof(MemberTypes.SiteMember));
            userToSave.Username = username.ToLower();
            userToSave.Name = $"{firstName} {lastName}";
            userToSave.MemberProperties.Single(x => x.Alias.Equals(configService.PropFirstName)).Value = firstName;
            userToSave.MemberProperties.Single(x => x.Alias.Equals(configService.PropLastName)).Value = lastName;
            userToSave.UsernameIsEmail = true;
            userToSave.Email = email;
            userToSave.Password = password;

            // Perform the sign up.
            umbracoHelper.MembershipHelper.RegisterMember(userToSave, out createStatus, false);
            if (createStatus == MembershipCreateStatus.Success)
            {
                // Get the umbraco member
                member = services.MemberService.GetByUsername(userToSave.Username);

                // Set the role/group they should be in
                services.MemberService.AssignRole(member.Id, newMemberGroup);

                // See if we have their profile image
                if (!string.IsNullOrEmpty(profileImageUrl))
                {
                    member.Properties[configService.PropAvatar].Value = profileImageUrl;
                }

                // Do a save on the member
                services.MemberService.Save(member);
                if (memberRegisterSubject.HasObservers)
                {
                    // Propagate new member registration to all listeners.
                    memberRegisterSubject.OnNext(MapMember(member));
                    memberRegisterSubject.OnCompleted();
                }
            }

            return member;
        }

        /// <inheritdoc />
        public bool ResetPassword(ISiteMember member, string newPassword)
        {
            try
            {
                var m = memberService.GetById(member.Id);
                memberService.SavePassword(m, newPassword);
                return true;
            }
            catch (Exception ex)
            {
                LogHelper.Error<IMembershipService>("ResetPassword()", ex);
                return false;
            }
        }

        /// <inheritdoc />
        public IMember ReverseMapMember(ISiteMember member, bool persistChanges)
        {
            if (persistChanges)
            {
                // Mapper.AddProfile<AngularEventSiteMemberProfile>();
                // return mappingEngine.Value.Map<IAngularEventSiteMember, IMember>(member);
                var mapper = DependencyResolver.Current.GetService<IContainer>().GetInstance<IMappingEngine>();
                using (mapper)
                {
                    return mapper.Map<ISiteMember, IMember>(member);
                }
            }

            return ApplicationContext.Current.Services.MemberService.GetById(member.Id);
        }

        /// <inheritdoc />
        public MemberPublishedContent ReverseMapPublishedMember(ISiteMember member, bool persistChanges)
        {
            if (persistChanges)
            {
                // Mapper.AddProfile<AngularEventSiteMemberProfile>();
                // return mappingEngine.Value.Map<IAngularEventSiteMember, MemberPublishedContent>(member);
                var mapper = DependencyResolver.Current.GetService<IContainer>().GetInstance<IMappingEngine>();
                using (mapper)
                {
                    return mapper.Map<ISiteMember, MemberPublishedContent>(member);
                }
            }

            var umbracoHelper = new UmbracoHelper(UmbracoContext.Current);
            return umbracoHelper.MembershipHelper.GetById(member.Id) as MemberPublishedContent;
        }

        /// <inheritdoc />
        public Attempt<object> SaveMember(ISiteMember member)
        {
            try
            {
                ReverseMapMember(member, true);
                return Attempt<object>.Succeed();
            }
            catch (Exception e)
            {
                return Attempt<object>.Fail(e);
            }
        }
    }
}