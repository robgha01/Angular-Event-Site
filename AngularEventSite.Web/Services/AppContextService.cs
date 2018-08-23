namespace AngularEventSite.Web.Services
{
    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;

    using JetBrains.Annotations;

    using Umbraco.Core;

    using DisposableObject = BlueLeet.Common.DisposableObject;

    /// <summary>
    /// The app context service.
    /// </summary>
    // ReSharper disable once ClassWithVirtualMembersNeverInherited.Global
    public class AppContextService : DisposableObject, IContextService
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AppContextService"/> class.
        /// </summary>
        /// <param name="mailer">
        /// The mailer.
        /// </param>
        /// <param name="membershipService">
        /// The membership service.
        /// </param>
        /// <param name="userService">
        /// The user service.
        /// </param>
        /// <param name="fileHelper">
        /// The file helper.
        /// </param>
        public AppContextService(
            IMailer mailer,
            IMembershipService membershipService,
            IUserService userService,
            IConfigService ConfigService)
        {
            Mailer = mailer;
            MembershipHelper = membershipService;
            UserHelper = userService;
            Config = ConfigService;
        }

        public IConfigService Config { get; }

        /// <inheritdoc />
        [UsedImplicitly]
        public IMailer Mailer { get; private set; }

        /// <inheritdoc />
        [UsedImplicitly]
        public IMembershipService MembershipHelper { get; private set; }

        /// <inheritdoc />
        [UsedImplicitly]
        public IUserService UserHelper { get; private set; }

        /// <inheritdoc />
        protected override void DisposeResources()
        {
            Mailer.DisposeIfDisposable();
            MembershipHelper.DisposeIfDisposable();
            UserHelper.DisposeIfDisposable();
        }
    }
}