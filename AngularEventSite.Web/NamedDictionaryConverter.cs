// --------------------------------------------------------------------------------------------------------------------
// <copyright file="NamedDictionaryConverter.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the NamedDictionaryConverter type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace AngularEventSite.Web
{
    using System;
    using System.Collections.Generic;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;

    /// <summary>
    /// The named dictionary converter.
    /// </summary>
    /// <typeparam name="TKey">
    /// The key type
    /// </typeparam>
    /// <typeparam name="TValue">
    /// The value type
    /// </typeparam>
    public class NamedDictionaryConverter<TKey, TValue> : JsonConverter
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NamedDictionaryConverter{TKey,TValue}"/> class.
        /// </summary>
        /// <param name="keyPropertyName">
        /// The key property name.
        /// </param>
        /// <param name="valuePropertyName">
        /// The value property name.
        /// </param>
        public NamedDictionaryConverter(string keyPropertyName, string valuePropertyName)
        {
            KeyPropertyName = keyPropertyName;
            ValuePropertyName = valuePropertyName;
        }

        /// <inheritdoc />
        public override bool CanRead => false;

        private string KeyPropertyName { get; }

        private string ValuePropertyName { get; }
        
        /// <inheritdoc />
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var dict = (IEnumerable<KeyValuePair<TKey, TValue>>)value;
            JArray array = new JArray();

            foreach (var kvp in dict)
            {
                JObject obj = new JObject();
                obj.Add(KeyPropertyName, JToken.FromObject(kvp.Key, serializer));
                obj.Add(ValuePropertyName, JToken.FromObject(kvp.Value, serializer));
                array.Add(obj);
            }

            array.WriteTo(writer);
        }

        /// <inheritdoc />
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }
        
        /// <inheritdoc />
        public override bool CanConvert(Type objectType)
        {
            return typeof(IEnumerable<KeyValuePair<TKey, TValue>>).IsAssignableFrom(objectType);
        }
    }
}