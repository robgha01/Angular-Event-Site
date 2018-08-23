namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;
    using System.Web;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Converters;
    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for Cookie Alert.
    /// </summary>
    [ContentType(
        DisplayName = "Cookie Alert",
        Description = "",
        Icon = BelleIconPack.Muffin,
        IconColor = IconColor.Yellow)]
    public class CookieAlertConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CookieAlertConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public CookieAlertConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="CookieAlertConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public CookieAlertConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        [Property(
            DataType.OneToHundredSlider,
            Tab.Settings,
            DisplayName = "Alert appearances",
            Description = "Limit disclosure appearances, 0 is forever.")]
        public int AlertAppearances { get; set; }

        [Property(
            DataType.RichtextEditor,
            Tab.Content,
            DisplayName = "Alert content",
            Description = "Text in the alert. Can include links.",
            Converter = typeof(RichtextConverter))]
        public virtual IHtmlString AlertContent { get; set; }

        [Property(
            DataType.DisplayTimeSlider,
            Tab.Settings,
            DisplayName = "Alert display time",
            Description = "Seconds the alert is displayed.")]
        public int AlertDisplayTime { get; set; }

        [Property(DataType.TopBottomToggleBox, Tab.Settings, DisplayName = "Alert position")]
        public bool AlertPosition { get; set; }

        [Property(
            DataType.ImplicitExplicitToggleBox,
            Tab.Settings,
            DisplayName = "Cookie Alert Consent",
            Description = "Choose \"Explicit\" for starting tracking only when consent for cookies has been given\r\n")]
        public bool CookieAlertConsent { get; set; }
    }
}