namespace AngularEventSite.Web
{
    using System.Collections.Generic;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Entities;

    /// <summary>
    /// The plugins quick navigator set.
    /// </summary>
    public class PluginsQuickNavigatorSet : IQuickNavigatorSet
    {
        /// <inheritdoc />
        public IEnumerable<QuickNavigatorMenuItem> GetMenuItems()
        {
            var items = new List<QuickNavigatorMenuItem>();
            items.Add(new QuickNavigatorMenuItem("Tasks", "/umbraco/backoffice/Plugins/hangfire", "_blank"));

            return items;
        }
    }
}