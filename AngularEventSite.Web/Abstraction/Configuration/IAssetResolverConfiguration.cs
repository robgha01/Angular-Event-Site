namespace AngularEventSite.Web.Abstraction.Configuration
{
    public interface IAssetResolverConfiguration
    {
        /// <summary>
        /// Gets a value indicating whether to use <c>webpack dev server</c> or not.
        /// </summary>
        bool UseWebpackDevServer { get; }

        /// <summary>
        /// Gets the <c>webpack dev</c> server root.
        /// </summary>
        string WebpackDevServerRoot { get; }
    }
}