namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The start page model.
    /// </summary>
    [ContentType(
        DisplayName = "Sida: Sök",
        Icon = Icon.Search,
        Description = "",
        PropertySortMode = PropertySortMode.BaseFirst)]
    public class SearchPageModel : BaseContentModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SearchPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public SearchPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SearchPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public SearchPageModel(IPublishedContent content)
            : base(content)
        {
        }

        /// <summary>
        /// Gets or sets the main body.
        /// </summary>
        [Property(
            DataType.GridFrontPage,
            Tab.ModuleContent,
            DisplayName = "#GridSearchPageEmptyResult name",
            Description = "#GridSearchPageEmptyResult description")]
        public virtual string GridSearchPageEmptyResult { get; set; }
    }
}