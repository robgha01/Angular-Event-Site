// --------------------------------------------------------------------------------------------------------------------
// <copyright file="FileZipType.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines a file zip type.
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
    /// Defines a file zip type.
    /// </summary>
    [MediaType(
        Icon = "icon-fa-file-zip-o",
        DisplayName = "#FileZipType name",
        Description = "#FileZipType description")]
    public class FileZipType : UCodeFirstMediaTypeBase
    {
        /// <inheritdoc />
        public FileZipType(IPublishedContent content)
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
