namespace AngularEventSite.Web.Bootstrapers
{
    using AngularEventSite.Web.Entities;
    using AngularEventSite.Web.EventManager.Entities;
    using AngularEventSite.Web.JobManager.Entities;

    using Umbraco.Core;
    using Umbraco.Core.Persistence;

    public class PocosBootstraper : ApplicationEventHandler
    {
        /// <inheritdoc />
        protected override void ApplicationStarted(
            UmbracoApplicationBase umbracoApplication,
            ApplicationContext applicationContext)
        {
            if (applicationContext.IsConfigured)
            {
                var ctx = applicationContext.DatabaseContext;
                var db = new DatabaseSchemaHelper(ctx.Database, applicationContext.ProfilingLogger.Logger, ctx.SqlSyntax);
                db.CreateTable<ClaremontEvent>(false);
                db.CreateTable<Participant>(false);
                db.CreateTable<Notification>(false);
                db.CreateTable<JobInfo>(false);
            }
        }
    }
}