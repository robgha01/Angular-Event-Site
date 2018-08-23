namespace AngularEventSite.Web.Configuration.Profiles.TypeConverters
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    using AutoMapper;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.Enums;
    using AngularEventSite.Web.MemberTypes;

    using StructureMap;

    using Umbraco.Core;
    using Umbraco.Core.Models;
    using Umbraco.Core.Models.Membership;

    /// <summary>
    /// The reverse member type converter.
    /// </summary>
    public class UserMemberTypeConverter : ITypeConverter<IUser, ISiteMember>
    {
        /// <inheritdoc />
        public ISiteMember Convert(ResolutionContext context)
        {
            var user = context.SourceValue as IUser;
            if (user != null)
            {
                return ToMember(user);
            }

            return null;
        }

        private ISiteMember ToMember(IUser user)
        {
            using (var container = DependencyResolver.Current.GetService<IContainer>().GetNestedContainer())
            {
                var constants = container.GetInstance<IConfigService>();

                // var helper = new UmbracoHelper(UmbracoContext.Current);
                var adminMembers = ApplicationContext.Current.Services.MemberService
                    .GetMembersByMemberType(nameof(AdminMember)).ToList();
                IMember member = null;

                foreach (var adminMember in adminMembers)
                {
                    if (adminMember.Email == user.Email)
                    {
                        member = adminMember;
                        break;
                    }
                }

                if (member == null)
                {
                    // Create a admin member account.

                }

                var memberClone = container.GetInstance<ISiteMember>();
                memberClone.Id = member.Id;
                memberClone.CreateDate = member.CreateDate;
                memberClone.LoginType = LoginType.Standard | LoginType.Facebook;
                memberClone.UserName = member.Username;
                memberClone.Company = member.GetValue<string>(constants.PropCompany);
                memberClone.Phone = member.GetValue<string>(constants.PropPhone);
                memberClone.Email = member.Email;
                memberClone.AboutMe = member.GetValue<string>(constants.PropAboutMe);
                memberClone.FirstName = member.GetValue<string>(constants.PropFirstName);
                memberClone.LastName = member.GetValue<string>(constants.PropLastName);
                memberClone.Signature = member.GetValue<string>(constants.PropSignature);
                memberClone.Avatar = member.GetValue<string>(constants.PropAvatar);
                memberClone.SecurityToken = member.GetValue<string>(constants.PropSecurityToken);
                memberClone.SecurityTokenExpireDate = member.GetValue<DateTime?>(constants.PropSecurityTokenExpireDate);
                memberClone.Groups = new Lazy<IEnumerable<IMemberGroup>>(
                    () => ApplicationContext.Current.Services.MemberService.GetAllRoles(member.Id)
                        .Select(ApplicationContext.Current.Services.MemberGroupService.GetByName));
                memberClone.IsEmailConfirmed = member.GetValue<bool>(constants.PropIsEmailConfirmed);
                memberClone.LoginType = member.GetValue<LoginType>(constants.PropLoginType);

                return memberClone;
            }
        }
    }
}