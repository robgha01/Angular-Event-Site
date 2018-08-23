namespace AngularEventSite.Web.Abstraction
{
    using System.Collections.Generic;

    using AngularEventSite.Web.Entities;

    /// <summary>
    /// The QuickNavigatorSet interface.
    /// </summary>
    public interface IQuickNavigatorSet
    {
        /// <summary>
        /// Get menu items for the "Quick Navigator" administrator menu.
        /// </summary>
        /// <returns>
        /// <see cref="IEnumerable{QuickNavigatorMenuItem}"/>.
        /// </returns>
        IEnumerable<QuickNavigatorMenuItem> GetMenuItems();
    }
}