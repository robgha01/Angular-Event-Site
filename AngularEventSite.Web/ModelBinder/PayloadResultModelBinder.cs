namespace AngularEventSite.Web.ModelBinder
{
    using System;
    using System.Linq;
    using System.Web.Http.Controllers;
    using System.Web.ModelBinding;

    using BlueLeet.Common.Extensions;

    using AngularEventSite.Web.Entities.Payloads;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    using Umbraco.Core;

    using IModelBinder = System.Web.Http.ModelBinding.IModelBinder;
    using ModelBindingContext = System.Web.Http.ModelBinding.ModelBindingContext;

    /// <summary>
    /// The payload result model binder.
    /// </summary>
    public class PayloadResultModelBinder : DefaultModelBinder, IModelBinder
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PayloadResultModelBinder"/> class.
        /// </summary>
        public PayloadResultModelBinder()
            : this(null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PayloadResultModelBinder"/> class.
        /// </summary>
        /// <param name="serializerSettings">The serializer settings.</param>
        public PayloadResultModelBinder(JsonSerializerSettings serializerSettings)
        {
            if (serializerSettings == null)
            {
                serializerSettings = new JsonSerializerSettings
                                         {
                                             NullValueHandling = NullValueHandling.Ignore,
                                             ContractResolver =
                                                 new CamelCasePropertyNamesContractResolver()
                                         };
            }

            SerializerSettings = serializerSettings;
        }

        /// <summary>
        /// Gets the serializer settings.
        /// </summary>
        public JsonSerializerSettings SerializerSettings { get; }

        /// <inheritdoc/>
        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            try
            {
                PayloadResult payload;
                if (TryBindFromRouteData(actionContext, bindingContext, out payload))
                {
                    bindingContext.Model = payload;
                    return true;
                }

                if (TryBindFromJson(actionContext, bindingContext, out payload))
                {
                    bindingContext.Model = payload;
                    return true;
                }

                return false;
            }
            catch (Exception exception)
            {
                bindingContext.ModelState.AddModelError("PayloadResultDeserializationException", exception);

                return false;
            }
        }

        private bool TryBindFromJson(
            HttpActionContext actionContext,
            ModelBindingContext bindingContext,
            out PayloadResult result)
        {
            var json = actionContext.Request.Content.ReadAsStringAsync().ConfigureAwait(false).GetAwaiter().GetResult();
            if (json.TryDeserializeObject(SerializerSettings, out result))
            {
                return true;
            }

            result = null;
            return false;
        }

        private bool TryBindFromRouteData(
            HttpActionContext actionContext,
            ModelBindingContext bindingContext,
            out PayloadResult result)
        {
            var values = actionContext.ControllerContext.RouteData.Values
                .Where(x => !x.Key.ContainsAny(new[] { "action", "id", "controller" })).ToList();

            if (!values.Any())
            {
                result = null;
                return false;
            }

            result = new PayloadResult();
            foreach (var value in actionContext.ControllerContext.RouteData.Values.Where(
                x => !x.Key.ContainsAny(new[] { "action", "id", "controller" })))
            {
                var json = value.Value as string;
                object jsonObject;
                result.Values.Add(
                    value.Key,
                    json.TryDeserializeObject(SerializerSettings, out jsonObject) ? jsonObject : value.Value);
            }

            return true;
        }
    }
}