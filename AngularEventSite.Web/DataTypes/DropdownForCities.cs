namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;

    using BlueLeet.UCodeFirst.DataTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The dropdown for cities.
    /// </summary>
    [DataType("Umbraco.DropDown", DataType.DropdownForCities, DataTypeDatabaseType.Nvarchar)]
    [UsedImplicitly]
    public class DropdownForCities : DataTypeBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DropdownForCities"/> class.
        /// </summary>
        /// <param name="existingPreValues">
        /// The existing pre values.
        /// </param>
        public DropdownForCities(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            var cities = new[]
                             {
                                 "Borlänge", "Falun", "Gällivare", "Göteborg", "Halmstad", "Jönköping", "Jönköping",
                                 "Kalmar", "Karlskrona", "Karlstad", "Luleå", "Malmö", "Nässjö", "Skövde",
                                 "Stockholm", "Sundsvall", "Trollhättan", "Umeå", "Växjö", "Östersund"
                             };

            for (var i = 0; i < cities.Length; i++)
            {
                SetPrevalue(i.ToString(), cities[i]);
            }
        }
    }
}