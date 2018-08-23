namespace AngularEventSite.Web.Controllers.Backoffice
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;

    using BlueLeet.UCodeFirst.Helpers.Abstraction;

    using AngularEventSite.Web.Abstraction;

    using Umbraco.Core.Models;

    /// <summary>
    /// The data type controller.
    /// </summary>
    public class DataTypeController : BaseApiController
    {
        /// <inheritdoc />
        public DataTypeController(
            IContextService contextService,
            IMembershipService membershipService,
            IUCodeFirstHelper codeFirstHelper)
            : base(contextService, membershipService, codeFirstHelper)
        {
        }

        /// <summary>
        /// Get <see cref="PreValue.Value"/>s by <paramref name="id"/> and <paramref name="propertyAlias"/>.
        /// </summary>
        /// <param name="id">
        /// The id.
        /// </param>
        /// <param name="propertyAlias">
        /// The property alias.
        /// </param>
        /// <returns>
        /// A <see cref="IEnumerable{T}"/> with <see cref="PreValue.Value"/>.
        /// </returns>
        [HttpPost]
        public IHttpActionResult GetPreValuesPost(int id, string propertyAlias)
        {
            var result = new List<string>();
            Property prop;

            var media = Services.MediaService.GetById(id);
            if (media != null)
            {
                prop = media.Properties[propertyAlias];
            }
            else
            {
                var content = Services.ContentService.GetById(id);
                prop = content.Properties[propertyAlias];
            }

            var preValues =
                Umbraco.DataTypeService.GetPreValuesCollectionByDataTypeId(prop.PropertyType.DataTypeDefinitionId);
            foreach (var value in preValues.FormatAsDictionary())
            {
                result.Add(value.Value.Value);
            }

            return Json(result);
        }

        /// <summary>
        /// Get <see cref="PreValue.Value"/>s by <paramref name="alias"/> and <paramref name="propertyAlias"/>.
        /// </summary>
        /// <param name="alias">
        /// The entity alias.
        /// </param>
        /// <param name="propertyAlias">
        /// The property alias.
        /// </param>
        /// <returns>
        /// A <see cref="IEnumerable{String}"/> with <see cref="PreValue.Value"/>.
        /// </returns>
        [HttpPost]
        public IHttpActionResult GetPreValuesPost(string alias, string propertyAlias)
        {
            var result = new List<string>();
            Property prop;

            var media = Services.MediaService.GetDescendants(-1).FirstOrDefault(
                x => x.ContentType.Alias.Equals(alias, StringComparison.OrdinalIgnoreCase));
            if (media != null)
            {
                prop = media.Properties[propertyAlias];
            }
            else
            {
                var content = Services.ContentService.GetDescendants(-1).First(
                    x => x.ContentType.Alias.Equals(alias, StringComparison.OrdinalIgnoreCase));
                prop = content.Properties[propertyAlias];
            }

            var preValues =
                Umbraco.DataTypeService.GetPreValuesCollectionByDataTypeId(prop.PropertyType.DataTypeDefinitionId);
            foreach (var value in preValues.FormatAsDictionary())
            {
                result.Add(value.Value.Value);
            }

            return Json(result);
        }
    }
}