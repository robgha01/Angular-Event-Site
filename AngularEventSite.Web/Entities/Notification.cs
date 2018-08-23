namespace AngularEventSite.Web.Entities
{
    using System;
    using System.Runtime.Serialization;

    using BlueLeet.UCodeFirst;

    using Newtonsoft.Json;

    using ServiceStack.Text;

    using Umbraco.Core.Models;
    using Umbraco.Core.Persistence;
    using Umbraco.Core.Persistence.DatabaseAnnotations;

    [TableName("notifications")]
    [PrimaryKey("id", autoIncrement = true)]
    public class Notification
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Notification"/> class.
        /// </summary>
        public Notification()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Notification"/> class.
        /// </summary>
        /// <param name="from">
        /// The from.
        /// </param>
        /// <param name="to">
        /// The to.
        /// </param>
        /// <param name="message">
        /// The message.
        /// </param>
        public Notification(int from, int to, string message)
            : this(from, to, message, DateTime.Now)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Notification"/> class.
        /// </summary>
        /// <param name="from">
        /// The from.
        /// </param>
        /// <param name="to">
        /// The to.
        /// </param>
        /// <param name="message">
        /// The message.
        /// </param>
        /// <param name="createDate">
        /// The create Date.
        /// </param>
        public Notification(int from, int to, string message, DateTime createDate)
        {
            FromMemberId = from;
            ToMemberId = to;
            Message = message;
            CreateDate = createDate.ToStableUniversalTime();
        }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("create_date")]
        [DataMember]
        public DateTime CreateDate { get; set; }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("from_member_id")]
        [DataMember(Name = "fromMember")]
        [JsonProperty("fromMember")]
        [JsonConverter(typeof(PublishedContentJsonConverter<IPublishedContent>))]
        public int FromMemberId { get; set; }

        [PrimaryKeyColumn(AutoIncrement = true)]
        [Column("id")]
        [DataMember(Name = "messageId")]
        public int Id { get; set; }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("message")]
        [DataMember]
        public string Message { get; set; }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("to_member_id")]
        [DataMember(Name = "toMember")]
        [JsonProperty("toMember")]
        [JsonConverter(typeof(PublishedContentJsonConverter<IPublishedContent>))]
        public int ToMemberId { get; set; }
    }
}