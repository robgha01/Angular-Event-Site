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
    [DataType(Constants.PropertyEditors.SliderAlias, DataType.DisplayTimeSlider, DataTypeDatabaseType.Integer)]
    [UsedImplicitly]
    public class DisplayTimeSlider : DataTypeBase
    {
        public DisplayTimeSlider(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            SetPrevalue("enableRange", "0");
            SetPrevalue("initVal1", "15");
            SetPrevalue("initVal2", "0");
            SetPrevalue("maxVal", "120");
            SetPrevalue("minVal", "1");
            SetPrevalue("orientation", "horizontal");
            SetPrevalue("step", "1");
        }
    }
}