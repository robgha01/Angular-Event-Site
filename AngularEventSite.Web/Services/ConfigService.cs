namespace AngularEventSite.Web.Services
{
    using System;
    using System.Configuration;
    using System.Linq;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.Extensions;

    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.Models;

    using Umbraco.Core;
    using Umbraco.Web;

    public class ConfigService : IConfigService
    {
        private readonly Lazy<string> registerUrl;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConfigService"/> class.
        /// </summary>
        /// <exception cref="NullReferenceException">
        /// Throws if app setting Webpack:DevServerRoot is empty when Webpack:UseDevServer is enabled
        /// </exception>
        public ConfigService()
        {
            registerUrl = new Lazy<string>(GetRegisterUrl);

            if (ConfigurationManager.AppSettings.AllKeys.Contains("Webpack:UseDevServer"))
            {
                var webpackDevserver = ConfigurationManager.AppSettings["Webpack:UseDevServer"].TryConvertTo<bool>();
                if (webpackDevserver.Success)
                {
                    UseWebpackDevServer = webpackDevserver.Result;
                }

                if (ConfigurationManager.AppSettings.AllKeys.Contains("Webpack:DevServerRoot"))
                {
                    WebpackDevServerRoot = ConfigurationManager.AppSettings["Webpack:DevServerRoot"];

                    if (UseWebpackDevServer && string.IsNullOrEmpty(WebpackDevServerRoot))
                    {
                        throw new NullReferenceException(
                            "App setting Webpack:DevServerRoot should not be empty when Webpack:UseDevServer is enabled!");
                    }
                }
            }

            // Get and set the page specific configurations.
            if (UmbracoContext.Current != null && UmbracoContext.Current.PageId.HasValue)
            {
                var helper = new UmbracoHelper(UmbracoContext.Current);
                MembersEmailConfirmationSubject = helper.GetDictionaryValue(
                    "Members.EmailConfirmationSubject",
                    "Members.EmailConfirmationSubject");
                MembersEmailForgotPasswordSubject = helper.GetDictionaryValue(
                    "Members.EmailForgotPasswordSubject",
                    "Members.EmailForgotPasswordSubject");
            }
        }

        /// <inheritdoc />
        public string DefaultEmailAddress { get; } = ConfigurationManager.AppSettings["Mail:DefaultEmailAddress"];

        /// <inheritdoc />
        public string DefaultEmailName { get; } = ConfigurationManager.AppSettings["Mail:DefaultEmailName"];

        /// <inheritdoc />
        public string MembersEmailConfirmationSubject { get; }

        /// <inheritdoc />
        public string MembersEmailForgotPasswordSubject { get; }

        /// <inheritdoc />
        public string NewMemberGroup { get; } = ConfigurationManager.AppSettings["Member:NewMemberGroup"];

        /// <inheritdoc />
        public string NotificationEmailAddress { get; } =
            ConfigurationManager.AppSettings["Mail:NotificationEmailAddress"];

        /// <inheritdoc />
        public string PropAboutMe { get; } = nameof(MemberTypes.SiteMember.AboutMe).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropAvatar { get; } = nameof(MemberTypes.SiteMember.Avatar).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropCompany { get; } = nameof(MemberTypes.SiteMember.Company).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropFirstName { get; } = nameof(MemberTypes.SiteMember.FirstName).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropIsEmailConfirmed { get; } =
            nameof(MemberTypes.SiteMember.IsEmailConfirmed).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropLastName { get; } = nameof(MemberTypes.SiteMember.LastName).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropLoginType { get; } = nameof(MemberTypes.SiteMember.LoginType).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropPhone { get; } = nameof(MemberTypes.SiteMember.Phone).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropSecurityToken { get; } = nameof(MemberTypes.SiteMember.SecurityToken).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropSecurityTokenExpireDate { get; } =
            nameof(MemberTypes.SiteMember.SecurityTokenExpireDate).FirstCharacterToLower();

        /// <inheritdoc />
        public string PropSignature { get; } = nameof(MemberTypes.SiteMember.Signature).FirstCharacterToLower();

        /// <inheritdoc/>
        public string RegisterUrl
        {
            get
            {
                return registerUrl.Value;
            }
        }

        /// <inheritdoc />
        public bool UseWebpackDevServer { get; }

        /// <inheritdoc />
        public string WebpackDevServerRoot { get; }

        protected string GetRegisterUrl()
        {
            if (UmbracoContext.Current != null && UmbracoContext.Current.PageId.HasValue)
            {
                var helper = new UmbracoHelper(UmbracoContext.Current);
                var currentPage = helper.TypedContent(UmbracoContext.Current.PageId).ToModel();
                var startPageModel = currentPage.AncestorOrSelf<StartPageModel>();

                var registerPage = startPageModel.Descendants<LoginPageModel>().FirstOrDefault();
                if (registerPage != null)
                {
                    return registerPage.Url;
                }
            }

            return string.Empty;
        }
    }
}