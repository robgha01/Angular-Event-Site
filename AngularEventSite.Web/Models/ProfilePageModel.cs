namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Abstraction;

    using Umbraco.Core.Models;

    /// <inheritdoc/>
    [ContentType(DisplayName = "Sida: Profil", Icon = Icon.People, Description = "")]
    public class ProfilePageModel : BaseContentModel
    {
        /// <inheritdoc/>
        public ProfilePageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <inheritdoc/>
        public ProfilePageModel(IPublishedContent content)
            : base(content)
        {
        }

        /// <summary>
        /// Gets or sets the member.
        /// </summary>
        public ISiteMember Member { get; set; }
    }
}