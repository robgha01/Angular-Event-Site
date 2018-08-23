namespace AngularEventSite.Web.AssetResolver.Abstraction
{
    using System;
    using System.Text;
    using System.Web.Mvc;

    using JetBrains.Annotations;

    using Newtonsoft.Json.Linq;

    /// <summary>
    /// Handles resolving of <c>webpack</c> assets.
    /// </summary>
    /// <remarks>
    /// For use in development environment.
    /// </remarks>
    [UsedImplicitly]
    public abstract class AssetResolverBase : IResolveAsset
    {
        /// <summary>
        /// The assets.
        /// </summary>
        private readonly Lazy<JObject> assets;

        /// <summary>
        /// Initializes a new instance of the <see cref="AssetResolverBase"/> class.
        /// </summary>
        protected AssetResolverBase()
        {
            assets = new Lazy<JObject>(GetAssets);
        }

        /// <summary>
        /// Gets the assets.
        /// </summary>
        public JObject Assets
        {
            get
            {
                return assets.Value;
            }
        }

        /// <inheritdoc />
        public abstract JObject GetAssets();

        /// <inheritdoc />
        public string ResolveCss(string name)
        {
            JToken token;
            if (Assets.TryGetValue(name, out token))
            {
                var asset = token.Value<string>("css");
                var tag = new TagBuilder("link");
                tag.MergeAttribute("rel", "stylesheet");
                tag.MergeAttribute("href", asset);

                return tag.ToString(TagRenderMode.SelfClosing);
            }

            return null;
        }

        /// <inheritdoc />
        public string ResolveCss(string set, string name)
        {
            JToken token;
            if (Assets.TryGetValue(set, out token))
            {
                var obj = (JObject)token;
                if (obj.TryGetValue(name, out token))
                {
                    var asset = token.Value<string>("css");
                    var tag = new TagBuilder("link");
                    tag.MergeAttribute("rel", "stylesheet");
                    tag.MergeAttribute("href", asset);

                    return tag.ToString(TagRenderMode.SelfClosing);
                }
            }

            return null;
        }

        /// <inheritdoc />
        public string ResolveJs(string name)
        {
            JToken token;
            if (Assets.TryGetValue(name, out token))
            {
                var result = new StringBuilder();
                var asset = token.Value<string>("js");
                var tag = new TagBuilder("script");
                tag.MergeAttribute("type", "text/javascript");
                tag.MergeAttribute("src", asset);

                result.AppendLine(tag.ToString(TagRenderMode.StartTag));
                result.AppendLine(tag.ToString(TagRenderMode.EndTag));

                return result.ToString();
            }

            return null;
        }

        /// <inheritdoc />
        public string ResolveJs(string set, string name)
        {
            JToken token;
            if (Assets.TryGetValue(set, out token))
            {
                var obj = (JObject)token;
                if (obj.TryGetValue(name, out token))
                {
                    var result = new StringBuilder();
                    var asset = token.Value<string>("js");
                    var tag = new TagBuilder("script");
                    tag.MergeAttribute("type", "text/javascript");
                    tag.MergeAttribute("src", asset);

                    result.AppendLine(tag.ToString(TagRenderMode.StartTag));
                    result.AppendLine(tag.ToString(TagRenderMode.EndTag));

                    return result.ToString();
                }
            }

            return null;
        }
    }
}