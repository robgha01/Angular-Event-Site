namespace AngularEventSite.Web.Abstraction
{
    using System;

    using Umbraco.Core;
    using Umbraco.Core.Persistence;
    using Umbraco.Core.Persistence.SqlSyntax;
    using Umbraco.Core.Services;
    using Umbraco.Web;

    /// <summary>
    /// The repository base.
    /// </summary>
    public abstract class RepositoryBase
    {
        private readonly Lazy<UmbracoDatabase> database;

        private readonly Lazy<ServiceContext> services;

        private readonly Lazy<ISqlSyntaxProvider> sqlSyntax;

        private readonly Lazy<UmbracoHelper> umbraco;

        /// <summary>
        /// Initializes a new instance of the <see cref="RepositoryBase"/> class.
        /// </summary>
        protected RepositoryBase()
        {
            database = new Lazy<UmbracoDatabase>(() => ApplicationContext.Current.DatabaseContext.Database);
            sqlSyntax = new Lazy<ISqlSyntaxProvider>(() => ApplicationContext.Current.DatabaseContext.SqlSyntax);
            services = new Lazy<ServiceContext>(() => ApplicationContext.Current.Services);
            umbraco = new Lazy<UmbracoHelper>(() => new UmbracoHelper(UmbracoContext.Current));
        }

        /// <summary>
        /// Gets the database.
        /// </summary>
        public UmbracoDatabase Database
        {
            get
            {
                return database.Value;
            }
        }

        /// <summary>
        /// Gets the service context.
        /// </summary>
        public ServiceContext ServiceContext
        {
            get
            {
                return services.Value;
            }
        }

        /// <summary>
        /// Gets the sql syntax.
        /// </summary>
        public ISqlSyntaxProvider SqlSyntax
        {
            get
            {
                return sqlSyntax.Value;
            }
        }

        /// <summary>
        /// Gets the <c>umbraco</c> helper.
        /// </summary>
        public UmbracoHelper Umbraco
        {
            get
            {
                return umbraco.Value;
            }
        }
    }
}