namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.Abstraction;
    using BlueLeet.UCodeFirst.Attributes;
    using BlueLeet.UCodeFirst.ContentTypes;
    using BlueLeet.UCodeFirst.Helpers.Abstraction;
    using BlueLeet.UComponents.Core.PropertyValues;
    using BlueLeet.UComponents.UCodeFirst;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Converters;
    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The base content model.
    /// </summary>
    [ContentType(DisplayName = "Content Base", Icon = Icon.UmbContent)]
    public abstract class BaseContentModel : BaseModel, IRedirect, ISitemapConfiguration
    {
        /// <inheritdoc />
        public BaseContentModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <inheritdoc />
        public BaseContentModel(IPublishedContent content)
            : base(content)
        {
        }

        /// <summary>
        /// Gets or sets the Advanced <c>seo</c> preview.
        /// </summary>
        [Property(
            UComponentsDataType.AdvancedSeoPreview,
            Tab.Seo,
            DisplayName = "#AdvancedSeoPreview name",
            Description = "#AdvancedSeoPreview description")]
        public virtual string AdvancedSeoPreview { get; set; }

        /// <summary>
        /// Gets the application context service.
        /// </summary>
        [NoCache]
        [UsedImplicitly]
        public virtual IContextService AppContext { get; }

        /// <summary>
        /// Gets or sets a value indicating whether block in robots.
        /// </summary>
        [Property(
            UComponentsDataType.Robots,
            Tab.Seo,
            DisplayName = "#BlockInRobots name",
            Description = "#BlockInRobots description")]
        public virtual bool BlockInRobots { get; set; }

        /// <summary>
        /// Gets or sets the browser tab text.
        /// </summary>
        [Property(
            UComponentsDataType.SeoTitle,
            Tab.Seo,
            DisplayName = "#BrowserTabText name",
            Description = "#BrowserTabText description")]
        public virtual string BrowserTabText { get; set; }

        /// <summary>
        /// Gets or sets the change frequency.
        /// </summary>
        [Property(
            UComponentsDataType.ChangeFrequency,
            Tab.SitemapXml,
            DisplayName = "#ChangeFrequency name",
            Description = "#ChangeFrequency description")]
        public virtual string ChangeFrequency { get; set; }

        /// <summary>
        /// Gets or sets the footer logotype.
        /// </summary>
        [Property(
            UmbracoDefaultDataType.MediaPicker,
            Tab.Footer,
            DisplayName = "#FooterLogotype name",
            Description = "#FooterLogotype description",
            Converter = typeof(MediaConverter))]
        public virtual IPublishedContent FooterLogotype { get; set; }

        /// <summary>
        /// Gets or sets the main body.
        /// </summary>
        [Property(
            DataType.GridFrontPage,
            Tab.ModuleContent,
            DisplayName = "#GridFrontPage name",
            Description = "#GridFrontPage description")]
        public virtual string GridFrontPage { get; set; }

        /// <summary>
        /// Gets the <c>UCodeFirst</c> helper.
        /// </summary>
        [NoCache]
        [UsedImplicitly]
        public virtual IUCodeFirstHelper Helper { get; }

        /// <summary>
        /// Gets or sets a value indicating whether hide in navigation.
        /// </summary>
        [Property(
            UComponentsDataType.ToggleBoxShowHide,
            Tab.Navigation,
            DisplayName = "#HideInNavigation name",
            Description = "#HideInNavigation description")]
        public virtual bool HideInNavigation { get; set; }

        /// <summary>
        /// Gets or sets the meta description.
        /// </summary>
        [Property(
            UComponentsDataType.SeoDescription,
            Tab.Seo,
            DisplayName = "#MetaDescription name",
            Description = "#MetaDescription description")]
        public virtual string MetaDescription { get; set; }

        /// <summary>
        /// Gets or sets the meta keywords.
        /// </summary>
        [Property(
            UComponentsDataType.SeoKeywords,
            Tab.Seo,
            DisplayName = "#MetaKeywords name",
            Description = "#MetaKeywords description")]
        public virtual string MetaKeywords { get; set; }

        /// <summary>
        /// Gets or sets the redirect.
        /// </summary>
        [Property(
            UComponentsDataType.LinkPicker,
            Tab.Navigation,
            DisplayName = "#Redirect name",
            Description = "#Redirect description")]
        public virtual Link Redirect { get; set; }

        /// <summary>
        /// Gets or sets the search tags.
        /// </summary>
        [Property(
            UmbracoDefaultDataType.Tags,
            Tab.Settings,
            DisplayName = "Search Tags",
            Description = "Detta är sidans sökbara taggar.")]
        public virtual string SearchTags { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether show in sitemap.
        /// </summary>
        [Property(
            UComponentsDataType.ToggleBoxShowHide,
            Tab.SitemapXml,
            DisplayName = "#ShowInSitemap name",
            Description = "#ShowInSitemap description")]
        public virtual bool ShowInSitemap { get; set; }

        /// <summary>
        /// Gets or sets the <c>sitemap</c> priority.
        /// </summary>
        [Property(
            UComponentsDataType.ToggleBoxOnOffAndSlider,
            Tab.SitemapXml,
            DisplayName = "#SitemapPriority name",
            Description = "#SitemapPriority description")]
        public virtual string SitemapPriority { get; set; }

        /// <summary>
        /// Gets or sets the <c>umbraco</c> url alias.
        /// </summary>
        [Property(
            UmbracoDefaultDataType.Textstring,
            Tab.Navigation,
            DisplayName = "#UmbracoUrlAlias name",
            Description = "#UmbracoUrlAlias description")]
        public virtual string UmbracoUrlAlias { get; set; }

        /// <summary>
        /// Gets or sets the <c>umbraco</c> url name.
        /// </summary>
        [Property(
            UmbracoDefaultDataType.Textstring,
            Tab.Navigation,
            DisplayName = "#UmbracoUrlName name",
            Description = "#UmbracoUrlName description")]
        public virtual string UmbracoUrlName { get; set; }

        /// <inheritdoc />
        public string GetRedirectUrl()
        {
            if (string.IsNullOrEmpty(Redirect?.Url))
            {
                return string.Empty;
            }

            return Redirect.Url;
        }
    }
}