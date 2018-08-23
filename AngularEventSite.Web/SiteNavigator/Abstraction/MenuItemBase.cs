namespace AngularEventSite.Web.SiteNavigator.Abstraction
{
    using System;
    using System.Collections.Generic;
    using System.Web.Mvc;

    /// <summary>
    /// The u code first menu item.
    /// </summary>
    public abstract class MenuItemBase<TAdaptedEntity> : IMenuItem<TAdaptedEntity>
    {
        private Lazy<bool> isActive;

        /// <summary>
        /// Initializes a new instance of the <see cref="MenuItemBase{TAdaptedEntity}"/> class.
        /// </summary>
        internal MenuItemBase(TAdaptedEntity entity)
        {
            Content = entity;
            isActive = new Lazy<bool>(IsActiveValueFactory);
        }

        /// <inheritdoc />
        public abstract IEnumerable<IMenuItem<TAdaptedEntity>> Children { get; }

        public TAdaptedEntity Content { get; }

        /// <inheritdoc />
        public bool IsActive
        {
            get
            {
                return isActive.Value;
            }
        }

        /// <inheritdoc />
        public abstract bool IsVisible { get; }

        /// <inheritdoc />
        public abstract string Name { get; }

        /// <inheritdoc />
        public abstract IMenuItem<TAdaptedEntity> Parent { get; }

        /// <inheritdoc />
        public abstract string Url { get; }

        /// <inheritdoc />
        public abstract bool Equals(IMenuItem<TAdaptedEntity> other);

        private bool IsActiveValueFactory()
        {
            var context = DependencyResolver.Current.GetService<INavigatorContext<TAdaptedEntity>>();
            var current = context.CurrentPage;
            if (current.Equals(this))
            {
                return true;
            }

            while (current.Parent != null)
            {
                current = current.Parent;
                if (current.Equals(this))
                {
                    return true;
                }
            }

            return false;
        }
    }
}