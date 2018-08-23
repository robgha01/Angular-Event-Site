namespace AngularEventSite.Web.Extensions
{
    using System;
    using System.IO;
    using System.Net;
    using System.Web.Hosting;
    using System.Web.Mvc;

    /// <summary>
    /// The web view page extensions.
    /// </summary>
    public static class WebViewPageExtensions
    {
        public static bool IsPreviewMode(this WebViewPage viewPage)
        {
            return viewPage.Request.Url != null
                   && (viewPage.Request.Url.AbsolutePath.Contains("GetPartialViewResultAsHtmlForEditor")
                       || viewPage.Request.Url.AbsolutePath.Contains("GetMacroResultAsHtmlForEditor"));
        }

        public static bool StaticFileExists(this WebViewPage viewPage, string file)
        {
            if (!file.StartsWith("~/"))
            {
                throw new ArgumentException("Must start with ~/", nameof(file));
            }

            return File.Exists(HostingEnvironment.MapPath(file));
        }

        public static bool WebUriExists(this WebViewPage viewPage, Uri file)
        {
            try
            {
                var request = (HttpWebRequest)WebRequest.Create(file);
                request.Method = "HEAD";
                using (var response = (HttpWebResponse)request.GetResponse())
                {
                    return response.StatusCode == HttpStatusCode.OK;
                }
            }
            catch (WebException)
            {
                return false;
            }
        }
    }
}