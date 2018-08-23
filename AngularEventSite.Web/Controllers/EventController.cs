namespace AngularEventSite.Web.Controllers
{
    using System;
    using System.Linq;
    using System.Web.Http;

    using BlueLeet.UCodeFirst.Extensions;
    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Entities.Payloads;
    using AngularEventSite.Web.EventManager;
    using AngularEventSite.Web.EventManager.Abstraction;
    using AngularEventSite.Web.JobManager.Abstraction;
    using AngularEventSite.Web.Models;

    public class EventController : BaseApiController
    {
        /// <inheritdoc />
        public EventController(IContextService contextService, IMembershipService membershipService, IUCodeFirstHelper codeFirstHelper, IEventRepository eventRepository, IMailer mailer)
            : base(contextService, membershipService, codeFirstHelper)
        {
            EventRepository = eventRepository;
            Mailer = mailer;
        }

        public IEventRepository EventRepository { get; }

        public IMailer Mailer { get; }
        
        [HttpPost]
        public IHttpActionResult RegisterPost(int eventId, int memberId)
        {
            var status = EventRepository.AddParticipant(eventId, memberId);
            if (status == EventStatus.Registered)
            {
                var currentMember = Members.GetById(memberId);
                var eventPage = CodeFirstHelper.TypedContent<EventPageModel>(eventId);

                var currentMappedMember = ContextService.MembershipHelper.MapMember(currentMember);
                Mailer.SendNotifyEventApplied(currentMappedMember, eventPage); // Notify the member who applied.

                foreach (var activity in eventPage.EventActivities)
                {
                    // Create a qued email close to this event's start date.
                    Mailer.ScheduleSendNotifyEventStart(currentMappedMember, eventPage, activity);
                }
            }

            return Json(status);
        }

        [HttpPost]
        public IHttpActionResult UnregisterPost(int eventId, int memberId)
        {
            var status = EventRepository.RemoveParticipant(eventId, memberId);
            if (status == EventStatus.Unregistered)
            {
                var currentMember = Members.GetById(memberId);
                var currentMappedMember = ContextService.MembershipHelper.MapMember(currentMember);
                currentMappedMember.MemberField = string.Empty;
                var eventPage = CodeFirstHelper.TypedContent<EventPageModel>(eventId);

                // Remove any scheduled mails for this event and member.
                Mailer.RemoveScheduleNotifyEventStart(currentMappedMember, eventPage);
            }

            return Json(status);
        }

        [HttpPost]
        public IHttpActionResult UnlockEventPost(string eventCode)
        {
            var payload = new PayloadResult();
            var memberId = Members.GetCurrentMemberId();

            EventPageModel eventPage;
            var status = EventRepository.UnlockEvent(eventCode, memberId, out eventPage);
            if (status == EventStatus.Unlocked)
            {
                payload.SetOrUpdate("event", new { name = eventPage.EventName, url = eventPage.Url });
            }

            payload.SetOrUpdate("status", status);

            return Json(payload);
        }

        /// <summary>
        /// Builds a event specific state <see langword="object"/>.
        /// </summary>
        /// <param name="eventId">
        ///     The event Id.
        /// </param>
        /// <param name="memberId">
        /// Optional: specify a member id to populate member specific info.
        /// </param>
        /// <returns>
        /// The <see cref="IHttpActionResult"/>.
        /// </returns>
        [HttpPost]
        public IHttpActionResult BuildStatePost(int eventId, int? memberId = null)
        {
            var eventPage = CodeFirstHelper.TypedContent<EventPageModel>(eventId);
            var payload = new EventStatePayload();

            if (memberId.HasValue && memberId.Value != -1)
            {
                var participating = eventPage.Participants.FirstOrDefault(x => x.Id == memberId.Value);
                payload.IsParticipating = participating != null;
            }

            DateTime eventDate;
            if (eventPage.StartDate.HasValue)
            {
                eventDate = new DateTime(eventPage.StartDate.Value.Year, eventPage.StartDate.Value.Month, eventPage.StartDate.Value.Day, eventPage.StartDate.Value.Hour, eventPage.StartDate.Value.Minute, eventPage.StartDate.Value.Second);
            }
            else
            {
                // We have no start date mark this as closed.
                payload.Closed = true;
                payload.CanUnregister = false;

                return Json(payload);
            }

            // Closing un-registrations ?
            if (eventDate < DateTime.Now)
            {
                // Course closed
                payload.Closed = true;
            }

            var stopRegistrations = eventDate.AddHours(-48);
            if (stopRegistrations < DateTime.Now)
            {
                payload.CanUnregister = false;
            }
            else
            {
                payload.CanUnregister = true;
            }
            
            return Json(payload);
        }

        [HttpPost]
        public IHttpActionResult GetEventPost(int eventId)
        {
            var typedContent = Umbraco.TypedContent(eventId).ToModel<EventPageModel>();
            var result = new { typedContent.Id, typedContent.EventName, typedContent.Url, typedContent.StartDate, typedContent.EndDate };

            return Json(result);
        }

        [HttpPost]
        public IHttpActionResult GetMyEventsPost()
        {
            var currentMemberId = Members.GetCurrentMemberId();
            var events = EventRepository.GetEventsForMember(currentMemberId).ToList();
            var payload = new PayloadResult();

            var activeCourses = events
                .Where(x => x.EventActivities.Last().EndDate > DateTime.Now)
                .Select(x => new { x.Id, x.EventName, x.Url, x.StartDate, x.EndDate });

            var oldCourses = events
                .Where(x => x.EventActivities.Last().EndDate < DateTime.Now)
                .Select(x => new { x.Id, x.EventName, x.Url, x.StartDate, x.EndDate });

            payload.SetOrUpdate("activeEvents", activeCourses);
            payload.SetOrUpdate("oldEvents", oldCourses);

            return Json(payload);
        }
    }
}