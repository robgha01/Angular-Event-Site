namespace AngularEventSite.Web.Controllers
{
    using System.Linq;
    using System.Net;
    using System.Text;
    using System.Web.Mvc;

    using BlueLeet.Common.Web.Mvc;
    using BlueLeet.UCodeFirst.Extensions;
    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Entities.Payloads;
    using AngularEventSite.Web.Models;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    using Umbraco.Web.Mvc;

    /// <summary>
    /// Defines a base class for surface controllers.
    /// </summary>
    public abstract class BaseSurfaceController : SurfaceController
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BaseSurfaceController"/> class.
        /// </summary>
        /// <param name="contextService">
        /// The context Service.
        /// </param>
        /// <param name="membershipService">
        /// The membership Service.
        /// </param>
        /// <param name="codeFirstHelper">
        /// The code First Helper.
        /// </param>
        protected BaseSurfaceController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper)
        {
            ContextService = contextService;
            MembershipService = membershipService;
            CodeFirstHelper = codeFirstHelper;
        }

        public IUCodeFirstHelper CodeFirstHelper { get; }

        public IContextService ContextService { get; }

        /// <summary>
        /// Gets or sets the membership helper.
        /// </summary>
        public virtual IMembershipService MembershipHelper { get; set; }

        public IMembershipService MembershipService { get; }

        public CustomizedJsonResult Error(
            object data,
            HttpStatusCode statusCode = HttpStatusCode.BadRequest,
            JsonSerializerSettings settings = null)
        {
            return Error(data, null, null, JsonRequestBehavior.DenyGet, statusCode, settings);
        }

        public CustomizedJsonResult Error(
            object data,
            string contentType,
            HttpStatusCode statusCode = HttpStatusCode.BadRequest,
            JsonSerializerSettings settings = null)
        {
            return Error(data, contentType, null, JsonRequestBehavior.DenyGet, statusCode, settings);
        }

        public CustomizedJsonResult Error(
            object data,
            string contentType,
            Encoding contentEncoding,
            HttpStatusCode statusCode = HttpStatusCode.BadRequest,
            JsonSerializerSettings settings = null)
        {
            return Error(data, contentType, contentEncoding, JsonRequestBehavior.DenyGet, statusCode, settings);
        }

        public CustomizedJsonResult Error(
            object data,
            JsonRequestBehavior behavior,
            HttpStatusCode statusCode = HttpStatusCode.BadRequest,
            JsonSerializerSettings settings = null)
        {
            return Error(data, null, null, behavior, statusCode, settings);
        }

        public CustomizedJsonResult Error(
            object data,
            string contentType,
            JsonRequestBehavior behavior,
            HttpStatusCode statusCode = HttpStatusCode.BadRequest,
            JsonSerializerSettings settings = null)
        {
            return Error(data, contentType, null, behavior, statusCode, settings);
        }

        public CustomizedJsonResult Error(
            object data,
            string contentType,
            Encoding contentEncoding,
            JsonRequestBehavior behavior,
            HttpStatusCode statusCode = HttpStatusCode.BadRequest,
            JsonSerializerSettings settings = null)
        {
            Response.StatusCode = (int)statusCode;
            Response.SuppressFormsAuthenticationRedirect = true;
            return Json(data, contentType, contentEncoding, behavior, settings);
        }

        public CustomizedJsonResult Json(object data, JsonSerializerSettings settings = null)
        {
            return Json(data, null, null, JsonRequestBehavior.DenyGet, settings);
        }

        public CustomizedJsonResult Json(object data, string contentType, JsonSerializerSettings settings = null)
        {
            return Json(data, contentType, null, JsonRequestBehavior.DenyGet, settings);
        }

        public CustomizedJsonResult Json(
            object data,
            string contentType,
            Encoding contentEncoding,
            JsonSerializerSettings settings = null)
        {
            return Json(data, contentType, contentEncoding, JsonRequestBehavior.DenyGet, settings);
        }

        public CustomizedJsonResult Json(
            object data,
            JsonRequestBehavior behavior,
            JsonSerializerSettings settings = null)
        {
            return Json(data, null, null, behavior, settings);
        }

        public CustomizedJsonResult Json(
            object data,
            string contentType,
            JsonRequestBehavior behavior,
            JsonSerializerSettings settings = null)
        {
            return Json(data, contentType, null, behavior, settings);
        }

        public CustomizedJsonResult Json(
            object data,
            string contentType,
            Encoding contentEncoding,
            JsonRequestBehavior behavior,
            JsonSerializerSettings settings = null)
        {
            if (settings == null)
            {
                settings = new JsonSerializerSettings();
            }

            settings.NullValueHandling = NullValueHandling.Ignore;
            if (settings.ContractResolver == null)
            {
                settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            }

            // BugFix for Newtonsoft json serializer below is not needed when this is released (https://github.com/JamesNK/Newtonsoft.Json/issues/1077)
            if (data is PayloadResult)
            {
                // ToDo: refactor this to correct location ?
                var payload = (PayloadResult)data;

                // if (payload.MessageType == GenericMessages.Danger && payload.Values.ContainsKey(nameof(PayloadFields.Raw)))
                // {
                // var error = payload.GetValue(nameof(PayloadFields.Raw));
                // payload.Values.Remove(nameof(PayloadFields.Raw));
                // payload.SetOrUpdate(nameof(PayloadFields.Error), error);
                // }

                // if (payload.Values.ContainsKey(nameof(PayloadFields.Raw)))
                // {
                // payload.Values.Remove(nameof(PayloadFields.Raw));
                // }

                // var dataCopy = new Dictionary<string, object>(payload.Values);
                // payload.SetOrUpdate(nameof(PayloadFields.Raw), dataCopy);
                data = payload.Values;
            }

            return BlueLeet.Common.Extensions.ControllerExtensions.CustomJson(
                this,
                data,
                contentType,
                contentEncoding,
                behavior,
                settings);
        }

        /// <summary>
        /// Redirects to the <c>Umbraco</c> page to the start page
        /// </summary>
        /// <returns>The <see cref="RedirectToUmbracoPageResult"/>.</returns>
        protected RedirectToUmbracoPageResult RedirectToWellaStartPage()
        {
            var currentPage = Umbraco.AssignedContentItem.ToModel();
            var startPage = currentPage.Descendants<StartPageModel>().First();

            return new RedirectToUmbracoPageResult(startPage.Content, UmbracoContext);
        }
    }
}