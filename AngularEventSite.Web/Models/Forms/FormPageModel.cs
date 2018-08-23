namespace AngularEventSite.Web.Models.Forms
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model.
    /// </summary>
    [ContentType(DisplayName = "Form", Description = "Denna sidtyp skapar upp en formulär.", Icon = Icon.Mailbox)]
    public class FormPageModel : UCodeFirstContentTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FormPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public FormPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FormPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public FormPageModel(IPublishedContent content)
            : base(content)
        {
        }

        /// <summary>
        /// Gets or sets the form.
        /// </summary>
        [Property(DataType.FormEditor, Tab.Content, DisplayName = "Form", Description = "")]
        public virtual string Form { get; set; }
    }
}