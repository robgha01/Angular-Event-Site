namespace AngularEventSite.Web.Models
{
    using System.Diagnostics.CodeAnalysis;
    using System.Globalization;
    using System.Linq;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;
    using BlueLeet.UCodeFirst.Extensions;

    using Umbraco.Core.Models;

    [SuppressMessage(
        "StyleCop.CSharp.DocumentationRules",
        "SA1600:ElementsMustBeDocumented",
        Justification = "Reviewed. Suppression is OK here.")]
    [ContentType(DisplayName = "Base", Icon = Icon.Brick)]
    public abstract class BaseModel : UCodeFirstContentTypeBase
    {
        protected BaseModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        protected BaseModel(IPublishedContent content)
            : base(content)
        {
        }

        public ProfilePageModel ProfilePage => StartPage.Descendants<ProfilePageModel>().FirstOrDefault();

        public LoginPageModel LoginPage => StartPage.Descendants<LoginPageModel>().FirstOrDefault();

        public StartPageModel StartPage => this.AncestorOrSelf<StartPageModel>(1);

        public EventCodePageModel EventCodePage => StartPage.Descendants<EventCodePageModel>().FirstOrDefault();
    }
}