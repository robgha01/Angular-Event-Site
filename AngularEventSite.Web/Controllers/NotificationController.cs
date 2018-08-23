// --------------------------------------------------------------------------------------------------------------------
// <copyright file="NotificationController.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the NotificationController type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace SpecialistHjalpen.Web.Controllers
{
    using System;
    using System.Linq;
    using System.Web.Http;

    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using SpecialistHjalpen.Web.Abstraction;
    using SpecialistHjalpen.Web.Repositories.Abstraction;

    using X.PagedList;

    /// <summary>
    /// The notification controller.
    /// </summary>
    public class NotificationController : BaseApiController
    {
        private readonly INotificationRepository notificationRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="NotificationController"/> class.
        /// </summary>
        /// <param name="contextService">
        /// The context service.
        /// </param>
        /// <param name="membershipService">
        /// The membership service.
        /// </param>
        /// <param name="codeFirstHelper">
        /// The code First Helper.
        /// </param>
        /// <param name="notificationRepository">
        /// The notification Repository.
        /// </param>
        public NotificationController(IContextService contextService, IMembershipService membershipService, IUCodeFirstHelper codeFirstHelper, INotificationRepository notificationRepository) : base(contextService, membershipService, codeFirstHelper)
        {
            this.notificationRepository = notificationRepository;
        }

        /// <summary>
        /// Gets notifications for a member.
        /// </summary>
        /// <param name="memberId">
        /// The member Id.
        /// </param>
        /// <param name="page">
        /// The page.
        /// </param>
        /// <param name="pageSize">
        /// The page Size.
        /// </param>
        /// <param name="startDate">
        /// The start Date.
        /// </param>
        /// <param name="endDate">
        /// The end Date.
        /// </param>
        /// <returns>
        /// The <see cref="IHttpActionResult"/>.
        /// </returns>
        [HttpPost]
        public IHttpActionResult GetNotificationsPost(int memberId, int? page = null, int? pageSize = null, DateTime? startDate = null, DateTime? endDate = null)
        {
            var notifications = startDate.HasValue && endDate.HasValue ? notificationRepository.GetMessages(memberId, startDate.Value, endDate.Value) : notificationRepository.GetMessages(memberId);
            notifications = notifications.OrderByDescending(x => x.CreateDate);
            
            var pageNumber = page ?? 1;
            var pagedResult = notifications.ToPagedList(pageNumber, pageSize ?? 25);

            return Json(new { items = pagedResult, totalPages = pagedResult.PageCount, pageNumber = pagedResult.PageNumber });
        }

        [HttpPost]
        public IHttpActionResult RemoveNotificationPost(int memberId, int messageId)
        {
            notificationRepository.RemoveMessage(memberId, messageId);
            return Ok();
        }

        [HttpPost]
        public IHttpActionResult RemoveAllNotificationsPost(int memberId)
        {
            notificationRepository.RemoveAllMessages(memberId);
            return Ok();
        }
    }
}
