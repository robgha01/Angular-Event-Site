namespace AngularEventSite.Web.Controllers
{
    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;

    /// <summary>
    /// The admin surface controller.
    /// </summary>
    public class AdminSurfaceController : BaseSurfaceController
    {
        /// <inheritdoc />
        public AdminSurfaceController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper)
            : base(contextService, membershipService, codeFirstHelper)
        {
        }
    }
}