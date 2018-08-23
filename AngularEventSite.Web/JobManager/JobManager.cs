namespace AngularEventSite.Web.JobManager
{
    using System;
    using System.Linq.Expressions;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.EventManager;
    using AngularEventSite.Web.JobManager.Abstraction;
    using AngularEventSite.Web.JobManager.Entities;

    using Hangfire;

    using Umbraco.Core.Logging;
    using Umbraco.Core.Persistence;

    public class JobManager : RepositoryBase, IJobManager
    {
        public void Schedule(string jobId, Expression<Action> methodCall, TimeSpan delay)
        {
            var internalJobId = BackgroundJob.Schedule(methodCall, delay);
            AddJob(internalJobId, jobId);
        }

        public void Schedule(string jobId, Expression<Action> methodCall, DateTime delay)
        {
            // Create a scheduled task 
            var internalJobId = BackgroundJob.Schedule(methodCall, delay);
            BackgroundJob.ContinueWith(internalJobId, () => RemoveJob(jobId, false), JobContinuationOptions.OnlyOnSucceededState);
            
            // Save the internal id
            AddJob(internalJobId, jobId);
        }

        public JobInfo GetJob(string jobId)
        {
            var sql = new Sql().Select("*")
                .From<JobInfo>(SqlSyntax)
                .Where($"lower(job_id) LIKE '%{jobId}%'");

            var jobInfo = Database.FirstOrDefault<JobInfo>(sql);

            return jobInfo;
        }

        public void RemoveJob(string jobId, bool deleteHangfireEvent = false)
        {
            try
            {
                var jobInfo = GetJob(jobId);
                if (jobInfo != null)
                {
                    if (deleteHangfireEvent)
                    {
                        BackgroundJob.Delete(jobInfo.HangfireJobId);
                    }

                    // Remove the tracking entity.
                    Database.Delete(jobInfo);
                }
            }
            catch (Exception e)
            {
                LogHelper.Error<EventRepository>(e.Message, e);
            }
        }

        protected void AddJob(string internalJobId, string jobId)
        {
            var jobInfo = new JobInfo { HangfireJobId = internalJobId, JobId = jobId };

            try
            {
                Database.Insert(jobInfo);
            }
            catch (Exception e)
            {
                LogHelper.Error<EventRepository>(e.Message, e);
            }
        }
    }
}