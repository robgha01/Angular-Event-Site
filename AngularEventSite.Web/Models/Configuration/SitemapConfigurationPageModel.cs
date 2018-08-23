namespace AngularEventSite.Web.Models.Configuration
{
    using System.Diagnostics.CodeAnalysis;
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for Sitemap.
    /// </summary>
    [ContentType(DisplayName = "Sitemap", Description = "", Icon = Icon.Sitemap, IconColor = IconColor.Green)]
    public class SitemapConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SitemapConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public SitemapConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SitemapConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public SitemapConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        // [SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1600:ElementsMustBeDocumented", Justification = "Reviewed. Suppression is OK here.")]
        // [Property(DataType.SitemapEditorNotes, Tab.Settings, DisplayName = "Description", Description = "")]
        // [UsedImplicitly]
        // public string SitemapDescription { get; set; }
        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        [Property(
            DataType.OnOffToggleBox,
            Tab.Settings,
            DisplayName = "Include xml sitemap URL",
            Description = "Include a link to the sitemap file (/sitemap.xml) in the robots.txt")]
        [UsedImplicitly]
        public bool IncludeSitemap { get; set; }
    }
}