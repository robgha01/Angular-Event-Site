namespace AngularEventSite.Web.Abstraction
{
    public interface ISitemapConfiguration
    {
        bool ShowInSitemap { get; }

        string SitemapPriority { get; }
    }
}