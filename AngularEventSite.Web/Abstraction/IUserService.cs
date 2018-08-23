namespace AngularEventSite.Web.Abstraction
{
    using Umbraco.Core.Models.Membership;

    public interface IUserService
    {
        IUser CurrentUser { get; }

        bool IsAuthenticated();

        void LoginAsMember();

        ISiteMember MapAsMember(IUser user);

        void SetCurrentUser(IUser user);

        bool ValidateUser(string username, string password);

        bool ValidateUser(string email);

        void EnsureAdminMemberCreated(out string username);
    }
}