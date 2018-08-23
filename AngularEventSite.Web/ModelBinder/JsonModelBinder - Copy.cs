// --------------------------------------------------------------------------------------------------------------------
// <copyright file="JsonModelBinder.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved 
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   The surface model binder.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace SpecialistHjalpen.Web.ModelBinder
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Web;
    using System.Web.Mvc;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    using Umbraco.Core;
    using Umbraco.Core.Logging;
    using Umbraco.Web.Mvc;

    /// <summary>
    /// The surface model binder.
    /// </summary>
    /// <typeparam name="TModel">The type to bind.</typeparam>
    public class JsonModelBinder<TModel> : DefaultModelBinder, IModelBinderProvider
        where TModel : class
    {
        private const string Area = "ar";
        private const string Action = "a";
        private const string Controller = "c";
        
        /// <summary>
        /// Binds the model to a value by using the specified controller context and binding context.
        /// </summary>
        /// <returns>The bound value.</returns>
        /// <param name="controllerContext">The controller context.</param>
        /// <param name="bindingContext">The binding context.</param>
        public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            string jsonString;
            if (!IsJsonRequest(controllerContext))
            {
                jsonString = FromUmbracoControllerToJson(controllerContext);
            }
            else
            {
                using (var stream = controllerContext.HttpContext.Request.InputStream)
                {
                    stream.Seek(0, SeekOrigin.Begin);
                    using (var reader = new StreamReader(stream))
                    {
                        jsonString = reader.ReadToEnd();
                    }
                }
            }

            if (string.IsNullOrEmpty(jsonString))
            {
                return null;
            }

            try
            {
                var settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;
                settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                var o = JsonConvert.DeserializeObject<TModel>(jsonString, settings);

                return o;
            }
            catch (Exception)
            {
                ThrowModelBindingException(jsonString);
                return null;
            }
        }

        /// <inheritdoc/>
        public IModelBinder GetBinder(Type modelType)
        {
            // can bind to RenderModel (exact type match)
            if (modelType == typeof(TModel))
            {
                return this;
            }

            return null;
        }
        
        [SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1600:ElementsMustBeDocumented", Justification = "Reviewed. Suppression is OK here.")]
        protected bool IsJsonRequest(ControllerContext controllerContext)
        {
            var contentType = controllerContext.HttpContext.Request.ContentType;
            return contentType.StartsWith("application/json", StringComparison.OrdinalIgnoreCase);
        }

        private string FromUmbracoControllerToJson(ControllerContext controllerContext)
        {
            string encodedVal;
            switch (controllerContext.RequestContext.HttpContext.Request.RequestType)
            {
                case "POST":
                    encodedVal = controllerContext.RequestContext.HttpContext.Request.Form["ufprt"];
                    break;

                case "GET":
                    encodedVal = controllerContext.RequestContext.HttpContext.Request.QueryString["ufprt"];
                    break;

                default:
                    return null;
            }

            string decryptedString;
            try
            {
                decryptedString = encodedVal.DecryptWithMachineKey();
            }
            catch (FormatException)
            {
                LogHelper.Warn<RenderRouteHandler>("A value was detected in the ufprt parameter but Umbraco could not decrypt the string");
                return null;
            }

            var parsedQueryString = HttpUtility.ParseQueryString(decryptedString);
            var decodedParts = new Dictionary<string, string>();

            foreach (var key in parsedQueryString.AllKeys)
            {
                decodedParts[key] = parsedQueryString[key];
            }

            var result = new Dictionary<string, object>();
            foreach (var item in decodedParts.Where(x => new[] { Controller, Action, Area }.Contains(x.Key) == false))
            {
                result.Add(item.Key, item.Value);
            }

            var settings = new JsonSerializerSettings();
            settings.NullValueHandling = NullValueHandling.Ignore;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            return JsonConvert.SerializeObject(result, settings);
        }

        private static void ThrowModelBindingException(string jsonString)
        {
            var ex = new StringBuilder();
            ex.AppendLine($"Can not bind to {typeof(TModel).FullName} with");
            ex.AppendLine($"json '{jsonString}'.");

            throw new ModelBindingException(ex.ToString());
        }
    }
}
