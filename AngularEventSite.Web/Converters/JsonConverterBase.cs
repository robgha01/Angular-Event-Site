namespace AngularEventSite.Web.Converters
{
    using System.Reflection;

    using BlueLeet.Core.Extensions;
    using BlueLeet.UCodeFirst.Converters;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;

    using Umbraco.Core;

    public abstract class JsonConverterBase : IConverter
    {
        /// <inheritdoc />
        public object Read(PropertyInfo propertyInfo, object value)
        {
            var jsonAttempt = value.TryConvertTo<string>();
            if (jsonAttempt.Success == false || string.IsNullOrEmpty(jsonAttempt.Result))
            {
                return EmptyResult(propertyInfo, value);
            }

            return WithResult(propertyInfo, jsonAttempt.Result);
        }

        protected virtual object EmptyResult(PropertyInfo propertyInfo, object value)
        {
            return propertyInfo.PropertyType.GetDefault();
        }

        protected virtual object WithResult(PropertyInfo propertyInfo, string value)
        {
            return JsonConvert.DeserializeObject<JObject>(value);
        }
    }
}