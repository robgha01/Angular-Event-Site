namespace AngularEventSite.Web.Configuration.Profiles.TypeConverters
{
    using System.Web.Mvc;

    using AutoMapper;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Enums;

    using Umbraco.Core.Models;
    using Umbraco.Core.Models.Membership;
    using Umbraco.Web;
    using Umbraco.Web.PublishedCache;

    /// <summary>
    /// The member type defaults mapping action.
    /// </summary>
    public class MemberTypeDefaultsMappingAction : IMappingAction<IMember, ISiteMember>,
                                                   IMappingAction<MemberPublishedContent, ISiteMember>,
                                                   IMappingAction<IUser, ISiteMember>
    {
        private UmbracoHelper helper;

        private IUserService userService;

        /// <summary>
        /// Initializes a new instance of the <see cref="MemberTypeDefaultsMappingAction"/> class.
        /// </summary>
        public MemberTypeDefaultsMappingAction()
        {
            helper = new UmbracoHelper(UmbracoContext.Current);
            userService = DependencyResolver.Current.GetService<IUserService>();
        }

        /// <inheritdoc />
        public void Process(IMember source, ISiteMember destination)
        {
            SetDefaults(ref destination);
        }

        /// <inheritdoc />
        public void Process(MemberPublishedContent source, ISiteMember destination)
        {
            SetDefaults(ref destination);
        }

        /// <inheritdoc />
        public void Process(IUser source, ISiteMember destination)
        {
            SetDefaults(ref destination);
        }

        private void SetDefaults(ref ISiteMember member)
        {
            if (userService.IsAuthenticated() == false)
            {
                // Strip all data that is only shown to a user.
                member.MemberField = string.Empty;
            }

            if (member.ProfileData != null && string.IsNullOrEmpty(member.Avatar))
            {
                switch (member.ProfileData.Gender)
                {
                    case Gender.Female:
                        member.Avatar = "/static/assets/images/female.jpg";
                        break;
                    case Gender.Male:
                        member.Avatar = "/static/assets/images/male.jpg";
                        break;
                }
            }
            else
            {
                member.Avatar = member.GetProfileImage(200);
            }
        }
    }
}