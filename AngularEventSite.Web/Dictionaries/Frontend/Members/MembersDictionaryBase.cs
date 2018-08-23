namespace AngularEventSite.Web.Dictionaries.Frontend.Members
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    /// <summary>
    /// The MembersDictionaryBase dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class MembersDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MembersDictionaryBase"/> class.
        /// </summary>
        public MembersDictionaryBase()
        {
            ParentKey = Constants.FrontendDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "Members";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}