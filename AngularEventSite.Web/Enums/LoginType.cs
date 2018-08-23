namespace AngularEventSite.Web.Enums
{
    using System;

    /// <summary>
    /// Describes a login type.
    /// </summary>
    [Flags]
    public enum LoginType
    {
        /// <summary>
        /// Facebook type.
        /// </summary>
        Facebook,

        /// <summary>
        /// Google type.
        /// </summary>
        Google,

        /// <summary>
        /// Standard type.
        /// </summary>
        Standard
    }
}