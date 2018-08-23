namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;

    using BlueLeet.UCodeFirst.DataTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The dropdown color type.
    /// </summary>
    [DataType("Umbraco.DropDown", DataType.DropdownColorType, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class DropdownColorType : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DropdownColorType"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public DropdownColorType(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            var lengths = new[] { "Couture Color", "Color.id", "Warm", "Cool", "Neutral" };

            for (var i = 0; i < lengths.Length; i++)
            {
                SetPrevalue(i.ToString(), lengths[i]);
            }
        }
    }
}