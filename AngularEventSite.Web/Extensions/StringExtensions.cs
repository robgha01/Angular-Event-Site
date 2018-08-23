namespace AngularEventSite.Web.Extensions
{
    using System.Globalization;
    using System.IO;
    using System.Text.RegularExpressions;

    using JetBrains.Annotations;

    /// <summary>
    /// The string extensions.
    /// </summary>
    [UsedImplicitly]
    public static class StringExtensions
    {
        /// <summary>
        /// Capitalize the first letter in all words using <paramref name="cultureInfo"/>.
        /// </summary>
        /// <param name="s">
        /// The string.
        /// </param>
        /// <param name="cultureInfo">
        /// The culture info.
        /// </param>
        /// <returns>
        /// A capitalized string.
        /// </returns>
        public static string CapitalizeAll(this string s, CultureInfo cultureInfo = null)
        {
            var textInfo = cultureInfo?.TextInfo ?? CultureInfo.CurrentCulture.TextInfo;
            return textInfo.ToTitleCase(s);
        }

        public static string SafeFileName(this string name)
        {
            var invalidChars = new string(Path.GetInvalidFileNameChars());
            var escapedInvalidChars = Regex.Escape(invalidChars);
            var invalidRegex = string.Format(@"([{0}]*\.+$)|([{0}]+)", escapedInvalidChars);

            return Regex.Replace(name, invalidRegex, "-");
        }
    }
}