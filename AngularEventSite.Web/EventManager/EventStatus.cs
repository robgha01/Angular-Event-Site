namespace AngularEventSite.Web.EventManager
{
    /// <summary>
    /// The event status.
    /// </summary>
    public enum EventStatus
    {
        /// <summary>
        /// The unknown flag.
        /// </summary>
        Unknown,

        /// <summary>
        /// The registered flag.
        /// </summary>
        Registered,

        /// <summary>
        /// The unregistered.
        /// </summary>
        Unregistered,

        /// <summary>
        /// The full.
        /// </summary>
        Full,

        /// <summary>
        /// The company already exists flag.
        /// </summary>
        CompanyAlreadyExists,

        /// <summary>
        /// The unlocked flag.
        /// </summary>
        Unlocked,

        /// <summary>
        /// The wrong event code flag.
        /// </summary>
        WrongEventCode
    }
}