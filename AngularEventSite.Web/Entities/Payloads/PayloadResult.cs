namespace AngularEventSite.Web.Entities.Payloads
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Runtime.Serialization;
    using System.Web.Http.ModelBinding;

    using AngularEventSite.Web.Enums;
    using AngularEventSite.Web.ModelBinder;

    using JetBrains.Annotations;

    using Newtonsoft.Json;

    [DataContract]
    [ModelBinder(typeof(PayloadResultModelBinder))]
    public class PayloadResult
    {
        public PayloadResult()
        {
            Values = new Dictionary<string, object>();
        }

        public PayloadResult(string message, GenericMessages genericMessages = GenericMessages.Info)
        {
            SetMessage(message);
            SetMessageType(genericMessages);
        }

        [CanBeNull]
        [IgnoreDataMember]
        public string Message
        {
            get
            {
                var key = nameof(PayloadFields.Message);
                if (Values.ContainsKey(key))
                {
                    return Values[key] as string;
                }

                return null;
            }
        }

        [IgnoreDataMember]
        public GenericMessages MessageType
        {
            [UsedImplicitly]
            get
            {
                var key = nameof(PayloadFields.MessageType);
                if (Values.ContainsKey(key))
                {
                    return (GenericMessages)Values[key];
                }

                return GenericMessages.Info;
            }
        }

        [JsonExtensionData]
        public Dictionary<string, object> Values { get; set; }

        [CanBeNull]
        [UsedImplicitly]
        public object GetValue(string key, object fallbackValue = null)
        {
            var value = Values.Where(x => x.Key.Equals(key, StringComparison.OrdinalIgnoreCase)).Select(x => x.Value)
                .FirstOrDefault();
            return value ?? fallbackValue;
        }

        [CanBeNull]
        [UsedImplicitly]
        public TValue GetValue<TValue>(string key, TValue fallbackValue = null)
            where TValue : class
        {
            var value = GetValue(key) as TValue;
            return value ?? fallbackValue;
        }

        [NotNull]
        [UsedImplicitly]
        public PayloadResult SetMessage(string value)
        {
            SetOrUpdate(nameof(PayloadFields.Message), value);
            return this;
        }

        [NotNull]
        [UsedImplicitly]
        public PayloadResult SetMessageType(GenericMessages value)
        {
            SetOrUpdate(nameof(PayloadFields.MessageType), value);
            return this;
        }

        [NotNull]

        // ReSharper disable once UnusedMethodReturnValue.Global
        public PayloadResult SetOrUpdate(string key, object value)
        {
            if (key.Equals(nameof(PayloadFields.Message), StringComparison.OrdinalIgnoreCase) && !(value is string))
            {
                throw new ArgumentException(
                    "When key is " + key + ", value must be of type '" + typeof(string) + "' but was of type '"
                    + value.GetType() + "'.",
                    nameof(value));
            }

            if (key.Equals(nameof(PayloadFields.MessageType), StringComparison.OrdinalIgnoreCase)
                && !(value is GenericMessages))
            {
                throw new ArgumentException(
                    "When key is " + key + ", value must be of type '" + typeof(GenericMessages) + "' but was of type '"
                    + value.GetType() + "'.",
                    nameof(value));
            }

            var existingKey = Values.Where(x => x.Key.Equals(key, StringComparison.OrdinalIgnoreCase))
                .Select(x => x.Key).FirstOrDefault();
            if (existingKey != null)
            {
                Values[existingKey] = value;
            }
            else
            {
                Values.Add(key, value);
            }

            return this;
        }
    }

    public enum PayloadFields
    {
        Message,

        MessageType,

        Status,

        Raw,

        Error,

        User,

        LoginUrl,

        RedirectTo
    }
}