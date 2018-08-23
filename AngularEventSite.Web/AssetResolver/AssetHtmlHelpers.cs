namespace AngularEventSite.Web.AssetResolver
{
    using System.Collections.Generic;
    using System.Configuration;
    using System.Diagnostics.CodeAnalysis;
    using System.Text;
    using System.Web;
    using System.Web.Mvc;

    using AngularEventSite.Web.AssetResolver.Abstraction;

    using Umbraco.Core;

    /// <summary>
    /// The asset html helpers.
    /// </summary>
    public static class AssetHtmlHelpers
    {
        public static IHtmlString StaticAssetUrl(this HtmlHelper helper, params string[] path)
        {
            var useDevServer = ConfigurationManager.AppSettings["Webpack:UseDevServer"];
            if (!string.IsNullOrEmpty(useDevServer))
            {
                var useWebpackDebserver = useDevServer.TryConvertTo<bool>();
                if (useWebpackDebserver.Success && useWebpackDebserver.Result)
                {
                    var url = ConfigurationManager.AppSettings["Webpack:DevServerRoot"].EnsureEndsWith("/");
                    return new HtmlString($"{url}assets/{string.Join("/", path)}");
                }
            }

            var pathList = new List<string> { "static", "assets" };
            pathList.AddRange(path);

            var assetPath = new HtmlString("/" + string.Join("/", pathList));
            return assetPath;
        }

        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        public static IHtmlString WebpackCssAsset(this HtmlHelper helper, string name)
        {
            var assetResolver = DependencyResolver.Current.GetService<IResolveAsset>();
            var asset = assetResolver.ResolveCss("assets", name);

            return MvcHtmlString.Create(string.IsNullOrEmpty(asset) ? string.Empty : asset);
        }

        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        public static IHtmlString WebpackCssAsset(this HtmlHelper helper, params string[] names)
        {
            var assetResolver = DependencyResolver.Current.GetService<IResolveAsset>();
            var builder = new StringBuilder();

            foreach (var name in names)
            {
                var asset = assetResolver.ResolveCss("assets", name);
                if (asset != null)
                {
                    builder.AppendLine(asset);
                }
            }

            var assets = builder.ToString();
            return MvcHtmlString.Create(string.IsNullOrEmpty(assets) ? string.Empty : assets);
        }

        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        public static IHtmlString WebpackCssThemeAsset(this HtmlHelper helper, params string[] names)
        {
            var assetResolver = DependencyResolver.Current.GetService<IResolveAsset>();
            var builder = new StringBuilder();

            foreach (var name in names)
            {
                var asset = assetResolver.ResolveCss("themes", name);
                if (asset != null)
                {
                    builder.AppendLine(asset);
                }
            }

            var assets = builder.ToString();
            return MvcHtmlString.Create(string.IsNullOrEmpty(assets) ? string.Empty : assets);
        }

        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        public static IHtmlString WebpackJsAsset(this HtmlHelper helper, string name)
        {
            var assetResolver = DependencyResolver.Current.GetService<IResolveAsset>();
            var asset = assetResolver.ResolveJs("assets", name);

            return MvcHtmlString.Create(string.IsNullOrEmpty(asset) ? string.Empty : asset);
        }

        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        public static IHtmlString WebpackJsAsset(this HtmlHelper helper, params string[] names)
        {
            var assetResolver = DependencyResolver.Current.GetService<IResolveAsset>();
            var builder = new StringBuilder();

            foreach (var name in names)
            {
                var asset = assetResolver.ResolveJs("assets", name);
                if (asset != null)
                {
                    builder.AppendLine(asset);
                }
            }

            var assets = builder.ToString();
            return MvcHtmlString.Create(string.IsNullOrEmpty(assets) ? string.Empty : assets);
        }

        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        public static IHtmlString WebpackJsThemeAsset(this HtmlHelper helper, params string[] names)
        {
            var assetResolver = DependencyResolver.Current.GetService<IResolveAsset>();
            var builder = new StringBuilder();

            foreach (var name in names)
            {
                var asset = assetResolver.ResolveJs("themes", name);
                if (asset != null)
                {
                    builder.AppendLine(asset);
                }
            }

            var assets = builder.ToString();
            return MvcHtmlString.Create(string.IsNullOrEmpty(assets) ? string.Empty : assets);
        }
    }
}