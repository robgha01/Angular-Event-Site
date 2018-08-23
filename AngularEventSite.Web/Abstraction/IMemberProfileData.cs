namespace AngularEventSite.Web.Abstraction
{
    using System;

    using AngularEventSite.Web.Enums;

    /// <summary>
    /// The MemberProfileData interface.
    /// </summary>
    public interface IMemberProfileData
    {
        /// <summary>
        /// Gets or sets the birthday.
        /// </summary>
        DateTime? Birthday { get; set; }

        /// <summary>
        /// Gets or sets the gender.
        /// </summary>
        Gender Gender { get; set; }
    }
}