namespace AngularEventSite.Web.AssetResolver
{
    using System;
    using System.IO;

    using AngularEventSite.Web.AssetResolver.Abstraction;

    using JetBrains.Annotations;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;

    /// <summary>
    /// Handles resolving of <c>webpack</c> assets
    /// </summary>
    [UsedImplicitly]
    public sealed class WebpackAssetResolver : AssetResolverBase
    {
        private readonly string[] assetJsonPaths;

        /// <summary>
        /// Initializes a new instance of the <see cref="WebpackAssetResolver"/> class.
        /// </summary>
        /// <param name="assetJsonPaths">
        /// The asset paths.
        /// </param>
        public WebpackAssetResolver(params string[] assetJsonPaths)
        {
            this.assetJsonPaths = assetJsonPaths;
        }

        /// <inheritdoc />
        public override JObject GetAssets()
        {
            var result = new JObject();

            foreach (var path in assetJsonPaths)
            {
                try
                {
                    using (var packageJsonFile = File.OpenText(path))
                    {
                        using (var packageJsonReader = new JsonTextReader(packageJsonFile))
                        {
                            var obj = (JObject)JToken.ReadFrom(packageJsonReader);
                            result[Path.GetFileNameWithoutExtension(path)] = obj;
                        }
                    }
                }
                catch (Exception ex)
                {
                    throw new Exception($"Failed to parse an asset path '{path}'", ex);
                }
            }

            return result;
        }
    }
}