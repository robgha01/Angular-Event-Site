namespace AngularEventSite.Web.Extensions
{
    using System;
    using System.Web;

    using JetBrains.Annotations;

    /// <summary>
    /// The http request extensions.
    /// </summary>
    public static class HttpRequestExtensions
    {
        /// <summary>
        /// Gets the full current domain
        /// </summary>
        /// <param name="request">
        /// The <see cref="HttpRequestBase"/>.
        /// </param>
        /// <returns>
        /// The current domain <c>Url</c> or null if <see cref="HttpRequestBase"/> or <see cref="HttpRequestBase.Url"/> is null.
        /// </returns>
        [UsedImplicitly]
        public static string GetCurrentDomain(this HttpRequestBase request)
        {
            if (request == null || request.Url == null)
            {
                return null;
            }

            var builder = new UriBuilder(request.Url.Scheme, request.Url.Host, request.Url.Port);
            return builder.Uri.ToString().TrimEnd('/');
        }
    }
}