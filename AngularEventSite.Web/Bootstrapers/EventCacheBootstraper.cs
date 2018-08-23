namespace AngularEventSite.Web.Bootstrapers
{
    using JetBrains.Annotations;

    using Umbraco.Core;
    using Umbraco.Core.Events;
    using Umbraco.Core.Models;
    using Umbraco.Core.Services;

    /// <summary>
    /// The event cache <c>bootstraper</c>.
    /// </summary>
    [UsedImplicitly]
    public sealed class EventCacheBootstraper : ApplicationBootstrapBase
    {
        /// <inheritdoc />
        protected override void ApplicationStarted(
            UmbracoApplicationBase umbracoApplication,
            ApplicationContext applicationContext)
        {
            ContentTypeService.DeletedMediaType += ContentTypeServiceOnDeletedMediaType;
            ContentTypeService.SavedMediaType += ContentTypeServiceOnSavedMediaType;
        }

        private void ContentTypeServiceOnDeletedMediaType(
            IContentTypeService sender,
            DeleteEventArgs<IMediaType> deleteEventArgs)
        {
            ApplicationContext.Current.ApplicationCache.RuntimeCache.ClearCacheByKeySearch("ProfileController");
        }

        private void ContentTypeServiceOnSavedMediaType(
            IContentTypeService sender,
            SaveEventArgs<IMediaType> saveEventArgs)
        {
            ApplicationContext.Current.ApplicationCache.RuntimeCache.ClearCacheByKeySearch("ProfileController");
        }
    }
}