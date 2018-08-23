namespace AngularEventSite.Web.Models.Forms
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model.
    /// </summary>
    [ContentType(
        DisplayName = "Form Category",
        Description = "Denna sidtyp skapar upp en kategori sida för formulär.",
        Icon = Icon.Categories,
        EnableListView = true,
        AllowedChildNodes = new object[] { typeof(FormPageModel) })]
    public class FormCategoryPageModel : UCodeFirstContentTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FormCategoryPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public FormCategoryPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FormCategoryPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public FormCategoryPageModel(IPublishedContent content)
            : base(content)
        {
        }
    }
}