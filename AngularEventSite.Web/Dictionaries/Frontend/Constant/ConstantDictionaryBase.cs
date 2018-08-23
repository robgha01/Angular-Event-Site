namespace AngularEventSite.Web.Dictionaries.Frontend.Constant
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    [UsedImplicitly]
    public class ConstantDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConstantDictionaryBase"/> class.
        /// </summary>
        public ConstantDictionaryBase()
        {
            ParentKey = Constants.FrontendDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "Constant";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}