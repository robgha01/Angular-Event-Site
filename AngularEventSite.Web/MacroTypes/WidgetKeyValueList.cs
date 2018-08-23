namespace AngularEventSite.Web.MacroTypes
{
    using System.Collections.Generic;

    using BlueLeet.UCodeFirst.Macros;
    using BlueLeet.UComponents.Core;

    [MacroType(DisplayName = "Widget Key Value List", UseInEditor = true, RenderContent = true)]
    public class WidgetKeyValueList : UCodeFirstMacroTypeBase
    {
        [MacroProperty(UComponentsConstants.PropertyEditors.KeyValuePairEditorAlias)]
        public virtual List<KeyValuePair<string, string>> Content { get; set; }

        [MacroProperty(MacroParameterType.Textbox)]
        public virtual string KeyHeading { get; set; }

        [MacroProperty(MacroParameterType.Textbox)]
        public virtual string ValueHeading { get; set; }
    }
}