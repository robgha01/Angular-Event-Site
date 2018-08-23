namespace AngularEventSite.Web.MacroTypes
{
    using BlueLeet.UCodeFirst.Macros;

    [MacroType(DisplayName = "Jumbotron", UseInEditor = true, RenderContent = true)]
    public class JumbotronMacroType : UCodeFirstMacroTypeBase
    {
        [MacroProperty(MacroParameterType.Textbox)]
        public virtual string Heading { get; set; }

        [MacroProperty(MacroParameterType.Textarea)]
        public virtual string Text { get; set; }
    }
}