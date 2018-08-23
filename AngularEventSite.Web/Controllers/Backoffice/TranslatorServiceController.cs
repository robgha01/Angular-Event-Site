namespace AngularEventSite.Web.Controllers.Backoffice
{
    using System.Collections.Generic;
    using System.Web.Http;
    using System.Web.Http.ModelBinding;

    using BlueLeet.Common.Web.ModelBinding;
    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;

    using Newtonsoft.Json.Linq;

    using SmartFormat;

    /// <summary>
    /// The translator service controller.
    /// </summary>
    public class TranslatorServiceController : BaseApiController
    {
        /// <inheritdoc />
        public TranslatorServiceController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper)
            : base(contextService, membershipService, codeFirstHelper)
        {
        }

        [HttpPost]
        public string SmartTranslationPost(
            string key,
            [ModelBinder(typeof(AttemptingModelBinder))] JObject value,
            string altText = "")
        {
            var dictionaryValue = Umbraco.GetDictionaryValue(key, altText);
            var valueDict = value.ToObject<Dictionary<string, object>>();
            return Smart.Format(dictionaryValue, valueDict);
        }

        [HttpPost]
        public string TranslationPost(string key, string altText = "")
        {
            return Umbraco.GetDictionaryValue(key, altText);
        }
    }
}