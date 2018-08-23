namespace AngularEventSite.Web.Controllers.PageControllers
{
    using AngularEventSite.Web.ContentFinders;
    using AngularEventSite.Web.Models;

    public class ProfileContentFinder : DocumentTypeUrlNodeRouteHandler
    {
        /// <inheritdoc />
        public ProfileContentFinder()
            : base(nameof(ProfilePageModel))
        {
        }
    }
}