namespace AngularEventSite.Web.Dictionaries.Frontend.ValidationMessages
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    /// <summary>
    /// The ValidationMessagesDictionaryBase dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class ValidationMessagesDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ValidationMessagesDictionaryBase"/> class.
        /// </summary>
        public ValidationMessagesDictionaryBase()
        {
            ParentKey = Constants.FrontendDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "ValidationMessages";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}