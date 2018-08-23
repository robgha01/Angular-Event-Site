namespace AngularEventSite.Web.Dictionaries.Backoffice.Tabs
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    /// <summary>
    /// The tab dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class TabDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TabDictionaryBase"/> class.
        /// </summary>
        public TabDictionaryBase()
        {
            ParentKey = Constants.BackofficeDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "Tabs";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}