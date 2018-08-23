namespace AngularEventSite.Web.ContentFinders
{
    using System;
    using System.Linq;

    using Umbraco.Core;
    using Umbraco.Core.Logging;
    using Umbraco.Core.Models;
    using Umbraco.Web;
    using Umbraco.Web.Routing;

    /// <summary>
    /// The profile page node route handler. <c>ToDo: Move this to BlueLeet.UWeb</c>
    /// </summary>
    public abstract class DocumentTypeUrlNodeRouteHandler : IContentFinder
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DocumentTypeUrlNodeRouteHandler"/> class.
        /// </summary>
        /// <param name="documentTypeAlias">The document type alias.</param>
        protected DocumentTypeUrlNodeRouteHandler(string documentTypeAlias)
        {
            DocumentTypeAlias = documentTypeAlias;
        }

        /// <summary>
        /// Gets the document type alias.
        /// </summary>
        public string DocumentTypeAlias { get; }

        /// <inheritdoc/>
        public virtual bool TryFindContent(PublishedContentRequest contentRequest)
        {
            IPublishedContent content = null;

            if (contentRequest.RoutingContext.UmbracoContext == null)
            {
                LogHelper.Error<DocumentTypeUrlNodeRouteHandler>(
                    "umbraco context is null! for url: " + contentRequest.Uri,
                    new ArgumentNullException(nameof(contentRequest.RoutingContext.UmbracoContext)));
                return false;
            }

            try
            {
                if (contentRequest.RoutingContext.UmbracoContext.HttpContext.Request.Url != null)
                {
                    var path = contentRequest.RoutingContext.UmbracoContext.HttpContext.Request.Url
                        .GetAbsolutePathDecoded();
                    var parts = path.Split(new[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
                    var tmpUrl = "/";

                    // Lets try to get the content by using parts of the url until we find it.
                    for (var index = 0; index < parts.Length; index++)
                    {
                        tmpUrl += parts[index] + "/";

                        try
                        {
                            // Try to resolve it as a route.
                            content = UmbracoContext.Current.ContentCache.GetByRoute(tmpUrl);
                            if (content != null)
                            {
                                break;
                            }
                        }
                        catch (Exception ex)
                        {
                            // ignored
                        }
                    }

                    if (content == null)
                    {
                        var rootNodes = contentRequest.RoutingContext.UmbracoContext.ContentCache.GetAtRoot();
                        content = rootNodes.DescendantsOrSelf(DocumentTypeAlias)
                            .FirstOrDefault(x => x.UrlName == parts.First());
                    }
                }
            }
            catch (Exception ex)
            {
                // ignored
            }

            if (content != null && content.DocumentTypeAlias.Equals(DocumentTypeAlias))
            {
                var template = ApplicationContext.Current.Services.FileService.GetTemplate(content.TemplateId);
                if (template != null)
                {
                    contentRequest.PublishedContent = content;
                    contentRequest.TrySetTemplate(template.Alias);
                    return true;
                }
            }

            return false;
        }
    }
}