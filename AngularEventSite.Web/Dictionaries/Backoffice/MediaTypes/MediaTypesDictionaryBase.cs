namespace AngularEventSite.Web.Dictionaries.Backoffice.MediaTypes
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    /// <summary>
    /// The MemberTypesDictionaryBase dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class MediaTypesDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MediaTypesDictionaryBase"/> class.
        /// </summary>
        public MediaTypesDictionaryBase()
        {
            ParentKey = Constants.BackofficeDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "MediaTypes";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}