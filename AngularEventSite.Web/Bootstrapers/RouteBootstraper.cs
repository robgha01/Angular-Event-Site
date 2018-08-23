namespace AngularEventSite.Web.Bootstrapers
{
    using AngularEventSite.Web.Controllers.PageControllers;

    using JetBrains.Annotations;

    using Umbraco.Core;
    using Umbraco.Web.Routing;

    /// <summary>
    /// The route <c>bootstraper</c>.
    /// </summary>
    [UsedImplicitly]
    public sealed class RouteBootstraper : ApplicationBootstrapBase
    {
        /// <inheritdoc />
        protected override void ApplicationStarting(
            UmbracoApplicationBase umbracoApplication,
            ApplicationContext applicationContext)
        {
            // RegisterProfileRoute();
            Register404Route();
        }

        private void Register404Route()
        {
            // ContentLastChanceFinderResolver.Current.SetFinder(new NotFoundContentFinder<ErrorPageModel, string>(model => model.GetValue<string>("Name"), () => "404"));
        }

        private void RegisterProfileRoute()
        {
            // With the url providers we can change node urls.
            UrlProviderResolver.Current.InsertTypeBefore<DefaultUrlProvider, ProfileUrlProvider>();

            // With the content finder we can match nodes to urls.
            ContentFinderResolver.Current.InsertTypeBefore<ContentFinderByNotFoundHandlers, ProfileContentFinder>();
        }
    }
}