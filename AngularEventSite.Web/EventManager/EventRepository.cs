namespace AngularEventSite.Web.EventManager
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using BlueLeet.UCodeFirst.Extensions;
    using BlueLeet.UCodeFirst.Helpers;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.EventManager.Abstraction;
    using AngularEventSite.Web.EventManager.Entities;
    using AngularEventSite.Web.Models;

    using Umbraco.Core.Events;
    using Umbraco.Core.Logging;
    using Umbraco.Core.Models;
    using Umbraco.Core.Persistence;
    using Umbraco.Core.Services;
    using Umbraco.Web;

    public class EventRepository : RepositoryBase, IEventRepository
    {
        private readonly IMembershipService membershipService;

        public EventRepository(IMembershipService membershipService)
        {
            this.membershipService = membershipService;
            MemberService.Deleted += MemberServiceOnDeleted;
        }
        
        /// <inheritdoc />
        public EventStatus AddParticipant(int eventId, int memberId)
        {
            var exists = GetParticipant(eventId, memberId);
            if (exists != null)
            {
                // Already registered for this course!
                return EventStatus.Registered;
            }

            var member = membershipService.MapMember(Umbraco.MembershipHelper.GetById(memberId));

            // Check if company has participant
            var participants = GetParticipants(eventId);
            var companyExists = participants.FirstOrDefault(x => x.Company.Equals(member.Company));
            if (companyExists != null)
            {
                return EventStatus.CompanyAlreadyExists;
            }

            var participant = new Participant
            {
                EventId = eventId,
                MemberId = memberId
            };

            try
            {
                Database.Insert(participant);

                return EventStatus.Registered;
            }
            catch (Exception e)
            {
                LogHelper.Error<EventRepository>(e.Message, e);
                return EventStatus.Unknown;
            }
        }

        /// <inheritdoc />
        public EventStatus RemoveParticipant(int eventId, int memberId)
        {
            try
            {
                var sql =
                    new Sql().Select("*")
                        .From<Participant>(SqlSyntax)
                        .Where("event_id = @0", eventId)
                        .Where("member_id = @0", memberId);

                var participant = Database.FirstOrDefault<Participant>(sql);
                if (participant != null)
                {
                    Database.Delete(participant);
                }

                return EventStatus.Unregistered;
            }
            catch (Exception e)
            {
                LogHelper.Error<EventRepository>(e.Message, e);
                return EventStatus.Unknown;
            }
        }

        /// <inheritdoc />
        public IEnumerable<ISiteMember> GetParticipants(int eventId)
        {
            var sql =
                new Sql().Select("*")
                    .From<Participant>(SqlSyntax)
                    .Where("event_id = @0", eventId);

            var members = Database.Fetch<Participant>(sql);

            foreach (var m in members)
            {
                var typedMember = Umbraco.TypedMember(m.MemberId);
                if (typedMember == null)
                {
                    continue;
                }

                var mappedMember = membershipService.MapMember(typedMember);
                yield return mappedMember;
            }
        }

        /// <inheritdoc />
        public ISiteMember GetParticipant(int eventId, int memberId)
        {
            var sql = new Sql().Select("*")
                .From<Participant>(SqlSyntax)
                .Where("event_id = @0", eventId)
                .Where("member_id = @0", memberId);

            var participant = Database.FirstOrDefault<Participant>(sql);
            if (participant == null)
            {
                return null;
            }

            var typedMember = Umbraco.TypedMember(participant.MemberId);
            var mappedMember = membershipService.MapMember(typedMember);

            return mappedMember;
        }

        /// <inheritdoc />
        public IEnumerable<EventPageModel> GetEventsForMember(int memberId)
        {
            var sql = new Sql().Select("*")
                .From<ClaremontEvent>(SqlSyntax)
                .Where("member_id = @0", memberId);

            var participants = Database.Query<ClaremontEvent>(sql).ToList();
            if (participants.Any())
            {
                var helper = new UCodeFirstHelper();
                foreach (var participant in participants)
                {
                    yield return helper.TypedContent<EventPageModel>(participant.EventId);
                }
            }
        }

        /// <inheritdoc />
        public EventStatus UnlockEvent(string eventCode, int memberId, out EventPageModel eventPage)
        {
            eventPage = null;
            var eventPageWithCode = UmbracoContext.Current.PublishedContentRequest.PublishedContent
                .ToModel<BaseContentModel>().StartPage.Descendants<EventPageModel>()
                .SingleOrDefault(x => x.EventCode.Equals(eventCode, StringComparison.OrdinalIgnoreCase));

            if (eventPageWithCode != null)
            {
                eventPage = eventPageWithCode;

                if (IsEventUnlocked(eventPageWithCode.Id, memberId) == false)
                {
                    var eventEntity = new ClaremontEvent
                                          {
                                              EventId = eventPageWithCode.Id,
                                              MemberId = memberId
                                          };

                    Database.Insert(eventEntity);
                }
                
                return EventStatus.Unlocked;
            }
            
            return EventStatus.WrongEventCode;
        }

        /// <inheritdoc />
        public bool IsEventUnlocked(int eventId, int memberId)
        {
            var sql = new Sql().Select("*")
                .From<ClaremontEvent>(SqlSyntax)
                .Where("event_id = @0", eventId)
                .Where("member_id = @0", memberId);

            var claremontEvents = Database.Query<ClaremontEvent>(sql).ToList();
            if (claremontEvents.Any())
            {
                return true;
            }

            return false;
        }

        private void MemberServiceOnDeleted(IMemberService sender, DeleteEventArgs<IMember> deleteEventArgs)
        {
            foreach (var member in deleteEventArgs.DeletedEntities)
            {
                try
                {
                    var sql = new Sql().Select("*").From<Participant>(SqlSyntax).Where("member_id = @0", member);

                    var participant = Database.FirstOrDefault<Participant>(sql);
                    if (participant != null)
                    {
                        Database.Delete(participant);
                    }
                }
                catch (Exception e)
                {
                    LogHelper.Error<EventRepository>(e.Message, e);
                }
            }
        }
    }
}