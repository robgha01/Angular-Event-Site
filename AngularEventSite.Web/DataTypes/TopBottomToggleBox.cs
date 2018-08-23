namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;

    using BlueLeet.UCodeFirst.DataTypes;
    using BlueLeet.UComponents.Core;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    [SuppressMessage(
        "StyleCop.CSharp.DocumentationRules",
        "SA1600:ElementsMustBeDocumented",
        Justification = "Reviewed. Suppression is OK here.")]
    [DataType(
        UComponentsConstants.PropertyEditors.ToggleBoxAlias,
        DataType.TopBottomToggleBox,
        DataTypeDatabaseType.Integer)]
    [UsedImplicitly]
    public class TopBottomToggleBox : DataTypeBase
    {
        public TopBottomToggleBox(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            SetPrevalue("default", "1");
            SetPrevalue("offlabel", "Bottom");
            SetPrevalue("onlabel", "Top");
        }
    }
}