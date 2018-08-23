namespace AngularEventSite.Web.Enums
{
    using System.Diagnostics.CodeAnalysis;

    using JetBrains.Annotations;

    public enum MemberStatus
    {
        /// <summary>
        /// The unknown.
        /// </summary>
        [UsedImplicitly]
        Unknown,

        /// <summary>
        /// The now registered need approval flag.
        /// </summary>
        [UsedImplicitly]
        NeedApproval,

        /// <summary>
        /// The member email authorisation needed flag.
        /// </summary>
        /// <remarks>
        /// Is used when the member need to confirm there email.
        /// </remarks>
        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1650:ElementDocumentationMustBeSpelledCorrectly",
            Justification = "Reviewed. Suppression is OK here.")]
        [UsedImplicitly]
        EmailAuthorisationNeeded,

        /// <summary>
        /// The now registered flag.
        /// </summary>
        [UsedImplicitly]
        Registered,

        /// <summary>
        /// The not registered flag.
        /// </summary>
        [UsedImplicitly]
        NotRegistered,

        /// <summary>
        /// The login expired flag.
        /// </summary>
        [UsedImplicitly]
        LoginExpired,

        /// <summary>
        /// The email retrieval disallowed flag.
        /// </summary>
        [UsedImplicitly]
        EmailRetrievalDisallowed,

        /// <summary>
        /// The already logged in flag.
        /// </summary>
        [UsedImplicitly]
        AlreadyLoggedIn,

        /// <summary>
        /// The logged in flag.
        /// </summary>
        [UsedImplicitly]
        LoggedIn,

        /// <summary>
        /// The authorization failure flag.
        /// </summary>
        [UsedImplicitly]
        AuthorizationFailure,

        /// <summary>
        /// The facebook integrated flag.
        /// </summary>
        FacebookIntegrated,

        /// <summary>
        /// The already registered flag.
        /// </summary>
        [UsedImplicitly]
        AlreadyRegistered,

        /// <summary>
        /// The admin logged in flag.
        /// </summary>
        [UsedImplicitly]
        AdminLoggedIn
    }
}