namespace AngularEventSite.Web.SitemapFilters
{
    using BlueLeet.Sitemap.Core.Abstraction;
    using BlueLeet.UCodeFirst.Helpers;

    using AngularEventSite.Web.Models;
    using AngularEventSite.Web.Models.Configuration;
    using AngularEventSite.Web.Models.Forms;

    public class SitemapFilterByContentType : IHideInSitemap
    {
        /// <inheritdoc />
        public bool IsHidden(INodeEntity node)
        {
            var helper = new UCodeFirstHelper();
            var content = helper.TypedContent(node.Id);

            return content is FormFolderPageModel | content is FormCategoryPageModel | content is FormPageModel
                   | content is ConfigurationPageModel | content is ErrorPageModel;
        }
    }
}