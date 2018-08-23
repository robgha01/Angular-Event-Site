namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;

    using BlueLeet.UCodeFirst.DataTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The dropdown layout.
    /// </summary>
    [DataType("Umbraco.DropDown", DataType.DropdownLayout, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class DropdownLayout : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DropdownLayout"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public DropdownLayout(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            var lengths = new[] { "Boxed", "Full Width" };

            for (var i = 0; i < lengths.Length; i++)
            {
                SetPrevalue(i.ToString(), lengths[i]);
            }
        }
    }
}