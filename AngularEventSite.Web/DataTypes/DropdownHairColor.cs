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
    [DataType("Umbraco.DropDown", DataType.DropdownHairColor, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class DropdownHairColor : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DropdownHairColor"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public DropdownHairColor(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            var colors = new[] { "Blond", "Brunett", "Svart", "Röd", "Grå", "Annat" };

            for (var i = 0; i < colors.Length; i++)
            {
                SetPrevalue(i.ToString(), colors[i]);
            }
        }
    }
}