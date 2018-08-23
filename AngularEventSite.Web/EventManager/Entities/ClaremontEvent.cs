namespace AngularEventSite.Web.EventManager.Entities
{
    using Umbraco.Core.Persistence;
    using Umbraco.Core.Persistence.DatabaseAnnotations;

    [TableName("claremontevent")]
    [PrimaryKey("id", autoIncrement = true)]
    public class ClaremontEvent
    {
        [PrimaryKeyColumn(AutoIncrement = true)]
        [Column("id")]
        public int Id { get; set; }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("event_id")]
        public int EventId { get; set; }
        
        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("member_id")]
        public int MemberId { get; set; }
    }
}