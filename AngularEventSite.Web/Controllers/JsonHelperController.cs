// --------------------------------------------------------------------------------------------------------------------
// <copyright file="JsonHelperController.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved 
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   The <c>json</c> helper controller.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace SpecialistHjalpen.Web.Controllers
{
    using System.Collections.Generic;
    using System.Net;
    using System.Web.Http;
    using System.Web.Http.Results;

    using BlueLeet.UWeb.Abstraction;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    using Umbraco.Web.WebApi;

    /// <summary>
    /// The <c>json</c> helper controller.
    /// </summary>
    public class JsonHelperController : UmbracoApiController
    {
        private readonly IRouteFactory routeFactory;

        /// <summary>
        /// Initializes a new instance of the <see cref="JsonHelperController"/> class.
        /// </summary>
        /// <param name="routeFactory">
        /// The route factory.
        /// </param>
        public JsonHelperController(IRouteFactory routeFactory)
        {
            this.routeFactory = routeFactory;
        }

        // ToDo: Fix passing parameters as Dictionary inseted of string
        public NegotiatedContentResult<string> GetMacroResult(string alias, string parameters)
        {
            var par = System.Web.Helpers.Json.Decode<Dictionary<string, object>>(parameters);
            var html = this.Umbraco.RenderMacro(alias, par);

            return this.Content(HttpStatusCode.OK, html.ToHtmlString());
        }

        [HttpPost]
        public JsonResult<IDictionary<string, object>> SurfaceAction([FromUri] string controllerName, [FromUri] string controllerAction, [FromBody] ActionPayload payload)
        {
            var model = this.routeFactory.SurfaceActionResult(controllerName, controllerAction, payload.Area, payload.AdditionalRouteVals);
            var settings = new JsonSerializerSettings();
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            return this.Json(model);
        }
    }

    public class ActionPayload
    {
        /// <summary>
        /// Gets or sets the area.
        /// </summary>
        public string Area { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the additional route values.
        /// </summary>
        public Dictionary<string, object> AdditionalRouteVals { get; set; } = null;
    }
}
