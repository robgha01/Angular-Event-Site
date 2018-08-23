namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model.
    /// </summary>
    [ContentType(
        DisplayName = "Configuration",
        Description = "Denna sidtyp skapar upp en konfigurationssida.",
        Icon = Icon.UmbDeveloper,
        EnableListView = true,
        AllowAtRoot = true,
        AllowedChildNodes = new object[]
                                {
                                    typeof(SearchConfigurationPageModel), typeof(CookieAlertConfigurationPageModel),
                                    typeof(FooterConfigurationPageModel), typeof(GoogleAnalyticConfigurationPageModel),
                                    typeof(LogoAndFaviconConfigurationPageModel),
                                    typeof(Redirect404ConfigurationPageModel), typeof(RobotsConfigurationPageModel),
                                    typeof(SitemapConfigurationPageModel)
                                })]
    public class ConfigurationPageModel : UCodeFirstContentTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public ConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public ConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }
    }
}