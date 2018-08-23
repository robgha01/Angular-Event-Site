namespace AngularEventSite.Web.Abstraction
{
    using AngularEventSite.Web.Enums;

    /// <summary>
    /// The MemberEntity interface.
    /// </summary>
    public interface IMemberEntity
    {
        string Email { get; set; }

        string FirstName { get; set; }

        string LastName { get; set; }

        LoginType LoginType { get; set; }

        string Password { get; set; }

        string SocialProfileImageUrl { get; set; }

        string UserAccessToken { get; set; }

        /// <summary>
        /// Gets or sets the user name.
        /// </summary>
        string UserName { get; set; }
    }
}