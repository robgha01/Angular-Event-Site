namespace AngularEventSite.Web.Abstraction
{
    using AngularEventSite.Web.Enums;

    /// <summary>
    /// Describes a set of layout settings for a view.
    /// </summary>
    public interface IViewLayoutSettings
    {
        /// <summary>
        /// Gets the layout type.
        /// </summary>
        LayoutType LayoutType { get; }
    }
}