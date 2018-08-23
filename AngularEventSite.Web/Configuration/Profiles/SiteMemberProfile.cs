namespace AngularEventSite.Web.Configuration.Profiles
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using AutoMapper;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.Configuration.Profiles.TypeConverters;
    using AngularEventSite.Web.Enums;

    using JetBrains.Annotations;

    using StructureMap;

    using Umbraco.Core;
    using Umbraco.Core.Models;
    using Umbraco.Core.Models.Membership;
    using Umbraco.Web;
    using Umbraco.Web.PublishedCache;

    /// <summary>
    /// The <c>AngularEventSite</c> member profile.
    /// </summary>
    [UsedImplicitly]
    public class SiteMemberProfile : Profile
    {
        private readonly IContainer locator;

        /// <summary>
        /// Initializes a new instance of the <see cref="SiteMemberProfile"/> class.
        /// </summary>
        /// <param name="container">
        /// The container.
        /// </param>
        [DefaultConstructor]
        public SiteMemberProfile(IContainer container)
        {
            locator = container;
        }

        /// <inheritdoc/>
        public override string ProfileName => nameof(SiteMemberProfile);

        /// <inheritdoc/>
        protected override void Configure()
        {
            MapMember();
            MapMemberPublishedContent();
            MapUser();
        }

        private IEnumerable<IMemberGroup> GetGroups(int memberId)
        {
            var roles = ApplicationContext.Current.Services.MemberService.GetAllRoles(memberId)
                .Select(ApplicationContext.Current.Services.MemberGroupService.GetByName);
            return roles;
        }

        private void MapMember()
        {
            using (var container = locator.GetNestedContainer())
            {
                var constants = container.GetInstance<IConfigService>();

                var map = CreateMap<IMember, ISiteMember>(MemberList.Destination)
                    .AfterMap<MemberTypeDefaultsMappingAction>();
                map.ForMember(dest => dest.Id, opt => opt.MapFrom(member => member.Id))
                    .ForMember(dest => dest.CreateDate, opt => opt.MapFrom(member => member.CreateDate))
                    .ForMember(
                        dest => dest.Company,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropCompany)))
                    .ForMember(
                        dest => dest.Phone,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropPhone)))
                    .ForMember(dest => dest.UserName, opt => opt.MapFrom(member => member.Name))
                    .ForMember(dest => dest.Email, opt => opt.MapFrom(member => member.Email))
                    .ForMember(
                        dest => dest.AboutMe,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropAboutMe)))
                    .ForMember(
                        dest => dest.FirstName,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropFirstName)))
                    .ForMember(
                        dest => dest.LastName,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropLastName)))
                    .ForMember(
                        dest => dest.Signature,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropSignature)))
                    .ForMember(
                        dest => dest.Avatar,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropAvatar)))
                    .ForMember(
                        dest => dest.SecurityToken,
                        opt => opt.MapFrom(member => member.GetValue<string>(constants.PropSecurityToken)))
                    .ForMember(
                        dest => dest.SecurityTokenExpireDate,
                        opt => opt.MapFrom(member => member.GetValue<DateTime?>(constants.PropSecurityTokenExpireDate)))
                    .ForMember(
                        dest => dest.Groups,
                        opt => opt.MapFrom(member => new Lazy<IEnumerable<IMemberGroup>>(() => GetGroups(member.Id))))
                    .ForMember(
                        dest => dest.IsEmailConfirmed,
                        opt => opt.MapFrom(member => member.GetValue<bool>(constants.PropIsEmailConfirmed))).ForMember(
                        dest => dest.LoginType,
                        opt => opt.MapFrom(member => member.GetValue<LoginType>(constants.PropLoginType)));
                
                map.ConstructUsing(new Func<IMember, ISiteMember>(
                    m =>
                    {
                        using (var c = locator.GetNestedContainer())
                        {
                            return c.GetInstance<ISiteMember>();
                        }
                    }));

                CreateMap<ISiteMember, IMember>(MemberList.Destination).ConvertUsing<ReverseMemberTypeConverter>();
            }
        }

        private void MapMemberPublishedContent()
        {
            using (var container = locator.GetNestedContainer())
            {
                var constants = container.GetInstance<IConfigService>();
                var map = CreateMap<MemberPublishedContent, ISiteMember>(MemberList.Destination)
                    .AfterMap<MemberTypeDefaultsMappingAction>();
                map.ForMember(dest => dest.Id, opt => opt.MapFrom(member => member.Id))
                    .ForMember(dest => dest.CreateDate, opt => opt.MapFrom(member => member.CreateDate))
                    .ForMember(dest => dest.UserName, opt => opt.MapFrom(member => member.UserName))
                    .ForMember(
                        dest => dest.Company,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropCompany)))
                    .ForMember(
                        dest => dest.Phone,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropPhone)))
                    .ForMember(dest => dest.Email, opt => opt.MapFrom(member => member.Email))
                    .ForMember(
                        dest => dest.AboutMe,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropAboutMe)))
                    .ForMember(
                        dest => dest.FirstName,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropFirstName)))
                    .ForMember(
                        dest => dest.LastName,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropLastName)))
                    .ForMember(
                        dest => dest.Signature,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropSignature)))
                    .ForMember(
                        dest => dest.Avatar,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropAvatar)))
                    .ForMember(
                        dest => dest.SecurityToken,
                        opt => opt.MapFrom(member => member.GetPropertyValue<string>(constants.PropSecurityToken)))
                    .ForMember(
                        dest => dest.SecurityTokenExpireDate,
                        opt => opt.MapFrom(
                            member => member.GetPropertyValue<DateTime?>(constants.PropSecurityTokenExpireDate)))
                    .ForMember(
                        dest => dest.Groups,
                        opt => opt.MapFrom(member => new Lazy<IEnumerable<IMemberGroup>>(() => GetGroups(member.Id))))
                    .ForMember(
                        dest => dest.IsEmailConfirmed,
                        opt => opt.MapFrom(member => member.GetPropertyValue<bool>(constants.PropIsEmailConfirmed)))
                    .ForMember(
                        dest => dest.LoginType,
                        opt => opt.MapFrom(member => member.GetPropertyValue<LoginType>(constants.PropLoginType)));
                
                map.ConstructUsing(new Func<MemberPublishedContent, ISiteMember>(
                    m =>
                        {
                            using (var c = locator.GetNestedContainer())
                            {
                                return c.GetInstance<ISiteMember>();
                            }
                        }));

                CreateMap<ISiteMember, MemberPublishedContent>(MemberList.Destination)
                    .ConvertUsing<ReverseMemberTypeConverter>();
            }
        }
        
        private void MapUser()
        {
            CreateMap<IUser, ISiteMember>(MemberList.Destination).AfterMap<MemberTypeDefaultsMappingAction>()
                .ConvertUsing<UserMemberTypeConverter>();
        }
    }
}