namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;

    using BlueLeet.UCodeFirst.DataTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The dropdown hair length.
    /// </summary>
    [DataType("Umbraco.DropDown", DataType.DropdownHairLength, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class DropdownHairLength : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DropdownHairLength"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public DropdownHairLength(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            var lengths = new[] { "Korthårig", "Käklängd", "Axellängd", "Nedanför axlarna" };

            for (var i = 0; i < lengths.Length; i++)
            {
                SetPrevalue(i.ToString(), lengths[i]);
            }
        }
    }
}