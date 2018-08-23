namespace AngularEventSite.Web
{
    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Enums;

    /// <summary>
    /// The view layout settings.
    /// </summary>
    public class ViewLayoutSettings : IViewLayoutSettings
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ViewLayoutSettings"/> class.
        /// </summary>
        /// <param name="layoutType">
        /// The layout type.
        /// </param>
        public ViewLayoutSettings(LayoutType layoutType)
        {
            LayoutType = layoutType;
        }

        /// <inheritdoc />
        public LayoutType LayoutType { get; }
    }
}