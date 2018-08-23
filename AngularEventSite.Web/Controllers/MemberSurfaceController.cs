namespace AngularEventSite.Web.Controllers
{
    using System;
    using System.Linq;
    using System.Net;
    using System.Web;
    using System.Web.Http;
    using System.Web.Security;

    using BlueLeet.UCodeFirst.Extensions;
    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Entities.Payloads;
    using AngularEventSite.Web.Enums;
    using AngularEventSite.Web.MemberTypes;
    using AngularEventSite.Web.Models;

    using Umbraco.Core;
    using Umbraco.Core.Models;
    using Umbraco.Web.PublishedCache;

    /// <summary>
    /// The login register surface controller.
    /// </summary>
    public sealed class MemberSurfaceController : BaseApiController
    {
        private readonly IUserService userService;

        /// <inheritdoc/>
        public MemberSurfaceController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper,
            IUserService userService)
            : base(contextService, membershipService, codeFirstHelper)
        {
            this.userService = userService;
        }

        [HttpPost]
        public IHttpActionResult ForgotPasswordPost(string email)
        {
            var result = new PayloadResult();
            var tryGetMember = Services.MemberService.GetByEmail(email);
            if (tryGetMember == null)
            {
                result.SetMessageType(GenericMessages.Danger);
                result.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.NotRegistered);
                result.SetMessage("Something went wrong");
                return Error(result);
            }

            var member = ContextService.MembershipHelper.MapMember(tryGetMember);
            if (member.IsEmailConfirmed == false)
            {
                // Email is not confirmed send it again!
                return SendConfirmationMailPost(email);
            }

            // Create a Guid so we can retrieve the user again.
            member.SecurityToken = Guid.NewGuid().ToString();

            // Expire in 30 minutes
            member.SecurityTokenExpireDate = DateTime.Now.AddMinutes(30);

            ContextService.MembershipHelper.ReverseMapMember(member, true);
            var loginPage = CurrentPage.ToModel<BaseContentModel>().StartPage.Children<LoginPageModel>().First();
            var returnUrl = loginPage.UrlWithDomain() + "?token=" + member.SecurityToken;
            ContextService.Mailer.SendForgotPassword(member, returnUrl);

            result.SetMessageType(GenericMessages.Success);
            return Json(result);
        }

        [HttpPost]
        public IHttpActionResult GetLoginUrlPost()
        {
            var loginPage = CurrentPage.ToModel<BaseContentModel>().StartPage.Children<LoginPageModel>().First();
            return Json(loginPage.Url);
        }

        [HttpPost]
        public IHttpActionResult GetMemberPost()
        {
            var payload = new PayloadResult();

            if (userService.IsAuthenticated())
            {
                payload.SetOrUpdate(nameof(PayloadFields.User), userService.MapAsMember(userService.CurrentUser));
                payload.SetMessageType(GenericMessages.Success);
            }
            else if (Members.IsLoggedIn())
            {
                AddCurrentMemberToPayload(ref payload);
                payload.SetMessageType(GenericMessages.Success);
            }
            else
            {
                payload.SetMessageType(GenericMessages.Danger);
                payload.SetMessage(Umbraco.GetDictionaryValue("Members.LoginExpired", "Members.LoginExpired"));
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.LoginExpired);

                return Error(payload);
            }

            return Json(payload);
        }

        [HttpPost]
        public IHttpActionResult HasAccessPost()
        {
            var payload = new PayloadResult();
            if (userService.IsAuthenticated())
            {
                ContextService.UserHelper.LoginAsMember();
                payload.SetMessageType(GenericMessages.Success);
            }
            //else if (CurrentPage.DocumentTypeAlias.Equals(nameof(LoginPageModel)))
            //{
            //    payload.SetMessageType(GenericMessages.Success);
            //}
            else if (Umbraco.IsProtected(CurrentPage.Path))
            {
                // Do we have a logged in member ?
                if (Umbraco.MemberIsLoggedOn() == false)
                {
                    payload.SetMessageType(GenericMessages.Danger);
                    payload.SetMessage(Umbraco.GetDictionaryValue("Members.LoginExpired", "Members.LoginExpired"));
                    payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.LoginExpired);

                    return Error(payload);
                }

                // Do we have access to the current page ?
                if (Umbraco.MemberHasAccess(CurrentPage.Path) == false)
                {
                    // If we get here the member has no access to this page, redirect them to there start page.
                    payload.SetMessageType(GenericMessages.Danger);
                    RedirectCurrentMemberToStartPage(ref payload);
                    payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.AuthorizationFailure);
                }
                else
                {
                    // Check if the backoffice user is signed out while the admin member is logged in.
                    var member = (MemberPublishedContent)Umbraco.MembershipHelper.GetCurrentMember();
                    if (member.DocumentTypeAlias.Equals(nameof(AdminMember)) && userService.ValidateUser(member.Email))
                    {
                        var user = Services.UserService.GetByEmail(member.Email);

                        // This is a backoffice member lets log them in.
                        UmbracoContext.Security.PerformLogin(user.Id);
                        payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.AdminLoggedIn);
                    }

                    payload.SetMessageType(GenericMessages.Success);
                }
            }
            else
            {
                payload.SetMessageType(GenericMessages.Success);
            }

            return Json(payload);
        }

        [HttpPost]
        public IHttpActionResult IsAdminPost()
        {
            var isAuthenticated = userService.IsAuthenticated();
            return Json(isAuthenticated);
        }

        [HttpPost]
        public IHttpActionResult NewPasswordPost(string token, string password)
        {
            var result = new PayloadResult();
            var tryGetMember = Services.MemberService
                .GetMembersByPropertyValue(ContextService.Config.PropSecurityToken, token).SingleOrDefault();
            if (tryGetMember == null)
            {
                result.SetMessageType(GenericMessages.Danger);
                result.SetMessage("Forgot password reset token expired, request a new one.");
                result.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.LoginExpired);
                return Error(result);
            }

            // If the member is locked out we need to undo that.
            if (tryGetMember.IsLockedOut)
            {
                tryGetMember.IsLockedOut = false;
                Services.MemberService.Save(tryGetMember);
            }

            var member = ContextService.MembershipHelper.MapMember(tryGetMember);
            member.SecurityToken = string.Empty;

            if (!member.SecurityTokenExpireDate.HasValue
                || member.SecurityTokenExpireDate.Value.ToUniversalTime() < DateTime.UtcNow)
            {
                ContextService.MembershipHelper.ReverseMapMember(member, true);
                result.SetMessageType(GenericMessages.Danger);
                result.SetMessage("Forgot password reset token expired, request a new one.");
                result.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.LoginExpired);
                return Error(result);
            }

            ApplicationContext.Services.MemberService.SavePassword(tryGetMember, password);

            if (Members.Login(tryGetMember.Username, password) == false)
            {
                result.SetMessageType(GenericMessages.Danger);
                result.SetMessage("Something went wrong");
                result.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.Unknown);
                return Error(result);
            }

            ContextService.MembershipHelper.ReverseMapMember(member, true);
            result.SetMessageType(GenericMessages.Success);

            return Json(result);
        }

        [HttpPost]
        public IHttpActionResult SendConfirmationMailPost(string email)
        {
            var result = new PayloadResult();
            var member = Members.GetByEmail(email);
            var wellaMember = ContextService.MembershipHelper.MapMember(member);
            wellaMember.SecurityToken = Guid.NewGuid().ToString();
            ContextService.MembershipHelper.ReverseMapMember(wellaMember, true);
            var loginPage = CurrentPage.ToModel<BaseContentModel>().StartPage.Children<LoginPageModel>().First();
            var returnUrl = loginPage.UrlWithDomain() + "?confirmEmailToken=" + wellaMember.SecurityToken;
            ContextService.Mailer.SendEmailConfirmation(wellaMember, returnUrl);

            result.SetMessage(
                Umbraco.GetDictionaryValue("Members.AuthorisationEmailSent", "Members.AuthorisationEmailSent"));
            result.SetMessageType(GenericMessages.Success);
            return Json(result);
        }

        [HttpPost]
        public IHttpActionResult SignInMemberPost(string username, string password, bool? remember)
        {
            var payload = new PayloadResult();
            var currentPage = CurrentPage.ToModel<BaseContentModel>();
            payload.SetOrUpdate(nameof(PayloadFields.LoginUrl), currentPage.LoginPage.Url);

            // Check if this is a backoffice user.
            var user = Services.UserService.GetByUsername(username) ?? Services.UserService.GetByEmail(username);
            if (user != null && UmbracoContext.Security.ValidateBackOfficeCredentials(user.Username, password))
            {
                // First lets login as a Backoffice user then member.
                UmbracoContext.Security.PerformLogin(user.Id);

                // We need to set the user as this request HttpContext has no umbraco data in it for the user.
                ContextService.UserHelper.SetCurrentUser(user);
                ContextService.UserHelper.LoginAsMember();
                payload.SetMessageType(GenericMessages.Success);
                
                //payload.SetOrUpdate(nameof(PayloadFields.RedirectTo), currentPage.StartPage.Url);
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.AdminLoggedIn);
                return Json(payload);
            }

            var member = (Members.GetByEmail(username) ?? Members.GetByUsername(username)) as MemberPublishedContent;
            var memberMap = ContextService.MembershipHelper.MapMember(member);

            // check if this is a Facebook integrated account.
            if (memberMap.LoginType != LoginType.Standard && memberMap.LoginType == LoginType.Facebook)
            {
                payload.SetMessageType(GenericMessages.Danger);
                payload.SetMessage("Please use Facebook to login");
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.FacebookIntegrated);
                return Error(payload, HttpStatusCode.Unauthorized);
            }

            var validCredentials = Membership.ValidateUser(member.UserName, password);

            // ToDo: Refactor this.
            if (Members.IsLoggedIn())
            {
                AddCurrentMemberToPayload(ref payload, member);
                payload.SetMessage("Already logged in");
                payload.SetMessageType(GenericMessages.Success);
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.AlreadyLoggedIn);
            }
            else if (!memberMap.IsEmailConfirmed && validCredentials)
            {
                AddCurrentMemberToPayload(ref payload, member);
                payload.SetMessage(
                    Umbraco.GetDictionaryValue(
                        "Members.MemberEmailAuthorisationNeeded",
                        "Members.MemberEmailAuthorisationNeeded"));
                payload.SetMessageType(GenericMessages.Success);
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.EmailAuthorisationNeeded);
            }
            else if (Members.Login(member.UserName, password))
            {
                AddCurrentMemberToPayload(ref payload, member);
                payload.SetMessageType(GenericMessages.Success);
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.LoggedIn);
                //payload.SetOrUpdate(nameof(PayloadFields.RedirectTo), CurrentPage.ToModel<BaseContentModel>().StartPage.Url);
            }
            else
            {
                // Something went wrong ether the password or username is not correct.
                payload.SetMessageType(GenericMessages.Danger);
                payload.SetMessage("Användarnamn eller lösenord är felaktigt");
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.AuthorizationFailure);
                return Error(payload, HttpStatusCode.Unauthorized);
            }

            return Json(payload);
        }

        [HttpPost]
        public IHttpActionResult SignOutPost()
        {
            var payload = new PayloadResult();
            if (Members.IsLoggedIn())
            {
                payload.SetMessageType(GenericMessages.Success);
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.LoginExpired);
                var loginPage = CurrentPage.ToModel<BaseContentModel>().StartPage.Descendants<LoginPageModel>().First();
                payload.SetOrUpdate(nameof(PayloadFields.LoginUrl), loginPage.Url);
                Members.Logout();

                // httpContext.Result.Request.GetOwinContext()
                // .Authentication.SignOut(
                // httpContext.Result.GetOwinContext()
                // .Authentication.GetAuthenticationTypes()
                // .Select(o => o.AuthenticationType)
                // .ToArray());
                UmbracoContext.Security.ClearCurrentLogin();

                var httpContext = TryGetHttpContext();
                if (httpContext.Success)
                {
                    httpContext.Result.Session?.Clear();
                    httpContext.Result.Session?.Abandon();

                    if (httpContext.Result.Request.Cookies[FormsAuthentication.FormsCookieName] != null)
                    {
                        var myCookie = new HttpCookie(FormsAuthentication.FormsCookieName);
                        myCookie.Expires = DateTime.Now.AddDays(-1);
                        httpContext.Result.Response.Cookies.Add(myCookie);
                    }
                }
            }
            else if (userService.IsAuthenticated())
            {
                payload.SetMessageType(GenericMessages.Success);
                payload.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.LoginExpired);
                var loginPage = CurrentPage.ToModel<BaseContentModel>().StartPage.Descendants<LoginPageModel>().First();
                payload.SetOrUpdate(nameof(PayloadFields.LoginUrl), loginPage.Url);
                UmbracoContext.Security.ClearCurrentLogin();

                var httpContext = TryGetHttpContext();
                if (httpContext.Success)
                {
                    // var backOfficeUserManager = httpContext.Result.GetOwinContext().GetBackOfficeUserManager();
                    httpContext.Result.Session?.Clear();
                    httpContext.Result.Session?.Abandon();
                    FormsAuthentication.SignOut();

                    if (httpContext.Result.Request.Cookies[FormsAuthentication.FormsCookieName] != null)
                    {
                        var myCookie = new HttpCookie(FormsAuthentication.FormsCookieName);
                        myCookie.Expires = DateTime.Now.AddDays(-1);
                        httpContext.Result.Response.Cookies.Add(myCookie);
                    }
                }
            }

            return Json(payload);
        }

        /// <summary>
        /// Handles registration of a member.
        /// </summary>
        /// <param name="payload">
        /// The <see cref="SignUpMemberPayload"/> to use with this member signup.
        /// </param>
        /// <returns>
        /// A <see cref="PayloadResult"/>.
        /// </returns>
        [HttpPost]
        public IHttpActionResult SignUpMemberPost(SignUpMemberPayload payload)
        {
            var result = new PayloadResult();
            if (payload == null)
            {
                return Error("payload is null!", HttpStatusCode.InternalServerError);
            }

            IPublishedContent member = Members.GetByEmail(payload.Email) as MemberPublishedContent;
            if (member != null)
            {
                result.SetMessageType(GenericMessages.Danger);
                result.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.AlreadyRegistered);
                result.SetMessage("Email already registered.");
                return Error(result);
            }

            MembershipCreateStatus memberStatus;
            var m = ContextService.MembershipHelper.Register(
                payload.Email,
                payload.Email,
                payload.FirstName,
                payload.LastName,
                payload.Password,
                out memberStatus);
            if (memberStatus == MembershipCreateStatus.Success)
            {
                m.SetValue(ContextService.Config.PropCompany, payload.Company);
                m.SetValue(ContextService.Config.PropPhone, payload.Phone);
                m.SetValue(ContextService.Config.PropLoginType, LoginType.Standard);

                Services.MemberService.Save(m);
                member = Members.GetById(m.Id);
                var siteMember = AddCurrentMemberToPayload(ref result, member);

                // Email auth: Create a Guid so we can retrieve the user again.
                siteMember.SecurityToken = Guid.NewGuid().ToString();
                ContextService.MembershipHelper.ReverseMapMember(siteMember, true);
                var loginPage = CurrentPage.ToModel<BaseContentModel>().StartPage.Children<LoginPageModel>().First();
                var returnUrl = loginPage.UrlWithDomain() + "?confirmEmailToken=" + siteMember.SecurityToken;
                ContextService.Mailer.SendEmailConfirmation(siteMember, returnUrl);

                result.SetMessage(
                    Umbraco.GetDictionaryValue(
                        "Members.MemberEmailAuthorisationNeeded",
                        "Members.MemberEmailAuthorisationNeeded"));
                result.SetMessageType(GenericMessages.Success);
                result.SetOrUpdate(nameof(PayloadFields.Status), MemberStatus.EmailAuthorisationNeeded);
                return Json(result);
            }

            if (memberStatus != MembershipCreateStatus.Success)
            {
                result.SetMessageType(GenericMessages.Danger);
                result.SetOrUpdate(nameof(PayloadFields.Status), memberStatus);
                return Error(result, HttpStatusCode.InternalServerError);
            }

            return Json(result);
        }

        [HttpPost]
        public IHttpActionResult ValidateEmailPost(string email)
        {
            var member = Members.GetByEmail(email) != null;
            return Json(member);
        }

        [HttpPost]
        public IHttpActionResult ValidateUsernamePost(string username)
        {
            // force lowercase
            username = username.ToLower();

            var payload = new PayloadResult();
            var safeUsername = username.ToUrlSegment();
            if (!safeUsername.Equals(username))
            {
                var invalidCharacters = username.Where(x => !safeUsername.Any(s => s.Equals(x))).ToList();
                var message = string.Empty;

                for (var i = 0; i < invalidCharacters.Count; i++)
                {
                    var c = invalidCharacters[i];
                    message += $"<strong>{c}</strong>";

                    if (i < invalidCharacters.Count - 1)
                    {
                        message += ", ";
                    }
                }

                payload.SetMessageType(GenericMessages.Danger);

                // payload.SetMessage($"Invalid characters in username: {message}");
                payload.SetMessage(message);

                return Json(payload);
            }

            var usernameTaken = Members.GetByUsername(username) != null;
            return Json(usernameTaken);
        }

        private ISiteMember AddCurrentMemberToPayload(ref PayloadResult result, IPublishedContent member = null)
        {
            var m = ContextService.MembershipHelper.MapMember(member ?? Members.GetCurrentMember());
            result.SetOrUpdate(nameof(PayloadFields.User), m);
            return m;
        }

        private void RedirectCurrentMemberToStartPage(ref PayloadResult payload)
        {
            var member = Umbraco.MembershipHelper.GetCurrentMember();

            if (member.DocumentTypeAlias.Equals(nameof(AdminMember)))
            {
                payload.SetOrUpdate(
                    nameof(PayloadFields.RedirectTo),
                    CurrentPage.ToModel<BaseContentModel>().StartPage.Url);
            }
            else
            {
                payload.SetOrUpdate(
                    nameof(PayloadFields.RedirectTo),
                    CurrentPage.ToModel<BaseContentModel>().StartPage.Url);
            }
        }
    }
}