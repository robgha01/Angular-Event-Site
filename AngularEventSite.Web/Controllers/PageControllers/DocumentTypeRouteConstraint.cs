namespace AngularEventSite.Web.Controllers.PageControllers
{
    using System.Web;
    using System.Web.Routing;

    /// <summary>
    /// The document type route constraint.
    /// </summary>
    public class DocumentTypeRouteConstraint : IRouteConstraint
    {
        private readonly MatchFunc match;

        /// <summary>
        /// Initializes a new instance of the <see cref="DocumentTypeRouteConstraint"/> class.
        /// </summary>
        /// <param name="documentTypeAlias">
        /// The document type alias.
        /// </param>
        /// <param name="match">
        /// Additional instruction on how to match this route if omitted will only check that the controller match <paramref name="documentTypeAlias"/>.
        /// </param>
        public DocumentTypeRouteConstraint(string documentTypeAlias, MatchFunc match = null)
        {
            this.match = match;
            DocumentTypeAlias = documentTypeAlias;
        }
        
        public delegate bool MatchFunc(
            HttpContextBase httpContext,
            Route route,
            string parameterName,
            RouteValueDictionary values,
            RouteDirection routeDirection);

        /// <summary>
        /// Gets the document type alias.
        /// </summary>
        public string DocumentTypeAlias { get; }

        /// <inheritdoc />
        public bool Match(
            HttpContextBase httpContext,
            Route route,
            string parameterName,
            RouteValueDictionary values,
            RouteDirection routeDirection)
        {
            var controller = values["controller"]?.ToString() ?? string.Empty;
            if (controller.Equals(DocumentTypeAlias) && match != null && match(
                    httpContext,
                    route,
                    parameterName,
                    values,
                    routeDirection))
            {
                return true;
            }

            return false;
        }
    }
}