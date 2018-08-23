// --------------------------------------------------------------------------------------------------------------------
// <copyright file="EditorNotesDataTypeBase.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the EditorNotesDataTypeBase type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace AngularEventSite.Web.DataTypes.Notes
{
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.IO;
    using System.Reflection;

    using BlueLeet.UCodeFirst.DataTypes;

    using JetBrains.Annotations;

    using Markdig;

    using Umbraco.Core.Models;

    [SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1600:ElementsMustBeDocumented", Justification = "Reviewed. Suppression is OK here.")]
    [UsedImplicitly]
    public abstract class EditorNotesDataTypeBase : DataTypeBase
    {
        protected EditorNotesDataTypeBase(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
            // Set the default pre values.
            SetPrevalue("editorNotes", string.Empty, false);
            SetPrevalue("noteRenderMode", RenderMode.Html.ToString(), false);
        }

        protected enum RenderMode
        {
            /// <summary>
            /// Render as ht.
            /// </summary>
            Html,

            /// <summary>
            /// The collapsible.
            /// </summary>
            Collapsible,

            /// <summary>
            /// The sliding pane.
            /// </summary>
            SlidingPane
        }

        [UsedImplicitly]
        protected void SetNotesFromEmbededMarkdown(string embededResourceNamespace)
        {
            // ReSharper disable once AssignNullToNotNullAttribute
            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(embededResourceNamespace))
            using (TextReader tr = new StreamReader(stream))
            {
                string markdownText = tr.ReadToEnd();
                var pipeline = new MarkdownPipelineBuilder().UseAdvancedExtensions().Build();
                var editorNotes = Markdown.ToHtml(markdownText, pipeline);
                SetPrevalue("editorNotes", editorNotes);
            }
        }

        protected void SetRenderMode(RenderMode mode)
        {
            SetPrevalue("noteRenderMode", mode.ToString());
        }
    }
}
