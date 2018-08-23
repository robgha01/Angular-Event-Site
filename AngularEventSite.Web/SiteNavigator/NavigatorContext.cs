namespace AngularEventSite.Web.SiteNavigator
{
    using AngularEventSite.Web.SiteNavigator.Abstraction;

    internal sealed class NavigatorContext<TAdaptedEntity> : INavigatorContext<TAdaptedEntity>
    {
        /// <inheritdoc />
        public IMenuItem<TAdaptedEntity> CurrentPage { get; private set; }

        /// <inheritdoc />
        public IMenuItem<TAdaptedEntity> Root { get; private set; }

        public void SetCurrentPage(IMenuItem<TAdaptedEntity> content)
        {
            CurrentPage = content;
        }

        public void SetRoot(IMenuItem<TAdaptedEntity> content)
        {
            Root = content;
        }
    }
}