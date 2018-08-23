namespace AngularEventSite.Web.MacroTypes
{
    using BlueLeet.UCodeFirst.Macros;

    using Umbraco.Core.Models;

    [MacroType(DisplayName = "Widget Vector", UseInEditor = true, RenderContent = true)]
    public class WidgetVectorMacroType : UCodeFirstMacroTypeBase
    {
        [MacroProperty(MacroParameterType.SingleMediaPicker, DisplayName = "Välj media")]
        public virtual IPublishedContent Vector { get; set; }
    }
}