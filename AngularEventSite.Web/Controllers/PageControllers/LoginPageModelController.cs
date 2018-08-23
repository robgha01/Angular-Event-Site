namespace AngularEventSite.Web.Controllers.PageControllers
{
    using System.Linq;
    using System.Web.Mvc;

    using BlueLeet.UCodeFirst.Controllers;
    using BlueLeet.UCodeFirst.Extensions;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.Models;

    using Umbraco.Web.Models;

    /// <summary>
    /// The login page model controller.
    /// </summary>
    public class LoginPageModelController : UCodeFirstController
    {
        private readonly IConfigService configService;

        private readonly IMembershipService membershipService;

        /// <summary>
        /// Initializes a new instance of the <see cref="LoginPageModelController"/> class.
        /// </summary>
        /// <param name="configService">
        /// The config Service.
        /// </param>
        /// <param name="membershipService">
        /// The membership service.
        /// </param>
        public LoginPageModelController(IConfigService configService, IMembershipService membershipService)
        {
            this.configService = configService;
            this.membershipService = membershipService;
        }

        /// <inheritdoc />
        public override ActionResult Index(RenderModel model)
        {
            var confirmEmailToken = Request.QueryString["confirmEmailToken"];
            if (confirmEmailToken != null)
            {
                var tryGetMember = Services.MemberService
                    .GetMembersByPropertyValue(configService.PropSecurityToken, confirmEmailToken).SingleOrDefault();
                if (tryGetMember != null)
                {
                    ViewBag.EmailConfirmed = membershipService.ConfirmEmail(tryGetMember);
                }
            }

            if (Members.IsLoggedIn())
            {
                Response.Redirect(CurrentPage.ToModel<BaseContentModel>().StartPage.Url);
            }

            return base.Index(model);
        }
    }
}