namespace AngularEventSite.Web.Entities
{
    using AngularEventSite.Web.Abstraction;

    /// <summary>
    /// The email confirmation model.
    /// </summary>
    public class EmailConfirmationModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EmailConfirmationModel"/> class.
        /// </summary>
        public EmailConfirmationModel()
            : this(null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EmailConfirmationModel"/> class.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        public EmailConfirmationModel(ISiteMember member)
            : this(member, string.Empty)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EmailConfirmationModel"/> class.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <param name="confirmationUrl">
        /// The confirmation Url.
        /// </param>
        public EmailConfirmationModel(ISiteMember member, string confirmationUrl)
        {
            Member = member;
            ConfirmationUrl = confirmationUrl;
        }

        public string ConfirmationUrl { get; set; }

        public ISiteMember Member { get; set; }
    }
}