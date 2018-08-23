namespace AngularEventSite.Web.Models
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.EventManager.Abstraction;
    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    [ContentType(
        DisplayName = "Sida: Event",
        Icon = BelleIconPack.Event,
        Description = "",
        AllowedChildNodes = new object[] { typeof(EventActivityPageModel) })]
    public class EventPageModel : BaseContentModel
    {
        private readonly Lazy<IEnumerable<ISiteMember>> participantsLazy;

        private readonly Lazy<IEnumerable<EventActivityPageModel>> eventActivitiesLazy;

        private readonly Lazy<DateTime?> eventStartDateLazy;

        private readonly Lazy<DateTime?> eventEndDateLazy;

        /// <summary>
        /// Initializes a new instance of the <see cref="EventPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        /// <param name="eventRepository">
        /// The event Repository.
        /// </param>
        public EventPageModel(IPublishedContent content, CultureInfo culture, IEventRepository eventRepository)
            : base(content, culture)
        {
            participantsLazy = new Lazy<IEnumerable<ISiteMember>>(() => eventRepository.GetParticipants(Id));
            eventActivitiesLazy = new Lazy<IEnumerable<EventActivityPageModel>>(() => Children.OfType<EventActivityPageModel>());
            eventStartDateLazy = new Lazy<DateTime?>(() => Children.OfType<EventActivityPageModel>().Select(x => x.StartDate).FirstOrDefault());
            eventEndDateLazy = new Lazy<DateTime?>(() => Children.OfType<EventActivityPageModel>().Select(x => x.EndDate).LastOrDefault());
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EventPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="eventRepository">
        /// The event Repository.
        /// </param>
        public EventPageModel(IPublishedContent content, IEventRepository eventRepository)
            : base(content)
        {
            participantsLazy = new Lazy<IEnumerable<ISiteMember>>(() => eventRepository.GetParticipants(Id));
            eventActivitiesLazy = new Lazy<IEnumerable<EventActivityPageModel>>(() => Children.OfType<EventActivityPageModel>());
        }

        /// <summary>
        /// Gets or sets the event name.
        /// </summary>
        [Property(
            UmbracoDefaultDataType.Textstring,
            Tab.Content,
            DisplayName = "#EventName name", Description = "#EventName description")]
        public virtual string EventName { get; set; }

        /// <summary>
        /// Gets or sets the event name.
        /// </summary>
        [Property(
            UmbracoDefaultDataType.Textstring,
            Tab.Content,
            DisplayName = "#EventCode name", Description = "#EventCode description")]
        public virtual string EventCode { get; set; }

        ///// <summary>
        ///// Gets or sets the spots.
        ///// </summary>
        //[Property(
        //    UmbracoDefaultDataType.Numeric,
        //    Tab.Content,
        //    DisplayName = "#EventSpots name",
        //    Description = "#EventSpots description")]
        //public virtual int Spots { get; set; }

        /// <summary>
        /// Gets the participants.
        /// </summary>
        public List<ISiteMember> Participants => participantsLazy.Value.ToList();

        /// <summary>
        /// Gets the event activities.
        /// </summary>
        public IEnumerable<EventActivityPageModel> EventActivities => eventActivitiesLazy.Value.ToList();

        public DateTime? StartDate => eventStartDateLazy.Value;

        public DateTime? EndDate => eventEndDateLazy.Value;
    }
}