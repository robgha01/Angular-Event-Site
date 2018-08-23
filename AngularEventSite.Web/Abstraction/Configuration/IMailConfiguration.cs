namespace AngularEventSite.Web.Abstraction.Configuration
{
    public interface IMailConfiguration
    {
        /// <summary>
        /// Gets the default email address to send from.
        /// </summary>
        string DefaultEmailAddress { get; }

        /// <summary>
        /// Gets the default email name.
        /// </summary>
        string DefaultEmailName { get; }

        /// <summary>
        /// Gets the email confirmation subject.
        /// </summary>
        string MembersEmailConfirmationSubject { get; }

        /// <summary>
        /// Gets the members email forgot password subject.
        /// </summary>
        string MembersEmailForgotPasswordSubject { get; }

        /// <summary>
        /// Gets the email address which to send notifications to.
        /// </summary>
        string NotificationEmailAddress { get; }
    }
}