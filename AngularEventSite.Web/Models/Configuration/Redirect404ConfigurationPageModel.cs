namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for 404 redirect.
    /// </summary>
    [ContentType(
        DisplayName = "404 Redirect",
        Description = "",
        Icon = BelleIconPack.Redirect,
        IconColor = IconColor.Red)]
    public class Redirect404ConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Redirect404ConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public Redirect404ConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Redirect404ConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public Redirect404ConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        /// <summary>
        /// Gets or sets the browser tab text.
        /// </summary>
        [Property(
            UmbracoDefaultDataType.ContentPicker,
            Tab.Content,
            DisplayName = "Select page",
            Description = "The user will go to this page, if the page they are trying to open does not exist.")]
        public virtual string Redirect404 { get; set; }
    }
}