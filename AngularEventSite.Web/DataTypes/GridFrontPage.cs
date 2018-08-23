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
    [DataType("Umbraco.Grid", DataType.GridFrontPage, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class GridFrontPage : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GridFrontPage"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public GridFrontPage(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
        }
    }
}