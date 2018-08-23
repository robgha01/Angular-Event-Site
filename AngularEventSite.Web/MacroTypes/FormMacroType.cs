namespace AngularEventSite.Web.MacroTypes
{
    using BlueLeet.UCodeFirst.Macros;

    using AngularEventSite.Web.Models.Forms;

    [MacroType(DisplayName = "Form", UseInEditor = true, RenderContent = true)]
    public class FormMacroType : UCodeFirstMacroTypeBase
    {
        [MacroProperty(MacroParameterType.ContentPicker)]
        public virtual FormPageModel Form { get; set; }
    }
}