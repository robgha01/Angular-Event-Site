namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using Umbraco.Core.Models;

    /// <summary>
    /// The error page model.
    /// </summary>
    [ContentType(
        DisplayName = "Error Page",
        Description = "Denna sidtyp skapar upp en errorsida som presenterar fel (404 etc)",
        Icon = Icon.ApplicationError,
        AllowAtRoot = false,
        AllowedChildNodes = new object[] { })]
    public class ErrorPageModel : BaseContentModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ErrorPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public ErrorPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ErrorPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public ErrorPageModel(IPublishedContent content)
            : base(content)
        {
        }

        ///// <summary>
        ///// Gets or sets the main content.
        ///// </summary>
        // [Property(
        // DataType.RichtextEditor,
        // Tab.Content,
        // DisplayName = "Innehåll",
        // Description = "",
        // Converter = typeof(RichtextConverter))]
        // public virtual IHtmlString MainContent { get; set; }

        ///// <summary>
        ///// Gets or sets the simple modules.
        ///// </summary>
        // [Property(UmbracoDataType.SimpleModuleArea, Tab.ModuleContent, DisplayName = "Simpla moduler", Description = "", 
        // Converter = typeof(MacroContainerConverter))]
        // public virtual IHtmlString SimpleModules { get; set; }
    }
}