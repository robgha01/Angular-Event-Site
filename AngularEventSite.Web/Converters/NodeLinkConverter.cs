namespace AngularEventSite.Web.Converters
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using System.Web.Script.Serialization;

    using BlueLeet.UCodeFirst.Converters;

    using AngularEventSite.Web.Entities;

    public class NodeLinkConverter<T> : IConverter
    {
        public object Read(PropertyInfo propertyInfo, object value)
        {
            var links = new List<NodeLink>();

            if (value != null && !value.Equals(string.Empty))
            {
                links = new JavaScriptSerializer().Deserialize<IEnumerable<NodeLink>>(value.ToString()).ToList();
            }

            return links;
        }
    }
}