namespace AngularEventSite.Tests.Unit
{
    using AngularEventSite.Web.JobManager;
    using AngularEventSite.Web.Mailer;

    using Xunit;

    public sealed class JobManagerTests
    {
        [Fact]
        public void Should_Register_Event()
        {
            var mailer = new DefaultMailer();
            
        }
    }
}