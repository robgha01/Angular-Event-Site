namespace AngularEventSite.Web.Converters
{
    using System.Collections.Generic;
    using System.Reflection;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public class GenericKeyValuePairsConverter<TKey, TValue> : JsonConverterBase
    {
        protected override object EmptyResult(PropertyInfo propertyInfo, object value)
        {
            return new List<KeyValuePair<TKey, TValue>>();
        }

        protected override object WithResult(PropertyInfo propertyInfo, string value)
        {
            return JsonConvert.DeserializeObject<List<KeyValuePair<TKey, TValue>>>(value, new KeyValuePairConverter());
        }
    }
}