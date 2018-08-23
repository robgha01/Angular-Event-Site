namespace AngularEventSite.Web.Entities
{
    public class QuickNavigatorMenuItem
    {
        public QuickNavigatorMenuItem()
        {
        }

        public QuickNavigatorMenuItem(string name, string url)
        {
            Name = name;
            Url = url;
        }

        public QuickNavigatorMenuItem(string name, string url, string target)
        {
            Name = name;
            Url = url;
            Target = target;
        }

        public string Name { get; set; }

        public string Target { get; set; } = "_self";

        public string Url { get; set; }
    }
}