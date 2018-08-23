namespace AngularEventSite.Web.Converters
{
    using System.Reflection;

    using BlueLeet.UCodeFirst.Converters;

    using umbraco.NodeFactory;

    /// <summary>
    /// The node converter.
    /// </summary>
    public class NodeConverter : IConverter
    {
        public object Read(PropertyInfo propertyInfo, object value)
        {
            if (value != null)
            {
                if (!string.IsNullOrEmpty(value.ToString()))
                {
                    return new Node(int.Parse(value.ToString()));
                }
            }

            return null;
        }
    }
}