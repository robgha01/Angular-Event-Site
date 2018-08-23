namespace AngularEventSite.Web.Converters
{
    using System.Reflection;
    using System.Web.Helpers;

    public class GenericJsonConverter<TEntity> : JsonConverterBase
    {
        protected override object EmptyResult(PropertyInfo propertyInfo, object value)
        {
            return null;
        }

        protected override object WithResult(PropertyInfo propertyInfo, string value)
        {
            return Json.Decode<TEntity>(value);
        }
    }
}