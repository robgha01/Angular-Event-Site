namespace AngularEventSite.Web.Controllers.PageControllers
{
    using System;
    using System.Linq;
    using System.Web.Mvc;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Models;

    using StructureMap;

    using Umbraco.Core;
    using Umbraco.Core.Configuration;
    using Umbraco.Web;
    using Umbraco.Web.PublishedCache;
    using Umbraco.Web.Routing;

    /// <summary>
    /// The profile url provider.
    /// </summary>
    public class ProfileUrlProvider : DefaultUrlProvider
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProfileUrlProvider"/> class.
        /// </summary>
        public ProfileUrlProvider()
            : base(UmbracoConfig.For.UmbracoSettings().RequestHandler)
        {
        }

        /// <inheritdoc/>
        public override string GetUrl(UmbracoContext umbracoContext, int id, Uri current, UrlProviderMode mode)
        {
            var content = umbracoContext.ContentCache.GetById(id);
            if (content?.Parent == null)
            {
                return null;
            }

            if (!current.IsAbsoluteUri)
            {
                throw new ArgumentException("Current url must be absolute.", "current");
            }

            if (content.DocumentTypeAlias == nameof(ErrorPageModel))
            {
                var parts = current.GetAbsolutePathDecoded().Split(
                    new[] { '/' },
                    StringSplitOptions.RemoveEmptyEntries);
                var tmpUrl = "/";

                // Lets try to get the content by using parts of the url until we find it.
                for (var index = 0; index < parts.Length; index++)
                {
                    tmpUrl += parts[index] + "/";

                    try
                    {
                        // Try to resolve it as a route.
                        content = UmbracoContext.Current.ContentCache.GetByRoute(tmpUrl);
                        if (content != null)
                        {
                            break;
                        }
                    }
                    catch (Exception)
                    {
                        // ignored
                    }
                }

                if (content?.Parent == null)
                {
                    return null;
                }
            }

            if (content.DocumentTypeAlias == nameof(ProfilePageModel))
            {
                using (var container = DependencyResolver.Current.GetService<IContainer>().GetNestedContainer())
                {
                    var membershipService = container.GetInstance<IMembershipService>();
                    var helper = new UmbracoHelper(umbracoContext);

                    // This will add the selected date before the node name. For example /news/item1/
                    // becomes /news/28-07-2014/item1/.
                    var url = content.Parent.Url;
                    if (!url.EndsWith("/"))
                    {
                        url += "/";
                    }

                    var currentUrl = current.AbsolutePath;
                    currentUrl = currentUrl.TrimStart('/');
                    var segments = currentUrl.Split(new[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
                    if (!segments.Skip(1).Any())
                    {
                        var currentMember = helper.MembershipHelper.GetCurrentMember() as MemberPublishedContent;
                        if (currentMember != null)
                        {
                            var member = membershipService.MapMember(currentMember);
                            var u = string.Format(
                                "{0}/{1}/",
                                url + content.UrlName,
                                member.UserName.ToLower().ToUrlSegment());

                            return u;
                        }
                    }
                    else
                    {
                        var username = segments.Skip(1).First();
                        var memberByUsername =
                            helper.MembershipHelper.GetByUsername(username) as MemberPublishedContent;
                        if (memberByUsername == null)
                        {
                            memberByUsername = ApplicationContext.Current.Services.MemberService
                                .GetMembersByGroup(nameof(MemberTypes.SiteMember))
                                .Select(x => helper.MembershipHelper.GetById(x.Id)).OfType<MemberPublishedContent>()
                                .FirstOrDefault(
                                    x => x.UserName.ToUrlSegment().Equals(
                                        username,
                                        StringComparison.OrdinalIgnoreCase));
                        }

                        if (memberByUsername != null)
                        {
                            var member = membershipService.MapMember(memberByUsername);
                            var u = string.Format(
                                "{0}/{1}/",
                                url + content.UrlName,
                                member.UserName.ToLower().ToUrlSegment());

                            return u;
                        }
                    }
                }
            }

            return null;
        }
    }
}