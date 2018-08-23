namespace AngularEventSite.Web.SiteNavigator
{
    using System.Collections.Generic;
    using System.Web.Mvc;

    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.SiteNavigator.Abstraction;

    public class UCodeFirstMenuFactory : IMenuFactory<UCodeFirstContentTypeBase>
    {
        /// <inheritdoc />
        public IEnumerable<IMenuItem<UCodeFirstContentTypeBase>> Create(
            UCodeFirstContentTypeBase rootPage,
            UCodeFirstContentTypeBase currentPage)
        {
            var menuContext = DependencyResolver.Current.GetService<INavigatorContext<UCodeFirstContentTypeBase>>();
            menuContext.SetRoot(new UCodeFirstMenuItem(rootPage));
            menuContext.SetCurrentPage(new UCodeFirstMenuItem(currentPage));

            return menuContext.Root.Children;
        }
    }
}