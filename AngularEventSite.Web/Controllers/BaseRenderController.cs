// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BaseRenderController.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved 
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the BaseRenderController type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace SpecialistHjalpen.Web.Controllers
{
    using System.Linq;
    using System.Web.Mvc;

    using BlueLeet.UCodeFirst.Extensions;

    using Umbraco.Web.Mvc;

    using SpecialistHjalpen.Web.Abstraction;
    using SpecialistHjalpen.Web.Models;
    using SpecialistHjalpen.Web.ViewModels;
    using StructureMap;

    using SpecialistHjalpen.Web.Entities;
    using SpecialistHjalpen.Web.Entities.Payloads;

    /// <summary>
    /// The <c>base</c> render controller.
    /// </summary>
    public abstract class BaseRenderController : RenderMvcController, IMessageView<PayloadResult>
    {
        /// <summary>
        /// Get the application context.
        /// </summary>
        protected readonly IContextService WellaContext;

        /// <summary>
        /// Initializes a new instance of the <see cref="BaseRenderController"/> class.
        /// </summary>
        protected BaseRenderController()
        {
            var container = DependencyResolver.Current.GetService<IContainer>();
            this.WellaContext = container.GetInstance<IContextService>();
        }

        /// <summary>
        /// Gets or sets the membership helper.
        /// </summary>
        public virtual IMembershipService MembershipHelper { get; set; }

        /// <inheritdoc />
        public void ShowMessage(PayloadResult messageViewModel)
        {
            // We have to put it on two because some umbraco redirects only work with ViewData!!
            this.ViewData[this.WellaContext.Constants.MessageViewBagName] = messageViewModel;
            this.TempData[this.WellaContext.Constants.MessageViewBagName] = messageViewModel;
        }

        /// <summary>
        /// Redirects to the <c>Umbraco</c> page to the start page
        /// </summary>
        /// <returns>
        /// The <see cref="RedirectToUmbracoPageResult"/>.
        /// </returns>
        protected RedirectToUmbracoPageResult RedirectToWellaStartPage()
        {
            var currentPage = this.Umbraco.AssignedContentItem.ToModel();
            var startPage = currentPage.Descendants<StartPageModel>().First();

            return new RedirectToUmbracoPageResult(startPage.PublishedContent, this.UmbracoContext);
        }
    }
}
