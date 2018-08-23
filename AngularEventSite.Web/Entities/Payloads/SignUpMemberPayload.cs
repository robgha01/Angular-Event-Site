namespace AngularEventSite.Web.Entities.Payloads
{
    using System.Web.Http.ModelBinding;

    using BlueLeet.Common.Json.Serialization;
    using BlueLeet.Common.Web.ModelBinding;

    using Newtonsoft.Json;

    [JsonConverter(typeof(JsonPathConverter))]
    [ModelBinder(typeof(AttemptingModelBinder))]
    public class SignUpMemberPayload
    {
        public string Company { get; set; }

        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [JsonProperty("passwordGroup.password")]
        public string Password { get; set; }

        public string Phone { get; set; }
    }
}