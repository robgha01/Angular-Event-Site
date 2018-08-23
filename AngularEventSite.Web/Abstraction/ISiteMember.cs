namespace AngularEventSite.Web.Abstraction
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;

    using AngularEventSite.Web.Enums;

    using Umbraco.Core.Models;

    /// <summary>
    /// Describes a <c>AngularEventSiteMember</c>.
    /// </summary>
    [SuppressMessage(
        "StyleCop.CSharp.DocumentationRules",
        "SA1650:ElementDocumentationMustBeSpelledCorrectly",
        Justification = "Reviewed. Suppression is OK here.")]
    public interface ISiteMember
    {
        /// <summary>
        /// Gets or sets the about me.
        /// </summary>
        string AboutMe { get; set; }

        /// <summary>
        /// Gets or sets the avatar.
        /// </summary>
        string Avatar { get; set; }

        /// <summary>
        /// Gets or sets the bio.
        /// </summary>
        string Bio { get; set; }

        string Company { get; set; }

        /// <summary>
        /// Gets or sets the date created.
        /// </summary>
        DateTime CreateDate { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether to disable email notifications.
        /// </summary>
        bool DisableEmailNotifications { get; set; }

        /// <summary>
        /// Gets or sets the email.
        /// </summary>
        string Email { get; set; }

        /// <summary>
        /// Gets or sets the facebook access token.
        /// </summary>
        string FacebookAccessToken { get; set; }

        /// <summary>
        /// Gets or sets the facebook id.
        /// </summary>
        string FacebookId { get; set; }

        /// <summary>
        /// Gets or sets the first name.
        /// </summary>
        string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the member groups <c>this</c> user belong to.
        /// </summary>
        Lazy<IEnumerable<IMemberGroup>> Groups { get; set; }

        /// <summary>
        /// Gets a value indicating whether <see langword="this"/> member has an avatar.
        /// </summary>
        bool HasAvatar { get; }

        /// <summary>
        /// Gets or sets the id.
        /// </summary>
        int Id { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether is approved.
        /// </summary>
        bool IsApproved { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this model is approved or not.
        /// </summary>
        bool IsApprovedMember { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether is email confirmed.
        /// </summary>
        bool IsEmailConfirmed { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether is locked out.
        /// </summary>
        bool IsLockedOut { get; set; }

        /// <summary>
        /// Gets or sets the last login date.
        /// </summary>
        DateTime LastLoginDate { get; set; }

        /// <summary>
        /// Gets or sets the last name.
        /// </summary>
        string LastName { get; set; }

        /// <summary>
        /// Gets or sets the login type.
        /// </summary>
        LoginType LoginType { get; set; }

        /// <summary>
        /// Gets or sets the member field.
        /// </summary>
        string MemberField { get; set; }

        /// <summary>
        /// Gets the name.
        /// </summary>
        string Name { get; }

        string Phone { get; set; }

        /// <summary>
        /// Gets or sets the profile data.
        /// </summary>
        IMemberProfileData ProfileData { get; set; }

        /// <summary>
        /// Gets or sets the security token.
        /// </summary>
        string SecurityToken { get; set; }

        /// <summary>
        /// Gets or sets the security token expire date.
        /// </summary>
        DateTime? SecurityTokenExpireDate { get; set; }

        /// <summary>
        /// Gets or sets the signature.
        /// </summary>
        string Signature { get; set; }

        /// <summary>
        /// Gets or sets the user name.
        /// </summary>
        string UserName { get; set; }

        /// <summary>
        /// Get photos.
        /// </summary>
        /// <returns>
        /// Returns a <see cref="IEnumerable{IMedia}"/> with image urls.
        /// </returns>
        IEnumerable<IMedia> GetPhotos();

        /// <summary>
        /// Get the profile image.
        /// </summary>
        /// <param name="size">
        /// The size.
        /// </param>
        /// <returns>
        /// The <see cref="string"/>.
        /// </returns>
        string GetProfileImage(int size);
    }
}