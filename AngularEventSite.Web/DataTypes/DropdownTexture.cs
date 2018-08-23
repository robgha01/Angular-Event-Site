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
    [DataType("Umbraco.DropDown", DataType.DropdownTexture, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class DropdownTexture : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DropdownTexture"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public DropdownTexture(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            var lengths = new[] { "Textured", "Smooth", "Volume" };

            for (var i = 0; i < lengths.Length; i++)
            {
                SetPrevalue(i.ToString(), lengths[i]);
            }
        }
    }
}