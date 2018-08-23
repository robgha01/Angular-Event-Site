namespace AngularEventSite.Web.Controllers
{
    using System.Collections.Generic;
    using System.IO;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Text;
    using System.Web;

    using BlueLeet.UWeb.Abstraction;

    using Newtonsoft.Json;

    using Umbraco.Web;
    using Umbraco.Web.WebApi;

    /// <summary>
    /// The preview frame surface controller.
    /// </summary>
    public class PreviewFrameSurfaceController : UmbracoApiController
    {
        private readonly IRouteFactory routeFactory;

        /// <summary>
        /// Initializes a new instance of the <see cref="PreviewFrameSurfaceController"/> class.
        /// </summary>
        /// <param name="routeFactory">
        /// The route factory.
        /// </param>
        public PreviewFrameSurfaceController(IRouteFactory routeFactory)
        {
            this.routeFactory = routeFactory;
        }

        public HttpResponseMessage GetPreviewMacro(
            int nodeId,
            string macroAlias,
            IDictionary<string, object> parameters)
        {
            var html = string.Empty;
            var response = new HttpResponseMessage();

            var previewTemplate = Services.FileService.GetTemplate("PreviewFrame");
            if (previewTemplate != null)
            {
                // Fix certificate problem...
                ServicePointManager.ServerCertificateValidationCallback +=
                    (senderr, cert, chain, sslPolicyErrors) => true;
                var p = JsonConvert.SerializeObject(parameters ?? new Dictionary<string, object>());

                var additionalRouteVals = new Dictionary<string, object>();
                additionalRouteVals.Add("alias", macroAlias);
                additionalRouteVals.Add("parameters", p);

                var ufprint = routeFactory.SurfaceAction(
                    "GetMacroResult",
                    "AjaxHelper",
                    string.Empty,
                    additionalRouteVals);

                var content = Umbraco.TypedContent(nodeId);
                var url = content.UrlWithDomain();
                var req = WebRequest.Create(url);
                var postData = string.Format("ufprt={0}", ufprint);

                var send = Encoding.Default.GetBytes(postData);
                req.Method = "POST";
                req.ContentType = "application/x-www-form-urlencoded";
                req.ContentLength = send.Length;

                var sout = req.GetRequestStream();
                sout.Write(send, 0, send.Length);
                sout.Flush();
                sout.Close();

                var res = req.GetResponse();
                var stream = res.GetResponseStream();
                if (stream != null)
                {
                    var sr = new StreamReader(stream);
                    var previewHtml = sr.ReadToEnd();
                    HttpContext.Current.Items.Add("previewHtml", previewHtml);
                    html = Umbraco.RenderTemplate(nodeId, previewTemplate.Id).ToHtmlString();
                }
            }

            response.Content = new StringContent(html);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");

            return response;
        }
    }
}