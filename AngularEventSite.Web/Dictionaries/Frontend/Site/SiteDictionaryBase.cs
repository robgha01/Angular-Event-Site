namespace AngularEventSite.Web.Dictionaries.Frontend.Site
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    /// <summary>
    /// The MembersDictionaryBase dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class SiteDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SiteDictionaryBase"/> class.
        /// </summary>
        public SiteDictionaryBase()
        {
            ParentKey = Constants.FrontendDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "Site";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}