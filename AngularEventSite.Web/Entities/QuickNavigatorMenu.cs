namespace AngularEventSite.Web.Entities
{
    using System.Collections.Generic;

    public class QuickNavigatorMenu
    {
        public QuickNavigatorMenu()
        {
            Items = new List<QuickNavigatorMenuItem>();
        }

        public string EditLinkUrl { get; set; }

        public IList<QuickNavigatorMenuItem> Items { get; private set; }
    }
}