namespace AngularEventSite.Web.Converters
{
    using System.Reflection;

    using BlueLeet.UCodeFirst.Converters;

    public class IntConverter : IConverter
    {
        public object Read(PropertyInfo propertyInfo, object value)
        {
            var v = value as int? ?? 0;

            // if (string.IsNullOrEmpty(v) || !UmbracoContext.Current.PageId.HasValue)
            // {
            // return new HtmlString(string.Empty);
            // }

            //// v = Slimmage(v);
            return v;
        }
    }
}