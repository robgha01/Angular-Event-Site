namespace AngularEventSite.Web.Models.Configuration
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;
    using BlueLeet.UComponents.UCodeFirst;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model for email.
    /// </summary>
    [ContentType(DisplayName = "Email", Description = "", Icon = BelleIconPack.Mailbox, IconColor = IconColor.Green)]
    public class EmailConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EmailConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public EmailConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EmailConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public EmailConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        [Property(
            UmbracoDefaultDataType.Textstring,
            Tab.Settings,
            DisplayName = "#NotificationEmailAddress name",
            Description = "#NotificationEmailAddress description")]
        public virtual string NotificationEmailAddress { get; set; }

        [Property(
            UComponentsDataType.ToggleBox,
            Tab.Settings,
            DisplayName = "#NotifyOnNewMemberSignup name",
            Description = "#NotifyOnNewMemberSignup description")]
        public virtual bool NotifyOnNewMemberSignup { get; set; }
    }
}