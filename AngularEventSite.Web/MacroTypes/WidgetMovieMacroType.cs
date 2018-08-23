namespace AngularEventSite.Web.MacroTypes
{
    using BlueLeet.UCodeFirst.Macros;

    using Umbraco.Core.Models;

    [MacroType(DisplayName = "Widget Movie", UseInEditor = true, RenderContent = true)]
    public class WidgetMovieMacroType : UCodeFirstMacroTypeBase
    {
        [MacroProperty(MacroParameterType.TrueFalse, DisplayName = "Auto Play")]
        public virtual bool AutoPlay { get; set; }

        [MacroProperty(MacroParameterType.TrueFalse, DisplayName = "Controls")]
        public virtual bool Controls { get; set; }

        [MacroProperty(MacroParameterType.Textbox, DisplayName = "Optional: Heading")]
        public virtual string Heading { get; set; }

        [MacroProperty(MacroParameterType.TrueFalse, DisplayName = "Loop")]
        public virtual bool Loop { get; set; }

        [MacroProperty(MacroParameterType.SingleMediaPicker, DisplayName = "Source")]
        public virtual IPublishedContent Source { get; set; }

        [MacroProperty(MacroParameterType.Textarea, DisplayName = "Optional: Text")]
        public virtual string Text { get; set; }
    }
}