namespace AngularEventSite.Web.SitemapFilters
{
    using BlueLeet.Sitemap.Core.Abstraction;
    using BlueLeet.UCodeFirst.Helpers;

    using AngularEventSite.Web.Abstraction;

    public class ShowInSitemapFilter : IHideInSitemap
    {
        /// <inheritdoc />
        public bool IsHidden(INodeEntity node)
        {
            var helper = new UCodeFirstHelper();
            var config = helper.TypedContent(node.Id) as ISitemapConfiguration;
            if (config != null)
            {
                return !config.ShowInSitemap;
            }

            return false;
        }
    }
}