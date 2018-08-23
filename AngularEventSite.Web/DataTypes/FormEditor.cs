namespace AngularEventSite.Web.DataTypes
{
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;

    using BlueLeet.UCodeFirst.DataTypes;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    [SuppressMessage(
        "StyleCop.CSharp.DocumentationRules",
        "SA1600:ElementsMustBeDocumented",
        Justification = "Reviewed. Suppression is OK here.")]
    [DataType("FormEditor.Form", DataType.FormEditor, DataTypeDatabaseType.Ntext)]
    [UsedImplicitly]
    public class FormEditor : DataTypeBase
    {
        public FormEditor(IDictionary<string, PreValue> existingPreValues)
            : base(existingPreValues)
        {
        }
    }
}