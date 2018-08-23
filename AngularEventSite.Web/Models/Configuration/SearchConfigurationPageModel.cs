namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for Search.
    /// </summary>
    [ContentType(DisplayName = "Search", Description = "", Icon = Icon.Search, IconColor = IconColor.Green)]
    public class SearchConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SearchConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public SearchConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SearchConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public SearchConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }
    }
}