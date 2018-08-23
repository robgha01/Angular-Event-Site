namespace AngularEventSite.Web.SiteNavigator.Abstraction
{
    internal interface INavigatorContext<TAdaptedEntity>
    {
        IMenuItem<TAdaptedEntity> CurrentPage { get; }

        IMenuItem<TAdaptedEntity> Root { get; }

        void SetCurrentPage(IMenuItem<TAdaptedEntity> content);

        void SetRoot(IMenuItem<TAdaptedEntity> content);
    }
}