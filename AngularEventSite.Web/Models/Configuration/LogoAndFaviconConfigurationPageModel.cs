namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for Logo and Favicon.
    /// </summary>
    [ContentType(DisplayName = "Logo and Favicon", Description = "", Icon = Icon.Bookmark, IconColor = IconColor.Blue)]
    public class LogoAndFaviconConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LogoAndFaviconConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public LogoAndFaviconConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="LogoAndFaviconConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public LogoAndFaviconConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        [Property(
            UmbracoDefaultDataType.MediaPicker,
            Tab.Settings,
            DisplayName = "Favorite icon",
            Description = "The image used in the browser tab. If you change the icon, you must change the name too.")]
        public IPublishedContent FavoriteIcon { get; set; }

        [Property(
            UmbracoDefaultDataType.MediaPicker,
            Tab.Settings,
            DisplayName = "Logo",
            Description = "Logo used for the website.")]
        public IPublishedContent Logo { get; set; }
    }
}