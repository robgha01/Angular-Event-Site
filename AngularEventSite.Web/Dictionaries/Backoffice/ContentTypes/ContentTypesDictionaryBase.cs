namespace AngularEventSite.Web.Dictionaries.Backoffice.ContentTypes
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    /// <summary>
    /// The BaseContentModelDictionaryBase dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class BaseContentModelDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BaseContentModelDictionaryBase"/> class.
        /// </summary>
        public BaseContentModelDictionaryBase()
        {
            ParentKey = Constants.BackofficeDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "ContentTypes";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}