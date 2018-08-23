// --------------------------------------------------------------------------------------------------------------------
// <copyright file="SearchPageGridEmptyResultEditorNotes.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the SearchPageGridEmptyResultEditorNotes type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace AngularEventSite.Web.DataTypes.Notes
{
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;

    using BlueLeet.UCodeFirst.DataTypes;

    using JetBrains.Annotations;
    
    using Umbraco.Core.Models;

    [SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1600:ElementsMustBeDocumented", Justification = "Reviewed. Suppression is OK here.")]
    [DataType("tooorangey.EditorNotes", DataTypeDatabaseType.Nvarchar)]
    [UsedImplicitly]
    public class SearchPageGridEmptyResultEditorNotes : EditorNotesDataTypeBase
    {
        public SearchPageGridEmptyResultEditorNotes(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            SetNotesFromEmbededMarkdown("AngularEventSite.Web.Markdowns.SearchPageGridEmptyResult.md");
        }
    }
}