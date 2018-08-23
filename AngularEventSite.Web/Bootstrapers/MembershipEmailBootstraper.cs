namespace AngularEventSite.Web.Bootstrapers
{
    using System;

    using AngularEventSite.Web.Abstraction;

    using Umbraco.Core;
    using Umbraco.Core.Logging;

    /// <summary>
    /// Handles bootstrapping of member email events.
    /// </summary>
    public sealed class MembershipEmailBootstraper : ApplicationBootstrapBase, IDisposable
    {
        private IDisposable notifyOnNewMemberSignupSubscription;

        /// <inheritdoc />
        public void Dispose()
        {
            notifyOnNewMemberSignupSubscription?.Dispose();
        }

        /// <inheritdoc />
        protected override void ApplicationStarted(
            UmbracoApplicationBase umbracoApplication,
            ApplicationContext applicationContext)
        {
            notifyOnNewMemberSignupSubscription =
                MembershipService.MemberRegisterObservable.Subscribe(OnMemberRegister, OnError);
        }

        private void OnError(Exception exception)
        {
            LogHelper.Error<IMembershipService>(
                $"[{nameof(MembershipService.MemberRegisterObservable)}] A error occurred!",
                exception);
        }

        private void OnMemberRegister(ISiteMember member)
        {
            Mailer.SendNotifyNewMemberRegistration(member);
        }
    }
}