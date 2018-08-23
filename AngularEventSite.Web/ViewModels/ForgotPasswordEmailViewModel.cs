namespace AngularEventSite.Web.ViewModels
{
    using AngularEventSite.Web.Abstraction;

    /// <summary>
    /// The forgot password email view model.
    /// </summary>
    public class ForgotPasswordEmailViewModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ForgotPasswordEmailViewModel"/> class.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <param name="returnUrl">
        /// The return url.
        /// </param>
        public ForgotPasswordEmailViewModel(ISiteMember member, string returnUrl)
        {
            Member = member;
            ReturnUrl = returnUrl;
        }

        /// <summary>
        /// Gets or sets the member.
        /// </summary>
        public ISiteMember Member { get; set; }

        /// <summary>
        /// Gets or sets the return url.
        /// </summary>
        public string ReturnUrl { get; set; }
    }
}