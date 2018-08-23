// --------------------------------------------------------------------------------------------------------------------
// <copyright file="EntityModelBinder.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   The payload result model binder.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace AngularEventSite.Web.ModelBinder
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http.Controllers;
    using System.Web.Mvc;

    using BlueLeet.Common.Extensions;
    using BlueLeet.Common.Json.Serialization;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    using Umbraco.Core;

    using DefaultModelBinder = System.Web.ModelBinding.DefaultModelBinder;
    using IModelBinder = System.Web.Http.ModelBinding.IModelBinder;
    using ModelBindingContext = System.Web.Http.ModelBinding.ModelBindingContext;

    /// <summary>
    /// The payload result model binder.
    /// </summary>
    public class EntityModelBinder : DefaultModelBinder, IModelBinder
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityModelBinder"/> class.
        /// </summary>
        public EntityModelBinder()
        {
            var locator            = DependencyResolver.Current;
            var serializerSettings = locator.GetService<JsonSerializerSettings>();
            if (serializerSettings == null)
            {
                serializerSettings = new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                    ContractResolver  = new CamelCasePropertyNamesContractResolver()
                };

                var pathConverter = locator.GetService<JsonPathConverter>();
                serializerSettings.Converters.Add(pathConverter);
            }

            SerializerSettings = serializerSettings;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EntityModelBinder"/> class.
        /// </summary>
        /// <param name="serializerSettings">
        /// The serializer settings.
        /// </param>
        public EntityModelBinder(JsonSerializerSettings serializerSettings)
        {
            if (serializerSettings == null)
            {
                serializerSettings = new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                };

                var locator = DependencyResolver.Current;
                var pathConverter = locator.GetService<JsonPathConverter>();
                serializerSettings.Converters.Add(pathConverter);
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
                object payload;
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

        private bool TryBindFromRouteData(HttpActionContext actionContext, ModelBindingContext bindingContext, out object result)
        {
            var values = actionContext.ControllerContext.RouteData.Values.Where(x => !x.Key.ContainsAny(new[] { "action", "id", "controller" })).ToList();

            if (!values.Any())
            {
                result = null;
                return false;
            }

            if (!string.IsNullOrEmpty(bindingContext.ModelName) && actionContext.ControllerContext.RouteData.Values.ContainsKey(bindingContext.ModelName))
            {
                var singleValue = actionContext.ControllerContext.RouteData.Values[bindingContext.ModelName];
                if (bindingContext.ModelType.IsInstanceOfType(singleValue))
                {
                    result = singleValue;
                    return true;
                }

                var singleValueString = singleValue as string;
                if (singleValueString != null && singleValueString.TryDeserializeObject(bindingContext.ModelType, SerializerSettings, out result))
                {
                    return true;
                }
            }

            Dictionary<string, object> routeValues = new Dictionary<string, object>();
            foreach (var value in actionContext.ControllerContext.RouteData.Values.Where(x => !x.Key.ContainsAny(new[] { "action", "id", "controller" })))
            {
                var json = value.Value as string;
                object jsonObject;
                routeValues.Add(
                    value.Key,
                    json.TryDeserializeObject(SerializerSettings, out jsonObject) ? jsonObject : value.Value);
            }
            
            var jsonString = JsonConvert.SerializeObject(routeValues, SerializerSettings);
            if (jsonString.TryDeserializeObject(bindingContext.ModelType, SerializerSettings, out result))
            {
                return true;
            }

            result = null;
            return false;
        }

        private bool TryBindFromJson(HttpActionContext actionContext, ModelBindingContext bindingContext, out object result)
        {
            var json = actionContext.Request.Content.ReadAsStringAsync().ConfigureAwait(false).GetAwaiter().GetResult();
            if (json.TryDeserializeObject(bindingContext.ModelType, SerializerSettings, out result))
            {
                return true;
            }

            result = null;
            return false;
        }
    }
}
