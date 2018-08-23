namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    [ContentType(
        DisplayName = "Sida: Event kodsida",
        Icon = BelleIconPack.Code,
        Description = "")]
    public class EventCodePageModel : BaseContentModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventCodePageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public EventCodePageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EventCodePageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public EventCodePageModel(IPublishedContent content)
            : base(content)
        {
        }
    }
}