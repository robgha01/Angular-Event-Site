namespace AngularEventSite.Web.Controllers.PageControllers
{
    using System.Web.Mvc;

    using BlueLeet.UCodeFirst.Controllers;
    using BlueLeet.UCodeFirst.Extensions;

    using AngularEventSite.Web.Models;

    using Umbraco.Web.Models;

    /// <summary>
    /// The profile page model controller.
    /// </summary>
    public class EventCodePageModelController : UCodeFirstController
    {
        /// <inheritdoc />
        public override ActionResult Index(RenderModel model)
        {
            var m = model.Content.ToModel<EventCodePageModel>().LoginPage;
            
            return View("~/Views/Login.cshtml", m);
        }
    }
}