namespace AngularEventSite.Web.Configuration
{
    using System.Web.Mvc;

    using AutoMapper;

    using AngularEventSite.Web.Configuration.Profiles;

    using StructureMap;

    using Umbraco.Core;

    public class AutoMapperBootstrapper : ApplicationEventHandler
    {
        /// <inheritdoc />
        protected override void ApplicationStarting(
            UmbracoApplicationBase umbracoApplication,
            ApplicationContext applicationContext)
        {
            var container = DependencyResolver.Current.GetService<IContainer>();
            Mapper.AddProfile(new SiteMemberProfile(container.GetInstance<IContainer>()));
        }
    }
}