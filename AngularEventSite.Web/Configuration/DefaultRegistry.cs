namespace AngularEventSite.Web.Configuration
{
    using System.Configuration;
    using System.Web;
    using System.Web.Hosting;

    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.AssetResolver;
    using AngularEventSite.Web.AssetResolver.Abstraction;
    using AngularEventSite.Web.Entities;
    using AngularEventSite.Web.Enums;
    using AngularEventSite.Web.Mailer;
    using AngularEventSite.Web.Services;
    using AngularEventSite.Web.SiteNavigator;
    using AngularEventSite.Web.SiteNavigator.Abstraction;

    using JetBrains.Annotations;

    using RazorMailer.Core.Dispatchers;

    using StructureMap;

    using Umbraco.Core;

    /// <summary>
    /// The project registry.
    /// </summary>
    [UsedImplicitly]
    public class DefaultRegistry : Registry
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultRegistry"/> class.
        /// </summary>
        public DefaultRegistry()
        {
            For<IViewLayoutSettings>().Use<ViewLayoutSettings>().Ctor<LayoutType>().Is(LayoutType.FluidLayout);
            For<HttpContextBase>().Transient().Use(() => new HttpContextWrapper(HttpContext.Current));
            For<IContextService>().Transient().Use<AppContextService>();
            Forward<AppContextService, IContextService>();

            For<IEmailDispatcher>().Transient().Use<SmtpDispatcher>();
            For<IMailer>().Singleton().Use<DefaultMailer>();
            For<IConfigService>().Transient().Use<ConfigService>();
            For<IMembershipService>().AlwaysUnique().Use<MembershipService>();
            For<IUserService>().Transient().Use<UserService>();
            For<IResolveAsset>().Transient().Use(() => RegisterResolveAsset());
            For<ISiteMember>().AlwaysUnique().Use<DefaultSiteMember>();
            For<IMenuFactory<UCodeFirstContentTypeBase>>().Singleton().Use<UCodeFirstMenuFactory>();
            For<INavigatorContext<UCodeFirstContentTypeBase>>().Singleton()
                .Use<NavigatorContext<UCodeFirstContentTypeBase>>();

            Scan(
                _ =>
                    {
                        _.AssembliesFromApplicationBaseDirectory();
                        _.Convention<WebApiControllerConvention>();
                        _.AddAllTypesOf<IQuickNavigatorSet>();
                    });
        }

        private IResolveAsset RegisterResolveAsset()
        {
            var useDevServer = ConfigurationManager.AppSettings["Webpack:UseDevServer"];
            if (!string.IsNullOrEmpty(useDevServer))
            {
                var useWebpackDebserver = useDevServer.TryConvertTo<bool>();
                if (useWebpackDebserver.Success && useWebpackDebserver.Result)
                {
                    var url = ConfigurationManager.AppSettings["Webpack:DevServerRoot"].EnsureEndsWith("/");

                    return new WebpackDevelopmentAssetResolver($"{url}assets/assets.json", $"{url}assets/themes.json");
                }
            }

            return new WebpackAssetResolver(
                HostingEnvironment.MapPath("~/static/assets/assets.json"),
                HostingEnvironment.MapPath("~/static/assets/themes.json"));
        }
    }
}