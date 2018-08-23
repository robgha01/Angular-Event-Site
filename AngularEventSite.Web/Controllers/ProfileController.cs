namespace AngularEventSite.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Web.Http;

    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Entities.Payloads;
    using AngularEventSite.Web.Enums;
    using AngularEventSite.Web.MediaTypes;

    using Umbraco.Core.Models;

    using X.PagedList;

    /// <summary>
    /// The login register surface controller.
    /// </summary>
    public sealed class ProfileController : BaseApiController
    {
        /// <inheritdoc/>
        public ProfileController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper)
            : base(contextService, membershipService, codeFirstHelper)
        {
        }

        [HttpPost]
        public IHttpActionResult GetPhotosPost(int? page = null, int? pageSize = null, int? id = null)
        {
            ISiteMember member;

            if (!id.HasValue && Members.IsLoggedIn())
            {
                var m = Members.GetCurrentMember();
                member = ContextService.MembershipHelper.MapMember(m);
            }
            else if (id.HasValue)
            {
                var m = Members.GetById(id.Value);
                member = ContextService.MembershipHelper.MapMember(m);
            }
            else
            {
                var payload = new PayloadResult();
                payload.SetMessageType(GenericMessages.Danger);
                payload.SetMessage("No member is logged in and no id was passed!");
                return Error(payload, HttpStatusCode.InternalServerError);
            }

            var photos = member.GetPhotos().Select(
                media =>
                    {
                        var typedMedia = Umbraco.TypedMedia(media.Id);
                        var mediaModel = (MemberImageType)CodeFirstHelper.TypedMedia(typedMedia);
                        return mediaModel;
                    }).OrderByDescending(x => x.CreateDate);

            var pageNumber = page ?? 1;
            var pagedResult = photos.ToPagedList(pageNumber, pageSize ?? 25);

            return Json(new { items = pagedResult, totalPages = pagedResult.PageCount });
        }

        /// <summary>
        /// Get a member profile.
        /// </summary>
        /// <param name="id">Optional: what member to fetch, uses current logged member if omitted.</param>
        /// <returns>A payload with user.</returns>
        [HttpPost]
        public IHttpActionResult GetProfilePost(int? id = null)
        {
            var payload = new PayloadResult();
            ISiteMember member;

            if (!id.HasValue && Members.IsLoggedIn())
            {
                var m = Members.GetCurrentMember();
                member = ContextService.MembershipHelper.MapMember(m);
            }
            else if (id.HasValue)
            {
                var m = Members.GetById(id.Value);
                member = ContextService.MembershipHelper.MapMember(m);
            }
            else
            {
                payload.SetMessageType(GenericMessages.Danger);
                payload.SetMessage("No member is logged in and no id was passed!");
                return Error(payload, HttpStatusCode.InternalServerError);
            }

            payload.SetOrUpdate(nameof(PayloadFields.User), member);

            return Json(payload);
        }

        [HttpPost]
        public IHttpActionResult SaveProfilePost(PayloadResult profile)
        {
            var m = Services.MemberService.GetByEmail(profile.GetValue<string>("email"));
            var member = ContextService.MembershipHelper.MapMember(m);
            var name = profile.GetValue<string>(nameof(ISiteMember.Name))?.Split(' ');
            if (name != null)
            {
                var firstName = name[0];
                if (!string.IsNullOrEmpty(firstName))
                {
                    member.FirstName = name[0];
                }

                var lastName = string.Join(" ", name.Skip(1));
                if (!string.IsNullOrEmpty(lastName))
                {
                    member.LastName = lastName;
                }
            }

            var aboutMe = profile.GetValue<string>(nameof(ISiteMember.AboutMe));
            if (aboutMe != null)
            {
                member.AboutMe = aboutMe;
            }

            var bio = profile.GetValue<string>(nameof(ISiteMember.Bio));
            if (bio != null)
            {
                member.Bio = bio;
            }

            var phone = profile.GetValue<string>(nameof(ISiteMember.Phone));
            if (phone != null)
            {
                member.Phone = phone;
            }

            if (ContextService.UserHelper.IsAuthenticated())
            {
                var memberField = profile.GetValue<string>(nameof(ISiteMember.MemberField));
                if (memberField != null)
                {
                    member.MemberField = memberField;
                }
            }

            return Json(ContextService.MembershipHelper.SaveMember(member).Success);
        }

        [HttpPost]
        public IHttpActionResult SetAvatarPost(string url)
        {
            var memberProfile = Members.GetCurrentMemberProfileModel();
            memberProfile.MemberProperties.Single(
                x => x.Alias.Equals(nameof(ISiteMember.Avatar), StringComparison.OrdinalIgnoreCase)).Value = url;

            return Json(Members.UpdateMemberProfile(memberProfile).Success);
        }

        private IDictionary<string, PreValue> GetCachePreValues(string alias, string propertyAlias)
        {
            var cacheKey = $"ProfileController.GetPreValues.{alias}.{propertyAlias}";
            return ApplicationContext.ApplicationCache.RuntimeCache.GetCacheItem(
                       cacheKey,
                       () => GetPreValues(alias, propertyAlias)) as IDictionary<string, PreValue>;
        }

        private IDictionary<string, PreValue> GetPreValues(string alias, string propertyAlias)
        {
            var node = Services.ContentTypeService.GetMediaType(alias);
            var prop = node.PropertyTypes.FirstOrDefault(
                type => type.Alias.Equals(propertyAlias, StringComparison.OrdinalIgnoreCase));
            if (prop == null)
            {
                throw new Exception($"Can not find a property with alias {propertyAlias} for {node.Alias}");
            }

            var preValues = Umbraco.DataTypeService.GetPreValuesCollectionByDataTypeId(prop.DataTypeDefinitionId)
                .FormatAsDictionary();

            return preValues;
        }
    }
}