namespace AngularEventSite.Web.AssetResolver
{
    using System;
    using System.IO;
    using System.Net;
    using System.Web;

    using AngularEventSite.Web.AssetResolver.Abstraction;

    using JetBrains.Annotations;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;

    /// <summary>
    /// Handles resolving of <c>webpack</c> assets.
    /// </summary>
    /// <remarks>
    /// For use in development environment.
    /// </remarks>
    [UsedImplicitly]
    public sealed class WebpackDevelopmentAssetResolver : AssetResolverBase
    {
        private readonly string[] assetJsonUrls;

        /// <summary>
        /// Initializes a new instance of the <see cref="WebpackDevelopmentAssetResolver"/> class.
        /// </summary>
        /// <param name="assetJsonUrls">
        /// The asset url.
        /// </param>
        public WebpackDevelopmentAssetResolver(params string[] assetJsonUrls)
        {
            this.assetJsonUrls = assetJsonUrls;
        }

        /// <inheritdoc />
        public override JObject GetAssets()
        {
            var result = new JObject();
            foreach (var url in assetJsonUrls)
            {
                try
                {
                    using (var wc = new WebClient())
                    {
                        var data = wc.DownloadData(url);
                        using (var stream = new MemoryStream(data))
                        {
                            using (var streamReader = new StreamReader(stream))
                            using (var packageJsonReader = new JsonTextReader(streamReader))
                            {
                                var obj = (JObject)JToken.ReadFrom(packageJsonReader);
                                result[Path.GetFileNameWithoutExtension(url)] = obj;
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    throw new HttpException(
                        (int)HttpStatusCode.NotFound,
                        $"[SocketError.AccessDenied] Can not get assets '{url}' dide you forget to turn on the fronted development server?",
                        ex);
                }
            }

            return result;
        }
    }
}