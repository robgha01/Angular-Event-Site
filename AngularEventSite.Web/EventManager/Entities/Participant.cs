namespace AngularEventSite.Web.EventManager.Entities
{
    using Umbraco.Core.Persistence;
    using Umbraco.Core.Persistence.DatabaseAnnotations;

    [TableName("participants")]
    [PrimaryKey("id", autoIncrement = true)]
    public class Participant
    {
        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("event_id")]
        public int EventId { get; set; }

        [PrimaryKeyColumn(AutoIncrement = true)]
        [Column("id")]
        public int Id { get; set; }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("member_id")]
        public int MemberId { get; set; }
    }
}