namespace AngularEventSite.Web.JobManager.Entities
{
    using Umbraco.Core.Persistence;
    using Umbraco.Core.Persistence.DatabaseAnnotations;

    /// <summary>
    /// Poco describing a <see cref="Hangfire"/> job
    /// </summary>
    [TableName("jobinfo")]
    [PrimaryKey("id", autoIncrement = true)]
    public class JobInfo
    {
        [PrimaryKeyColumn(AutoIncrement = true)]
        [Column("id")]
        public int Id { get; set; }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("job_id")]
        public string JobId { get; set; }

        [NullSetting(NullSetting = NullSettings.NotNull)]
        [Column("hangfirejob_id")]
        public string HangfireJobId { get; set; }
    }
}