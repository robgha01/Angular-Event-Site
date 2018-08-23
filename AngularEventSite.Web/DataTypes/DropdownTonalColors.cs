namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;

    using BlueLeet.UCodeFirst.DataTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The dropdown hair color.
    /// </summary>
    [DataType("Umbraco.ColorPickerAlias", DataType.DropdownTonalColors, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class DropdownTonalColors : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DropdownHairColor"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public DropdownTonalColors(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            // Neutral
            SetPrevalue("0", "DCB58A");

            // Ash
            SetPrevalue("1", "013E7D");

            // Gold
            SetPrevalue("2", "FFC526");

            // Warm
            SetPrevalue("3", "AD6626");

            // Red
            SetPrevalue("4", "C40F38");
        }
    }
}