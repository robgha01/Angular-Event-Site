namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;

    using BlueLeet.UCodeFirst.DataTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core;
    using Umbraco.Core.Models;

    [SuppressMessage(
        "StyleCop.CSharp.DocumentationRules",
        "SA1600:ElementsMustBeDocumented",
        Justification = "Reviewed. Suppression is OK here.")]
    [DataType(Constants.PropertyEditors.SliderAlias, DataType.OneToHundredSlider, DataTypeDatabaseType.Integer)]
    [UsedImplicitly]
    public class OneToHundredSlider : DataTypeBase
    {
        public OneToHundredSlider(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            SetPrevalue("enableRange", "0");
            SetPrevalue("initVal1", "0");
            SetPrevalue("initVal2", "0");
            SetPrevalue("maxVal", "100");
            SetPrevalue("minVal", "0");
            SetPrevalue("orientation", "horizontal");
            SetPrevalue("step", "1");
        }
    }
}