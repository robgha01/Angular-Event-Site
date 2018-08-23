namespace AngularEventSite.Web.EventManager.Repositories
{
    using Umbraco.Core.Persistence;
    using Umbraco.Core.Persistence.DatabaseAnnotations;

    [TableName("companies")]
    [PrimaryKey("id", autoIncrement = true)]
    public class Companies
    {
        [PrimaryKeyColumn(AutoIncrement = true)]
        [Column("id")]
        public int Id { get; set; }
        
        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("member_id")]
        public int MemberId { get; set; }
    }
}