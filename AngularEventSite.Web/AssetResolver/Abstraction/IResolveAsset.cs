namespace AngularEventSite.Web.AssetResolver.Abstraction
{
    using Newtonsoft.Json.Linq;

    /// <summary>
    /// Describes how to resolve assets.
    /// </summary>
    public interface IResolveAsset
    {
        /// <summary>
        /// Get assets.
        /// </summary>
        /// <returns>
        /// The <see cref="JObject"/>.
        /// </returns>
        JObject GetAssets();

        /// <summary>
        /// Resolve css asset by name.
        /// </summary>
        /// <param name="set">
        /// The set.
        /// </param>
        /// <param name="name">
        /// The name.
        /// </param>
        /// <returns>
        /// A <link rel="stylesheet" href="assetPath"/> or <see langword="null"/> if not found.
        /// </returns>
        string ResolveCss(string set, string name);

        /// <summary>
        /// Resolve css asset by name.
        /// </summary>
        /// <param name="name">
        ///     The name.
        /// </param>
        /// <returns>
        /// A <link rel="stylesheet" href="assetPath" /> or <see langword="null"/> if not found.
        /// </returns>
        string ResolveCss(string name);

        /// <summary>
        /// Resolve js asset by name.
        /// </summary>
        /// <param name="name">
        /// The name.
        /// </param>
        /// <returns>
        /// A <script type="text/javascript" src="assetPath"></script> or <see langword="null"/> if not found.
        /// </returns>
        string ResolveJs(string name);

        /// <summary>
        /// Resolve js asset by name.
        /// </summary>
        /// <param name="set">
        /// The set.
        /// </param>
        /// <param name="name">
        /// The name.
        /// </param>
        /// <returns>
        /// A <script type="text/javascript" src="assetPath"></script> or <see langword="null"/> if not found.
        /// </returns>
        string ResolveJs(string set, string name);
    }
}