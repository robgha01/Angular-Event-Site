namespace AngularEventSite.Web.Bootstrapers
{
    using System;
    using System.Linq;

    using Umbraco.Core;
    using Umbraco.Core.Events;
    using Umbraco.Core.Models.Membership;
    using Umbraco.Core.Services;

    /// <summary>
    /// Handles bootstrapping of member email events.
    /// </summary>
    public sealed class UserEventsBootstraper : ApplicationBootstrapBase
    {
        /// <inheritdoc />
        protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            UserService.SavingUser += UserServiceOnSavingUser;
            UserService.DeletingUser += UserServiceOnDeletingUser;
        }

        private void UserServiceOnDeletingUser(IUserService sender, DeleteEventArgs<IUser> deleteEventArgs)
        {
            foreach (var entity in deleteEventArgs.DeletedEntities)
            {
                var adminMember = ApplicationContext.Current.Services.MemberService.GetByEmail(entity.Email);
                ApplicationContext.Current.Services.MemberService.Delete(adminMember);
            }
        }

        private void UserServiceOnSavingUser(IUserService sender, SaveEventArgs<IUser> saveEventArgs)
        {
            foreach (var entity in saveEventArgs.SavedEntities.Where(x => x.HasIdentity))
            {
                var orginalUserData = ApplicationContext.Current.Services.UserService.GetUserById(entity.Id);
                if (orginalUserData.Email.Equals(entity.Email))
                {
                    continue;
                }

                // Email is changed update the member.
                var adminMember = ApplicationContext.Current.Services.MemberService.GetByEmail(orginalUserData.Email);
                adminMember.Email = entity.Email;
                ApplicationContext.Current.Services.MemberService.Save(adminMember);
            }
        }
    }
}
