namespace AngularEventSite.Web.Converters
{
    using System.Collections.Generic;
    using System.Reflection;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public class KeyValuePairsConverter : JsonConverterBase
    {
        protected override object EmptyResult(PropertyInfo propertyInfo, object value)
        {
            return new List<KeyValuePair<string, string>>();
        }

        protected override object WithResult(PropertyInfo propertyInfo, string value)
        {
            return JsonConvert.DeserializeObject<List<KeyValuePair<string, string>>>(
                value,
                new KeyValuePairConverter());
        }
    }
}