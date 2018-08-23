namespace AngularEventSite.Web.Dictionaries.Backoffice.MemberTypes
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using AngularEventSite.Web.Dictionaries.Backoffice.ContentTypes;

    using JetBrains.Annotations;

    /// <summary>
    /// The MemberTypesDictionaryBase dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class MemberTypesDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BaseContentModelDictionaryBase"/> class.
        /// </summary>
        public MemberTypesDictionaryBase()
        {
            ParentKey = Constants.BackofficeDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "MemberTypes";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}