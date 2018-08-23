namespace AngularEventSite.Web.Abstraction.Configuration
{
    public interface IPropConfiguration
    {
        string PropAboutMe { get; }

        string PropAvatar { get; }

        string PropCompany { get; }

        string PropFirstName { get; }

        string PropIsEmailConfirmed { get; }

        string PropLastName { get; }

        string PropLoginType { get; }

        string PropPhone { get; }

        string PropSecurityToken { get; }

        string PropSecurityTokenExpireDate { get; }

        string PropSignature { get; }
    }
}