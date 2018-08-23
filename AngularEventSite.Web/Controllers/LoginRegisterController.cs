namespace SpecialistHjalpen.Web.Controllers
{
    using System;
    using System.Globalization;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    using Umbraco.Core.Logging;
    using Umbraco.Core.Models;

    using SpecialistHjalpen.Web.Abstraction;
    using SpecialistHjalpen.Web.Entities;
    using SpecialistHjalpen.Web.Entities.Payloads;
    using SpecialistHjalpen.Web.Enums;
    using SpecialistHjalpen.Web.ViewModels;

    /// <summary>
    /// The login register surface controller.
    /// </summary>
    public class LoginRegisterController : BaseSurfaceController
    {
        [ChildActionOnly]
        public ActionResult LoginForm()
        {
            var viewModel = new LoginViewModel(CurrentPage, CultureInfo.CurrentUICulture);

            // See if a return url is present or not and add it
            var returnUrl = Request["ReturnUrl"];
            if (!string.IsNullOrEmpty(returnUrl))
            {
                viewModel.ReturnUrl = returnUrl;
            }

            return PartialView("~/Views/Partials/LoginForm.cshtml", viewModel);
        }

        [ChildActionOnly]
        public ActionResult RegisterForm()
        {
            var viewModel = new RegisterViewModel(CurrentPage, CultureInfo.CurrentUICulture);

            // See if a return url is present or not and add it
            var returnUrl = Request["ReturnUrl"];
            if (!string.IsNullOrEmpty(returnUrl))
            {
                viewModel.ReturnUrl = returnUrl;
            }

            return PartialView("~/Views/Partials/RegisterForm.cshtml", viewModel);
        }

        [ChildActionOnly]
        public ActionResult ForgotPasswordForm()
        {
            var viewModel = new ForgotPasswordViewModel(CurrentPage, CultureInfo.CurrentUICulture);
            return PartialView("~/Views/Partials/ForgotPasswordForm.cshtml", viewModel);
        }

        /// <summary>
        /// Log on post
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns>A <see cref="ActionResult"/></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOn(LoginViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ISiteMember user = new DefaultSiteMember();
                    var message = new PayloadResult();
                    if (Members.Login(model.UserName, model.Password))
                    {
                        // Set last login date
                        user = MembershipHelper.MapMember(Services.MemberService.GetByUsername(model.UserName));
                        if (user.IsApproved && !user.IsLockedOut)
                        {
                            if (Url.IsLocalUrl(model.ReturnUrl)
                                && model.ReturnUrl.Length > 1
                                && model.ReturnUrl.StartsWith("/")
                                && !model.ReturnUrl.StartsWith("//")
                                && !model.ReturnUrl.StartsWith("/\\"))
                            {
                                return Redirect(model.ReturnUrl);
                            }

                            message.SetMessage(Umbraco.GetDictionaryValue("Members.LoggedInMessage"));
                            message.SetMessageType(GenericMessages.Success);

                            return RedirectToWellaStartPage();
                        }
                    }

                    // Only show if we have something to actually show to the user
                    if (!string.IsNullOrEmpty(message.Message))
                    {
                        ShowMessage(message);
                    }
                    else
                    {
                        if (user.IsApproved)
                        {
                            ModelState.AddModelError(string.Empty, Umbraco.GetDictionaryValue("Members.Errors.NotApproved"));
                        }
                        else if (user.IsLockedOut)
                        {
                            ModelState.AddModelError(string.Empty, Umbraco.GetDictionaryValue("Members.Errors.LockedOut"));
                        }
                        else
                        {
                            ModelState.AddModelError(string.Empty, Umbraco.GetDictionaryValue("Members.Errors.LogonGeneric"));
                        }
                    }
                }
                else
                {
                    ModelState.AddModelError(string.Empty, Umbraco.GetDictionaryValue("Members.Errors.LogonGeneric"));
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error<IHtmlString>("Error when user logging in", ex);
            }

            return CurrentUmbracoPage();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ForgotPassword(ForgotPasswordViewModel model)
        {
            var changePasswordSucceeded = true;
            var newPassword = MembershipHelper.GeneratePassword();

            try
            {
                if (ModelState.IsValid)
                {
                    var currentUser = MembershipHelper.MapMember(Services.MemberService.GetByEmail(model.EmailAddress));
                    if (currentUser != null)
                    {
                        changePasswordSucceeded = MembershipHelper.ResetPassword(currentUser, newPassword);
                    }
                    else
                    {
                        changePasswordSucceeded = false;
                    }
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error<LoginRegisterController>(string.Format("Error resetting password for {0}", model.EmailAddress), ex);
                changePasswordSucceeded = false;
            }

            if (changePasswordSucceeded)
            {
                // ToDo: Send email.
                //var sb = new StringBuilder();
                //sb.AppendFormat("<p>{0}</p>", Umbraco.GetDictionaryValue("Members.ForgotPassword.Email"));
                //sb.AppendFormat("<p><b>{0}</b></p>", newPassword);
                //var email = new Email
                //{
                //    EmailFrom = Constants.DefaultEmailAddress,
                //    EmailTo = currentUser.Email,
                //    NameTo = currentUser.UserName,
                //    Subject = Umbraco.GetDictionaryValue("Members.ForgotPassword.Subject")
                //};
                //email.Body = ServiceFactory.EmailService.EmailTemplate(email.NameTo, sb.ToString());
                //ServiceFactory.EmailService.SendMail(email);

                // We use temp data because we are doing a redirect
                var payload = new PayloadResult();
                payload.SetMessage(Umbraco.GetDictionaryValue("Members.ForgotPassword.SuccessMessage", "Members.ForgotPassword.SuccessMessage"));
                payload.SetMessageType(GenericMessages.Success);
                ShowMessage(new PayloadResult(Umbraco.GetDictionaryValue("Members.ForgotPassword.SuccessMessage"), GenericMessages.Success));

                return CurrentUmbracoPage();
            }

            ModelState.AddModelError(string.Empty, Umbraco.GetDictionaryValue("Members.ForgotPassword.ErrorMessage"));

            return CurrentUmbracoPage();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Register(RegisterViewModel userModel)
        {
            if (WellaContext.Settings.SuspendRegistration != true)
            {
                //if (!AppHelpers.IsValidEmail(userModel.Email))
                //{
                //    return CurrentUmbracoPage();
                //}

                // Standard Login
                userModel.LoginType = LoginType.Standard;

                // Do the register logic
                return MemberRegisterLogic(userModel);
            }

            return CurrentUmbracoPage();
        }

        public ActionResult MemberRegisterLogic(RegisterViewModel userModel)
        {
            var homeRedirect = false;
            MembershipCreateStatus createStatus;
            var member = WellaContext.MembershipHelper.Register(userModel, out createStatus);

            if (createStatus != MembershipCreateStatus.Success)
            {
                ModelState.AddModelError(string.Empty, ErrorCodeToString(createStatus));
            }
            else
            {
                var userMessage = new PayloadResult();
                var manuallyAuthoriseMembers = WellaContext.Constants.ManuallyAuthorizeNewMembers;
                var memberEmailAuthorisationNeeded = WellaContext.Constants.NewMembersMustConfirmEmail;

                // Set the view bag message here
                if (manuallyAuthoriseMembers)
                {
                    userMessage.SetMessage(Umbraco.GetDictionaryValue("Members.NowRegisteredNeedApproval"));
                    userMessage.SetMessageType(GenericMessages.Success);
                }
                else if (memberEmailAuthorisationNeeded)
                {
                    userMessage.SetMessage(Umbraco.GetDictionaryValue("Members.MemberEmailAuthorisationNeeded"));
                    userMessage.SetMessageType(GenericMessages.Success);
                }
                else
                {
                    // If not manually authorise then log the user in
                    FormsAuthentication.SetAuthCookie(member.Username, true);
                    userMessage.SetMessage(Umbraco.GetDictionaryValue("Members.NowRegistered"));
                    userMessage.SetMessageType(GenericMessages.Success);
                }

                // Show the message
                ShowMessage(userMessage);

                if (!manuallyAuthoriseMembers && !memberEmailAuthorisationNeeded)
                {
                    homeRedirect = true;
                }

                try
                {
                    // Only send the email if the admin is not manually authorising emails or it's pointless
                    SendEmailConfirmationEmail(member);

                    if (homeRedirect)
                    {
                        if (Url.IsLocalUrl(userModel.ReturnUrl) && userModel.ReturnUrl.Length > 1
                            && userModel.ReturnUrl.StartsWith("/") && !userModel.ReturnUrl.StartsWith("//")
                            && !userModel.ReturnUrl.StartsWith("/\\"))
                        {
                            return Redirect(userModel.ReturnUrl);
                        }

                        return RedirectToWellaStartPage();
                    }
                }
                catch (Exception ex)
                {
                    LogHelper.Error<LoginRegisterController>("Eror during member registering", ex);
                    FormsAuthentication.SignOut();
                    ModelState.AddModelError(string.Empty, ex.Message);
                }
            }

            if (userModel.LoginType != LoginType.Standard)
            {
                return Redirect(WellaContext.Settings.RegisterUrl);
            }

            return CurrentUmbracoPage();
        }

        public string ErrorCodeToString(MembershipCreateStatus createStatus)
        {
            // ToDo Refactor this See http://go.microsoft.com/fwlink/?LinkID=177550 for a full list
            // of status codes.
            switch (createStatus)
            {
                case MembershipCreateStatus.DuplicateUserName:
                    return Umbraco.GetDictionaryValue("Members.Errors.DuplicateUserName", "Members.Errors.DuplicateUserName");

                case MembershipCreateStatus.DuplicateEmail:
                    return Umbraco.GetDictionaryValue("Members.Errors.DuplicateEmail", "Members.Errors.DuplicateEmail");

                case MembershipCreateStatus.InvalidPassword:
                    return Umbraco.GetDictionaryValue("Members.Errors.InvalidPassword", "Members.Errors.InvalidPassword");

                case MembershipCreateStatus.InvalidEmail:
                    return Umbraco.GetDictionaryValue("Members.Errors.InvalidEmail", "Members.Errors.InvalidEmail");

                case MembershipCreateStatus.InvalidAnswer:
                    return Umbraco.GetDictionaryValue("Members.Errors.InvalidAnswer", "Members.Errors.InvalidAnswer");

                case MembershipCreateStatus.InvalidQuestion:
                    return Umbraco.GetDictionaryValue("Members.Errors.InvalidQuestion", "Members.Errors.InvalidQuestion");

                case MembershipCreateStatus.InvalidUserName:
                    return Umbraco.GetDictionaryValue("Members.Errors.InvalidUserName", "Members.Errors.InvalidUserName");

                case MembershipCreateStatus.ProviderError:
                    return Umbraco.GetDictionaryValue("Members.Errors.ProviderError", "Members.Errors.ProviderError");

                case MembershipCreateStatus.UserRejected:
                    return Umbraco.GetDictionaryValue("Members.Errors.UserRejected", "Members.Errors.UserRejected");

                default:
                    return Umbraco.GetDictionaryValue("Members.Errors.Unknown", "Members.Errors.Unknown");
            }
        }

        private void SendEmailConfirmationEmail(IMember userToSave)
        {
            var manuallyAuthoriseMembers = WellaContext.Constants.ManuallyAuthorizeNewMembers;
            var memberEmailAuthorisationNeeded = WellaContext.Constants.NewMembersMustConfirmEmail;
            if (manuallyAuthoriseMembers == false && memberEmailAuthorisationNeeded)
            {
                if (!string.IsNullOrEmpty(userToSave.Email))
                {
                    // ToDo SEND AUTHORISATION EMAIL
                    //var sb = new StringBuilder();
                    //var confirmationLink = string.Concat(HttpContext.Request.GetCurrentDomain(), Urls.GenerateUrl(Urls.UrlType.EmailConfirmation), "?id=", userToSave.Id);
                    //sb.AppendFormat("<p>{0}</p>", string.Format(Umbraco.GetDictionaryValue("Members.MemberEmailAuthorisation.EmailBody"), " ", string.Format("<p><a href=\"{0}\">{0}</a></p>", confirmationLink)));

                    //var email = new Email
                    //{
                    //    EmailFrom = Constants.NotificationReplyEmailAddress,
                    //    EmailTo = userToSave.Email,
                    //    NameTo = userToSave.Username,
                    //    Subject = Umbraco.GetDictionaryValue("Members.MemberEmailAuthorisation.Subject")
                    //};

                    //email.Body = ServiceFactory.EmailService.EmailTemplate(email.NameTo, sb.ToString());
                    //ServiceFactory.EmailService.SendMail(email);

                    // ADD COOKIE We add a cookie for 7 days, which will display the resend email
                    // confirmation button This cookie is removed when they click the confirmation
                    // link and they are logged in
                    var myCookie = new HttpCookie(WellaContext.Constants.MembersEmailConfirmationCookieName)
                    {
                        Value = string.Format("{0}#{1}", userToSave.Id, userToSave.Username),
                        Expires = DateTime.Now.AddDays(7)
                    };

                    // Add the cookie.
                    Response.Cookies.Add(myCookie);
                }
            }
        }

        /// <summary>
        /// Email confirmation page from the link in the users email
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult EmailConfirmation(int id)
        {
            // Check confirmation
            var user = MembershipHelper.MapMember(Services.MemberService.GetById(id));
            if (user != null)
            {
                // Set the user to active
                user.IsApproved = true;

                // Delete Cookie and log them in if this cookie is present
                if (Request.Cookies[WellaContext.Constants.MembersEmailConfirmationCookieName] != null)
                {
                    var myCookie = new HttpCookie(WellaContext.Constants.MembersEmailConfirmationCookieName)
                    {
                        Expires = DateTime.Now.AddDays(-1)
                    };
                    Response.Cookies.Add(myCookie);

                    // Login code
                    FormsAuthentication.SetAuthCookie(user.UserName, false);
                }

                // Show a new message We use temp data because we are doing a redirect
                ShowMessage(new PayloadResult(WellaContext.Settings.MembersApprovedMessage, GenericMessages.Success));
            }

            return RedirectToWellaStartPage();
        }
    }
}
