// --------------------------------------------------------------------------------------------------------------------
// <copyright file="WidgetPriceCalculatorController.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the WidgetPriceCalculatorController type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace AngularEventSite.Web.Controllers
{
    using System.Web.Http;

    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;

    public class WidgetPriceCalculatorController : BaseApiController
    {
        /// <inheritdoc />
        public WidgetPriceCalculatorController(IContextService contextService, IMembershipService membershipService, IUCodeFirstHelper codeFirstHelper)
            : base(contextService, membershipService, codeFirstHelper)
        {
        }

        public IHttpActionResult CalculateWithHours(int id)
        {
            
        }

        public IHttpActionResult CalculateWithSquareMeters(int id)
        {

        }
    }
}