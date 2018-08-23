namespace AngularEventSite.Web.SiteNavigator
{
    using System.Collections.Generic;
    using System.Linq;

    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.SiteNavigator.Abstraction;

    using Umbraco.Web;

    /// <summary>
    /// The u code first menu item.
    /// </summary>
    public class UCodeFirstMenuItem : MenuItemBase<UCodeFirstContentTypeBase>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UCodeFirstMenuItem"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        internal UCodeFirstMenuItem(UCodeFirstContentTypeBase content)
            : base(content)
        {
            Name = content.Name;
            Url = content.Url;
            IsVisible = content.Content.IsVisible();
            Parent = content.Parent == null ? null : new UCodeFirstMenuItem(content.Parent);
            Children = content.Children.Select(x => new UCodeFirstMenuItem(x));
        }

        /// <inheritdoc />
        public override IEnumerable<IMenuItem<UCodeFirstContentTypeBase>> Children { get; }

        /// <inheritdoc />
        public override bool IsVisible { get; }

        /// <inheritdoc />
        public override string Name { get; }

        /// <inheritdoc />
        public override IMenuItem<UCodeFirstContentTypeBase> Parent { get; }

        /// <inheritdoc />
        public override string Url { get; }

        /// <inheritdoc />
        public override bool Equals(IMenuItem<UCodeFirstContentTypeBase> other)
        {
            if (other == null)
            {
                return false;
            }

            var content = (UCodeFirstMenuItem)other;
            return Content.Equals(content.Content);
        }
    }
}