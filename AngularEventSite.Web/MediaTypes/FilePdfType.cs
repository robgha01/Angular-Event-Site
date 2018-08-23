// --------------------------------------------------------------------------------------------------------------------
// <copyright file="FilePdfType.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines a file pdf type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace AngularEventSite.Web.MediaTypes
{
    using System.Runtime.Serialization;

    using BlueLeet.UCodeFirst.ContentTypes;
    using BlueLeet.UCodeFirst.MediaTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using Umbraco.Core.Models;

    /// <summary>
    /// Defines a file pdf type.
    /// </summary>
    [MediaType(
        Icon = "icon-fa-file-pdf-o",
        IconColor = "color-red",
        DisplayName = "#FilePdfType name",
        Description = "#FilePdfType description")]
    public class FilePdfType : UCodeFirstMediaTypeBase
    {
        /// <inheritdoc />
        public FilePdfType(IPublishedContent content)
            : base(content)
        {
        }

        [DataMember(Name = "Upload file")]
        [MediaTypeProperty(UmbracoDefaultDataType.Upload, Tab.File, DisplayName = "#UmbracoFile name", Description = "#UmbracoFile description")]
        public virtual string UmbracoFile { get; set; }

        [MediaTypeProperty(UmbracoDefaultDataType.Label, Tab.File, DisplayName = "#UmbracoBytes name", Description = "#UmbracoBytes description")]
        public virtual string UmbracoBytes { get; set; }

        [MediaTypeProperty(UmbracoDefaultDataType.Label, Tab.File, DisplayName = "#UmbracoExtension name", Description = "#UmbracoExtension description")]
        public virtual string UmbracoExtension { get; set; }
    }
}
