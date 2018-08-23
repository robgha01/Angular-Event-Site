namespace AngularEventSite.Web.Dictionaries.Frontend.Widgets
{
    using BlueLeet.UCodeFirst.Dictionaries;

    using JetBrains.Annotations;

    /// <summary>
    /// The ComponentsDictionaryBase dictionary base.
    /// </summary>
    [UsedImplicitly]
    public class WidgetsDictionaryBase : DictionaryBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="WidgetsDictionaryBase"/> class.
        /// </summary>
        public WidgetsDictionaryBase()
        {
            ParentKey = Constants.FrontendDictionaryName;
        }

        /// <inheritdoc />
        public override string Resource { get; } = "Widgets";

        /// <inheritdoc />
        public override bool UseResourceName { get; } = true;
    }
}