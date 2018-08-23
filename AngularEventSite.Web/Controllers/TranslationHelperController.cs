namespace AngularEventSite.Web.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;

    using Umbraco.Core;

    /// <summary>
    /// The translation helper controller.
    /// </summary>
    public sealed class TranslationHelperController : BaseApiController
    {
        private readonly string[] validationKeys =
            {
                "required", "invalidCreditCard", "invalidEmailAddress", "weakPassword", "invalidPasswordLength",
                "minlength", "email", "rangeLength", "digits", "number", "url", "date", "minDate", "dateISO", "json",
                "base64", "phone", "uuid", "equal", "equalTo", "usernameTaken", "invalidUsername",
                "emailAlreadyRegistered", "patternInvalidValue"
            };

        /// <inheritdoc/>
        public TranslationHelperController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper)
            : base(contextService, membershipService, codeFirstHelper)
        {
        }

        /// <summary>
        /// Get validation service messages.
        /// </summary>
        /// <returns>
        /// The <see cref="IHttpActionResult"/>.
        /// </returns>
        [HttpPost]
        public IHttpActionResult GetValidationServiceMessagesPost()
        {
            var result = new Dictionary<string, object>();
            foreach (var key in validationKeys)
            {
                result.Add(key, Umbraco.GetDictionaryValue($"ValidationMessage.{key.ToFirstUpper()}"));
            }

            return Json(result);
        }
    }
}