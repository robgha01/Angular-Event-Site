namespace AngularEventSite.Web.MemberTypes
{
    using BlueLeet.UCodeFirst.ContentTypes;
    using BlueLeet.UCodeFirst.MemberTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    /// <summary>
    /// The member.
    /// </summary>
    [MemberType(DisplayName = "#MemberType name", Description = "#MemberType description")]
    public class SiteMember : MemberTypeBase
    {
        [MemberProperty(
            UmbracoDefaultDataType.Textarea,
            Tab.MembershipProfile,
            DisplayName = "#AboutMe name",
            Description = "#AboutMe description",
            MemberCanEdit = true,
            MemberCanViewProperty = true)]
        [UsedImplicitly]
        public virtual string AboutMe { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#Avatar name",
            Description = "#Avatar description",
            MemberCanEdit = true)]
        [UsedImplicitly]
        public virtual string Avatar { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#Company name",
            Description = "#Company description",
            MemberCanEdit = true,
            MemberCanViewProperty = true)]
        [UsedImplicitly]
        public virtual string Company { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#FirstName name",
            Description = "#FirstName description",
            MemberCanEdit = true,
            MemberCanViewProperty = true)]
        [UsedImplicitly]
        public virtual string FirstName { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.TrueFalse,
            Tab.MembershipProfile,
            DisplayName = "#IsEmailConfirmed name",
            Description = "#IsEmailConfirmed description",
            MemberCanEdit = true)]
        [UsedImplicitly]
        public virtual bool IsEmailConfirmed { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#LastName name",
            Description = "#LastName description",
            MemberCanEdit = true,
            MemberCanViewProperty = true)]
        [UsedImplicitly]
        public virtual string LastName { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Numeric,
            Tab.MembershipProfile,
            DisplayName = "#LoginType name",
            Description = "#LoginType description",
            MemberCanEdit = true,
            MemberCanViewProperty = false)]
        [UsedImplicitly]
        public virtual int LoginType { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#Phone name",
            Description = "#Phone description",
            MemberCanEdit = true,
            MemberCanViewProperty = true)]
        [UsedImplicitly]
        public virtual string Phone { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#SecurityToken name",
            Description = "#SecurityToken description",
            MemberCanEdit = true,
            MemberCanViewProperty = false)]
        [UsedImplicitly]
        public virtual string SecurityToken { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#SecurityTokenExpireDate name",
            Description = "#SecurityTokenExpireDate description",
            MemberCanEdit = true,
            MemberCanViewProperty = false)]
        [UsedImplicitly]
        public virtual string SecurityTokenExpireDate { get; set; }

        [MemberProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.MembershipProfile,
            DisplayName = "#Signature name",
            Description = "#Signature description",
            MemberCanEdit = true,
            MemberCanViewProperty = true)]
        [UsedImplicitly]
        public virtual string Signature { get; set; }
    }
}