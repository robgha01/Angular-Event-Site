// --------------------------------------------------------------------------------------------------------------------
// <copyright file="FileExcelType.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   The member image type.
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
    /// Defines a file excel type.
    /// </summary>
    [MediaType(
        Icon = "icon-fa-file-excel-o",
        IconColor = "color-green",
        DisplayName = "#FileExcelType name",
        Description = "#FileExcelType description")]
    public class FileExcelType : UCodeFirstMediaTypeBase
    {
        /// <inheritdoc />
        public FileExcelType(IPublishedContent content)
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
