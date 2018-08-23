namespace AngularEventSite.Web.Extensions
{
    using System.Diagnostics.CodeAnalysis;
    using System.Web.Mvc;

    using JetBrains.Annotations;

    using Newtonsoft.Json;

    /// <summary>
    /// The json extensions.
    /// </summary>
    [SuppressMessage(
        "StyleCop.CSharp.DocumentationRules",
        "SA1650:ElementDocumentationMustBeSpelledCorrectly",
        Justification = "Reviewed. Suppression is OK here.")]
    public static class JsonExtensions
    {
        [UsedImplicitly]
        public static T FromJson<T>(this string json)
        {
            var jsonSerializerSettings = DependencyResolver.Current.GetService<JsonSerializerSettings>();
            return JsonConvert.DeserializeObject<T>(json, jsonSerializerSettings);
        }

        [UsedImplicitly]
        public static string ToJson<T>(this T obj)
        {
            var jsonSerializerSettings = DependencyResolver.Current.GetService<JsonSerializerSettings>();
            return JsonConvert.SerializeObject(obj, jsonSerializerSettings);
        }
    }
}