namespace AngularEventSite.Web.JobManager.Abstraction
{
    using System;
    using System.Linq.Expressions;

    using AngularEventSite.Web.JobManager.Entities;

    public interface IJobManager
    {
        void Schedule(string jobId, Expression<Action> methodCall, TimeSpan delay);

        void Schedule(string jobId, Expression<Action> methodCall, DateTime delay);

        JobInfo GetJob(string jobId);

        void RemoveJob(string jobId, bool deleteHangfireEvent = false);
    }
}