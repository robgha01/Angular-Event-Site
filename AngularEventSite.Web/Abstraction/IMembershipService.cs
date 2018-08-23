namespace AngularEventSite.Web.Abstraction
{
    using System;
    using System.Web.Security;

    using AngularEventSite.Web.Enums;

    using Umbraco.Core;
    using Umbraco.Core.Models;
    using Umbraco.Web.PublishedCache;

    /// <summary>
    /// The MembershipHelper interface.
    /// </summary>
    public interface IMembershipService
    {
        /// <summary>
        /// Gets the member register observable.
        /// </summary>
        IObservable<ISiteMember> MemberRegisterObservable { get; }

        bool ConfirmEmail(IMember member);

        /// <summary>
        /// Generate a password.
        /// </summary>
        /// <returns>
        /// The <see cref="string"/>.
        /// </returns>
        string GeneratePassword();

        /// <summary>
        /// Map a <c>Umbraco</c> <c>member</c> as <see cref="ISiteMember"/>.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <returns>
        /// The <see cref="ISiteMember"/>.
        /// </returns>
        ISiteMember MapMember(IMember member);

        /// <summary>
        /// Map a <c>Umbraco</c> <c>member</c> as <see cref="ISiteMember"/>.
        /// </summary>
        /// <param name="member">
        ///     The member.
        /// </param>
        /// <returns>
        /// The <see cref="ISiteMember"/>.
        /// </returns>
        ISiteMember MapMember(IPublishedContent member);

        IMember Register(
            IMemberEntity memberEntity,
            out MembershipCreateStatus createStatus,
            LoginType loginType = LoginType.Standard,
            string profileImageUrl = null,
            string facebookUserAccessToken = null);

        IMember Register(
            string username,
            string email,
            string firstName,
            string lastName,
            string password,
            out MembershipCreateStatus createStatus,
            LoginType loginType = LoginType.Standard,
            string profileImageUrl = null,
            string facebookUserAccessToken = null);

        /// <summary>
        /// Reset a password.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <param name="newPassword">
        /// The new password.
        /// </param>
        /// <returns>
        /// True if succeeded else False.
        /// </returns>
        bool ResetPassword(ISiteMember member, string newPassword);

        /// <summary>
        /// Maps back from <see cref="ISiteMember"/> to <see cref="IMember"/> member.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <param name="persistChanges">
        /// Persists any changes if set to true.
        /// </param>
        /// <returns>
        /// The <see cref="IMember"/>.
        /// </returns>
        IMember ReverseMapMember(ISiteMember member, bool persistChanges);

        /// <summary>
        /// Maps back from <see cref="ISiteMember"/> to <see cref="MemberPublishedContent"/> member.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <param name="persistChanges">
        /// Persists any changes if set to true.
        /// </param>
        /// <returns>
        /// The <see cref="IMember"/>.
        /// </returns>
        MemberPublishedContent ReverseMapPublishedMember(ISiteMember member, bool persistChanges);

        /// <summary>
        /// The save member.
        /// </summary>
        /// <param name="member">
        /// The member.
        /// </param>
        /// <returns>
        /// The <see cref="Attempt"/>.
        /// </returns>
        Attempt<object> SaveMember(ISiteMember member);
    }
}