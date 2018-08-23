namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using Umbraco.Core.Models;

    [ContentType(DisplayName = "Login", Icon = Icon.Lock)]
    public class LoginPageModel : BaseContentModel
    {
        /// <inheritdoc/>
        public LoginPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <inheritdoc/>
        public LoginPageModel(IPublishedContent content)
            : base(content)
        {
        }
    }
}