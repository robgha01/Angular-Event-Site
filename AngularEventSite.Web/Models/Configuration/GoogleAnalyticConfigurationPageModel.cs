namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for Google Analytic.
    /// </summary>
    [ContentType(DisplayName = "Google Analytic", Description = "", Icon = Icon.ChartCurve, IconColor = IconColor.Blue)]
    public class GoogleAnalyticConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GoogleAnalyticConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public GoogleAnalyticConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="GoogleAnalyticConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public GoogleAnalyticConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        [Property(
            UmbracoDefaultDataType.Textarea,
            Tab.Settings,
            DisplayName = "Google Analytics tracking code",
            Description = "Copy from Google Analytics administration.")]
        public string GoogleAnalyticsTrackingCode { get; set; }
    }
}