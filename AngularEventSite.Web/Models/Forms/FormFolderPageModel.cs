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
        DisplayName = "Form Folder",
        Description = "Denna sidtyp skapar upp en samplings sida för formulär.",
        Icon = Icon.Mailbox,
        AllowAtRoot = true,
        AllowedChildNodes = new object[] { typeof(FormCategoryPageModel), typeof(FormPageModel) })]
    public class FormFolderPageModel : UCodeFirstContentTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FormFolderPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public FormFolderPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FormFolderPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public FormFolderPageModel(IPublishedContent content)
            : base(content)
        {
        }
    }
}