// --------------------------------------------------------------------------------------------------------------------
// <copyright file="CourseSurfaceController.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   The course controller.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace SpecialistHjalpen.Web.Controllers
{
    using System.Web.Mvc;

    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using SpecialistHjalpen.Web.Abstraction;
    using SpecialistHjalpen.Web.Repositories;
    using SpecialistHjalpen.Web.Repositories.Abstraction;

    /// <summary>
    /// The course controller.
    /// </summary>
    public class CourseSurfaceController : BaseSurfaceController
    {
        private readonly ICourseRepository courseRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="CourseSurfaceController"/> class.
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
        /// <param name="courseRepository">
        /// The course repository.
        /// </param>
        public CourseSurfaceController(IContextService contextService, IMembershipService membershipService, IUCodeFirstHelper codeFirstHelper, ICourseRepository courseRepository) : base(contextService, membershipService, codeFirstHelper)
        {
            this.courseRepository = courseRepository;
        }
        
        /// <summary>
        /// The unregister for course post.
        /// </summary>
        /// <param name="courseId">
        /// The course Id.
        /// </param>
        /// <param name="memberId">
        /// The member Id.
        /// </param>
        /// <returns>
        /// A <see cref="CourseActionResult"/>.
        /// </returns>
        [HttpPost]
        public ActionResult RemoveCourseParticipant(int courseId, int memberId)
        {
            if (ContextService.UserHelper.IsAuthenticated() == false)
            {
                return RedirectToWellaStartPage();
            }

            courseRepository.RemoveParticipantToCourse(courseId, memberId);
            return CurrentUmbracoPage();
        }
    }
}
