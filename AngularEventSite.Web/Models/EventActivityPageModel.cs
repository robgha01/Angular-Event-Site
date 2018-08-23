namespace AngularEventSite.Web.Models
{
    using System;
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    [ContentType(
        DisplayName = "Sida: Event aktivitet",
        Icon = BelleIconPack.AppointmentAgenda,
        Description = "",
        AllowedChildNodes = new object[] { })]
    public class EventActivityPageModel : BaseContentModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventActivityPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public EventActivityPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EventActivityPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public EventActivityPageModel(IPublishedContent content)
            : base(content)
        {
        }

        [Property(
            UmbracoDefaultDataType.Textstring,
            Tab.Content,
            DisplayName = "#Location name",
            Description = "#Location description")]
        public virtual string Location { get; set; }

        [Property(
            UmbracoDefaultDataType.DatePickerWithTime,
            Tab.Content,
            DisplayName = "#StartDate name",
            Description = "#StartDate description")]
        public virtual DateTime? StartDate { get; set; }

        [Property(
            UmbracoDefaultDataType.DatePickerWithTime,
            Tab.Content,
            DisplayName = "#EndDate name",
            Description = "#EndDate description")]
        public virtual DateTime? EndDate { get; set; }
    }
}