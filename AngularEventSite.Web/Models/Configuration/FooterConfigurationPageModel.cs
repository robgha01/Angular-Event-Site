namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for the footer.
    /// </summary>
    [ContentType(
        DisplayName = "Footer",
        Description = "",
        Icon = BelleIconPack.Insertpicturecenter,
        IconColor = IconColor.Yellow)]
    public class FooterConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FooterConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public FooterConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FooterConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public FooterConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        [Property(UmbracoDefaultDataType.Textstring, Tab.Settings, DisplayName = "Content", Description = "")]
        public string FooterContent { get; set; }

        // [Property(UComponentsDataType., Tab.Settings, DisplayName = "Links", Description = "")]
        // public LinkEnumerable Links { get; set; }
    }
}