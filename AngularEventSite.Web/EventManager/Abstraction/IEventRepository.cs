namespace AngularEventSite.Web.EventManager.Abstraction
{
    using System.Collections.Generic;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Models;

    public interface IEventRepository
    {
        /// <summary>
        /// Add a participant to course by id.
        /// </summary>
        /// <param name="eventId">
        /// The event id.
        /// </param>
        /// <param name="memberId">
        /// The member id.
        /// </param>
        /// <returns>
        /// A <see cref="EventStatus"/> describing the status of this operation.
        /// </returns>
        EventStatus AddParticipant(int eventId, int memberId);

        /// <summary>
        /// Remove a participant from a course by id.
        /// </summary>
        /// <param name="eventId">
        /// The event Id.
        /// </param>
        /// <param name="memberId">
        /// The member Id.
        /// </param>
        /// <returns>
        /// A <see cref="EventStatus"/> describing the status of this operation.
        /// </returns>
        EventStatus RemoveParticipant(int eventId, int memberId);

        /// <summary>
        /// Get participants by <c>course</c> id.
        /// </summary>
        /// <param name="eventId">
        /// The event Id.
        /// </param>
        /// <returns>
        /// A <see cref="IEnumerable{T}"/>.
        /// </returns>
        IEnumerable<ISiteMember> GetParticipants(int eventId);

        /// <summary>
        /// Get participant by event id and member id.
        /// </summary>
        /// <param name="eventId">
        /// The <c>event</c> id.
        /// </param>
        /// <param name="memberId">
        /// The <c>member</c> id.
        /// </param>
        /// <returns>
        /// A <see cref="ISiteMember"/>.
        /// </returns>
        ISiteMember GetParticipant(int eventId, int memberId);

        /// <summary>
        /// Get all events for a member.
        /// </summary>
        /// <param name="memberId">
        /// The member id.
        /// </param>
        /// <returns>
        /// A <see cref="IEnumerable{T}"/>.
        /// </returns>
        IEnumerable<EventPageModel> GetEventsForMember(int memberId);

        EventStatus UnlockEvent(string eventCode, int memberId, out EventPageModel eventPage);

        bool IsEventUnlocked(int eventId, int memberId);
    }
}