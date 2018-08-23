namespace AngularEventSite.Web.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    using BlueLeet.UCodeFirst.Helpers.Abstraction;
    using BlueLeet.UWeb.Attributes;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Entities;

    /// <summary>
    /// The quick navigator widget controller.
    /// </summary>
    public class QuickNavigatorWidgetController : BaseApiController
    {
        private readonly IEnumerable<IQuickNavigatorSet> quickNavigatorSets;

        /// <inheritdoc />
        public QuickNavigatorWidgetController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper,
            IEnumerable<IQuickNavigatorSet> quickNavigatorSets)
            : base(contextService, membershipService, codeFirstHelper)
        {
            this.quickNavigatorSets = quickNavigatorSets;
        }

        /// <summary>
        /// Get link items using post.
        /// </summary>
        /// <returns>
        /// A <c>json</c> <see cref="QuickNavigatorMenu"/> with <see cref="QuickNavigatorMenuItem"/>'s
        /// </returns>
        [UmbracoAuthorizeApi]
        [HttpPost]
        public IHttpActionResult GetLinkItemsPost()
        {
            var menu = new QuickNavigatorMenu();
            menu.EditLinkUrl = "/umbraco/#/content/content/edit/" + CurrentPage.Id;
            menu.Items.Add(new QuickNavigatorMenuItem("Dashboard", "/umbraco"));
            menu.Items.Add(new QuickNavigatorMenuItem("CMS Edit", menu.EditLinkUrl));

            foreach (var navigatorSet in quickNavigatorSets)
            {
                foreach (var menuItem in navigatorSet.GetMenuItems())
                {
                    menu.Items.Add(menuItem);
                }
            }

            return Json(menu);
        }
    }
}