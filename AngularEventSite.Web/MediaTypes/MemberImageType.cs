namespace AngularEventSite.Web.MediaTypes
{
    using System.Runtime.Serialization;

    using BlueLeet.UCodeFirst.ContentTypes;
    using BlueLeet.UCodeFirst.MediaTypes;

    using AngularEventSite.Web.Converters;
    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The member image type.
    /// </summary>
    [MediaType(DisplayName = "#MemberImageType name", Description = "#MemberImageType description")]
    public class MemberImageType : UCodeFirstMediaTypeBase
    {
        /// <inheritdoc />
        public MemberImageType(IPublishedContent content)
            : base(content)
        {
        }

        [DataMember]
        [MediaTypeProperty(
            DataType.DropdownColorType,
            Tab.Image,
            DisplayName = "#ColorType name",
            Description = "#ColorType description")]
        public virtual string ColorType { get; set; }

        [DataMember]
        [MediaTypeProperty(
            UmbracoDefaultDataType.Textstring,
            Tab.Image,
            DisplayName = "#DisplayName name",
            Description = "#DisplayName description")]
        public virtual string DisplayName { get; set; }

        [DataMember]
        [MediaTypeProperty(
            DataType.DropdownHairColor,
            Tab.Image,
            DisplayName = "#HairColor name",
            Description = "#HairColor description")]
        public virtual string HairColor { get; set; }

        [DataMember]
        [MediaTypeProperty(
            DataType.DropdownHairLength,
            Tab.Image,
            DisplayName = "#HairLength name",
            Description = "#HairLength description")]
        public virtual string HairLength { get; set; }

        [DataMember]
        [MediaTypeProperty(
            UmbracoDefaultDataType.TrueFalse,
            Tab.Image,
            DisplayName = "#IsApproved name",
            Description = "#IsApproved description")]
        public virtual bool IsApproved { get; set; }

        [DataMember]
        [MediaTypeProperty(
            DataType.DropdownTexture,
            Tab.Image,
            DisplayName = "#DropdownTexture name",
            Description = "#DropdownTexture description")]
        public virtual string Texture { get; set; }

        [MediaTypeProperty(
            UmbracoDefaultDataType.Label,
            Tab.Image,
            DisplayName = "#UmbracoBytes name",
            Description = "#UmbracoBytes description")]
        public virtual string UmbracoBytes { get; set; }

        [MediaTypeProperty(
            UmbracoDefaultDataType.Label,
            Tab.Image,
            DisplayName = "#UmbracoExtension name",
            Description = "#UmbracoExtension description")]
        public virtual string UmbracoExtension { get; set; }

        [DataMember(Name = "Url")]
        [MediaTypeProperty(
            UmbracoDefaultDataType.ImageCropper,
            Tab.Image,
            DisplayName = "#UmbracoFile name",
            Description = "#UmbracoFile description",
            Converter = typeof(ImageCropperConverter))]
        public virtual string UmbracoFile { get; set; }

        [DataMember(Name = "Height")]
        [MediaTypeProperty(
            UmbracoDefaultDataType.Label,
            Tab.Image,
            DisplayName = "#UmbracoHeight name",
            Description = "#UmbracoHeight description")]
        public virtual string UmbracoHeight { get; set; }

        [DataMember(Name = "Width")]
        [MediaTypeProperty(
            UmbracoDefaultDataType.Label,
            Tab.Image,
            DisplayName = "#UmbracoWidth name",
            Description = "#UmbracoWidth description")]
        public virtual string UmbracoWidth { get; set; }
    }
}