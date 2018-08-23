namespace AngularEventSite.Web.SiteNavigator.Abstraction
{
    using System.Collections.Generic;

    public interface IMenuFactory<TAdaptedEntity>
    {
        IEnumerable<IMenuItem<TAdaptedEntity>> Create(TAdaptedEntity rootPage, TAdaptedEntity currentPage);
    }
}