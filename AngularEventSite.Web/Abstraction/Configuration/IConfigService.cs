namespace AngularEventSite.Web.Abstraction.Configuration
{
    /// <summary>
    /// Describes a application.
    /// </summary>
    public interface IConfigService : IAssetResolverConfiguration, IMailConfiguration, IPropConfiguration
    {
        /// <summary>
        /// Gets the new member group.
        /// </summary>
        string NewMemberGroup { get; }

        /// <summary>
        /// Gets the register url.
        /// </summary>
        string RegisterUrl { get; }
    }
}