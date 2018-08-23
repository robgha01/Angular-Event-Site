namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for Cookie Alert.
    /// </summary>
    [ContentType(
        DisplayName = "Member Configuration",
        Description = "",
        Icon = BelleIconPack.Muffin,
        IconColor = IconColor.Yellow)]
    public class MemberConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CookieAlertConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public MemberConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="CookieAlertConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public MemberConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        [Property(
            UmbracoDefaultDataType.Textstring,
            Tab.Settings,
            DisplayName = "Email: Forgot Password Subject",
            Description = "Set the mail subject for member forgot password.")]
        public virtual string EmailForgotPasswordSubject { get; set; }

        [Property(
            UmbracoDefaultDataType.Tags,
            Tab.Settings,
            DisplayName = "File Upload Allowed Extensions",
            Description = "Limits the file uploads to specified extensions.")]
        public virtual string FileUploadAllowedExtensions { get; set; }

        [Property(
            UmbracoDefaultDataType.Numeric,
            Tab.Settings,
            DisplayName = "File Upload Maximum Filesize",
            Description = "Limits the filesize.")]
        public int FileUploadMaximumFilesize { get; set; }
    }
}