namespace AngularEventSite.Web.Abstraction
{
    using AngularEventSite.Web.Models;

    /// <summary>
    /// Describes the mailer for <c>angulareventsite</c>.
    /// </summary>
    public interface IMailer
    {
        /// <summary>
        /// Send a confirmation email.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <param name="returnUrl">
        /// The return Url.
        /// </param>
        void SendEmailConfirmation(ISiteMember member, string returnUrl);

        /// <summary>
        /// Send a forgot password to <paramref name="member"/>.
        /// </summary>
        /// <param name="member">
        /// Member driven from <see cref="ISiteMember"/>.
        /// </param>
        /// <param name="returnUrl">
        /// The return Url.
        /// </param>
        void SendForgotPassword(ISiteMember member, string returnUrl);

        /// <summary>
        /// Send notification of a new <c>member</c> registration.
        /// </summary>
        /// <param name="member">
        ///     Member driven from <see cref="ISiteMember"/>.
        /// </param>
        void SendNotifyNewMemberRegistration(ISiteMember member);
        
        void SendNotifyEventApplied(ISiteMember member, EventPageModel eventPageModel);

        void ScheduleSendNotifyEventStart(ISiteMember member, EventPageModel eventPageModel, EventActivityPageModel activityPageModel);

        void RemoveScheduleNotifyEventStart(ISiteMember member, EventPageModel eventPageModel);
    }
}