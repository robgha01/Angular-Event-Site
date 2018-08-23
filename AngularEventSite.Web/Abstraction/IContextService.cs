namespace AngularEventSite.Web.Abstraction
{
    using AngularEventSite.Web.Abstraction.Configuration;

    /// <summary>
    /// Describes a application.
    /// </summary>
    public interface IContextService
    {
        IConfigService Config { get; }

        /// <summary>
        /// Gets the mailer.
        /// </summary>
        IMailer Mailer { get; }

        /// <summary>
        /// Gets the membership helper.
        /// </summary>
        IMembershipService MembershipHelper { get; }

        /// <summary>
        /// Gets the user helper.
        /// </summary>
        IUserService UserHelper { get; }
    }
}