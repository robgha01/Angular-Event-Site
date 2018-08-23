namespace AngularEventSite.Web.Configuration.Profiles.TypeConverters
{
    using System.Web.Mvc;

    using AutoMapper;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;

    using StructureMap;

    using Umbraco.Core;
    using Umbraco.Core.Models;
    using Umbraco.Web;
    using Umbraco.Web.PublishedCache;

    /// <summary>
    /// The reverse member type converter.
    /// </summary>
    public class ReverseMemberTypeConverter : ITypeConverter<ISiteMember, IMember>,
                                              ITypeConverter<ISiteMember, MemberPublishedContent>
    {
        private readonly IConfigService config;

        private readonly IContainer container;

        private UmbracoHelper helper;

        private IUserService userService;

        /// <summary>
        /// Initializes a new instance of the <see cref="ReverseMemberTypeConverter"/> class.
        /// </summary>
        public ReverseMemberTypeConverter()
        {
            container = DependencyResolver.Current.GetService<IContainer>();
            config = container.GetInstance<IConfigService>();
            helper = new UmbracoHelper(UmbracoContext.Current);
            userService = DependencyResolver.Current.GetService<IUserService>();
        }

        /// <inheritdoc />
        public IMember Convert(ResolutionContext context)
        {
            var member = context.SourceValue as ISiteMember;
            if (member == null)
            {
                return null;
            }

            PersistChanges(member);
            return ApplicationContext.Current.Services.MemberService.GetById(member.Id);
        }

        /// <inheritdoc />
        MemberPublishedContent ITypeConverter<ISiteMember, MemberPublishedContent>.Convert(ResolutionContext context)
        {
            var member = context.SourceValue as ISiteMember;
            if (member == null)
            {
                return null;
            }

            PersistChanges(member);
            return helper.TypedMember(member.Id) as MemberPublishedContent;
        }

        private void PersistChanges(ISiteMember member)
        {
            var result = ApplicationContext.Current.Services.MemberService.GetById(member.Id);
            result.Name = member.UserName;
            result.Email = member.Email;
            result.SetValue(config.PropCompany, member.Company);
            result.SetValue(config.PropPhone, member.Phone);
            result.SetValue(config.PropIsEmailConfirmed, member.IsEmailConfirmed);
            result.SetValue(config.PropFirstName, member.FirstName);
            result.SetValue(config.PropLastName, member.LastName);
            result.SetValue(config.PropAboutMe, member.AboutMe);
            result.SetValue(config.PropSignature, member.Signature);
            result.SetValue(config.PropSecurityToken, member.SecurityToken);
            result.SetValue(config.PropSecurityTokenExpireDate, member.SecurityTokenExpireDate);
            result.Properties[config.PropLoginType].Value = member.LoginType;

            if (member.HasAvatar)
            {
                result.SetValue(config.PropAvatar, member.Avatar);
            }

            // Member groups are lazy loaded and maps directly to source.
            ApplicationContext.Current.Services.MemberService.Save(result);
        }
    }
}