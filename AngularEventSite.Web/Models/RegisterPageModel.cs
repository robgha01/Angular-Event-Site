namespace SpecialistHjalpen.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using Umbraco.Core.Models;

    using SpecialistHjalpen.Web.Abstraction;

    [ContentType(DisplayName = "Register", Icon = BelleIconPack.Addfriend)]
    public class RegisterPageModel : BaseContentModel
    {
        /// <inheritdoc/>
        public RegisterPageModel(IPublishedContent content, CultureInfo culture, IContextService contextService)
            : base(content, culture, contextService)
        {
        }

        /// <inheritdoc/>
        public RegisterPageModel(IPublishedContent content, IContextService contextService)
            : base(content, contextService)
        {
        }
    }
}