namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The start page model.
    /// </summary>
    [ContentType(
        DisplayName = "Sida: Artikelsida",
        Icon = BelleIconPack.Document,
        Description = "",
        AllowedChildNodes = new object[] { typeof(ArticlePageModel) })]
    public class ArticlePageModel : BaseContentModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ArticlePageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public ArticlePageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ArticlePageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public ArticlePageModel(IPublishedContent content)
            : base(content)
        {
        }
    }
}