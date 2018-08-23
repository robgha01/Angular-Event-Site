namespace AngularEventSite.Web.SiteNavigator.Abstraction
{
    using System;
    using System.Collections.Generic;

    public interface IMenuItem<TAdaptedEntity> : IEquatable<IMenuItem<TAdaptedEntity>>
    {
        IEnumerable<IMenuItem<TAdaptedEntity>> Children { get; }

        TAdaptedEntity Content { get; }

        bool IsActive { get; }

        bool IsVisible { get; }

        string Name { get; }

        IMenuItem<TAdaptedEntity> Parent { get; }

        string Url { get; }
    }
}