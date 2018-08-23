namespace AngularEventSite.Web.MacroTypes
{
    using BlueLeet.UCodeFirst.Macros;

    [MacroType(DisplayName = "Contact Link", UseInEditor = true, RenderContent = true)]
    public class ContactLinkMacroType : UCodeFirstMacroTypeBase
    {
        [MacroProperty(MacroParameterType.Textbox)]
        public virtual string PhoneNumber { get; set; }

        [MacroProperty(MacroParameterType.Textbox)]
        public virtual string PhoneText { get; set; }
    }
}