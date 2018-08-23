namespace AngularEventSite.Web.Bootstrapers
{
    using System;
    using System.Web.Mvc;

    using AngularEventSite.Web.Abstraction;

    using StructureMap;

    using Umbraco.Core;

    /// <summary>
    /// Describes the base class for application bootstrapping.
    /// </summary>
    public abstract class ApplicationBootstrapBase : ApplicationEventHandler
    {
        private Lazy<IMailer> angulareventsiteMailer;

        private Lazy<IMembershipService> membershipService;

        /// <inheritdoc />
        protected ApplicationBootstrapBase()
        {
            membershipService = new Lazy<IMembershipService>(Resolve<IMembershipService>);
            angulareventsiteMailer = new Lazy<IMailer>(Resolve<IMailer>);
        }

        /// <summary>
        /// Gets the mailer.
        /// </summary>
        protected IMailer Mailer
        {
            get
            {
                return angulareventsiteMailer.Value;
            }
        }

        /// <summary>
        /// Gets the membership service.
        /// </summary>
        protected IMembershipService MembershipService
        {
            get
            {
                return membershipService.Value;
            }
        }

        private T Resolve<T>()
        {
            var root = DependencyResolver.Current.GetService<IContainer>();
            using (var container = root.GetNestedContainer())
            {
                return container.GetInstance<T>();
            }
        }
    }
}