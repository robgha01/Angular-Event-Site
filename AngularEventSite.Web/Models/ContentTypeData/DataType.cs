namespace AngularEventSite.Web.Models.ContentTypeData
{
    using BlueLeet.UCodeFirst;

    public enum DataType
    {
        [EnumName("Dropdown with numbers")]
        DropdownWithNumbers,

        [EnumName("Dropdown for cities")]
        DropdownForCities,

        [EnumName("Richtext editor")]
        RichtextEditor,

        [EnumName("Mail Richtext Editor")]
        MailRichTextEditor,

        [EnumName("Social Media Editor")]
        SocialMediaEditor,

        [EnumName("Single List Editor")]
        SingleListEditor,

        [EnumName("Social Media Links Editor")]
        SocialMediaLinksEditor,

        [EnumName("Simple Module Area")]
        SimpleModuleArea,

        [EnumName("Robots Editor Notes")]
        RobotsEditorNotes,

        [EnumName("Sitemap Editor Notes")]
        SitemapEditorNotes,

        [EnumName("Implicit Explicit Toggle Box")]
        ImplicitExplicitToggleBox,

        [EnumName("Top Bottom Toggle Box")]
        TopBottomToggleBox,

        [EnumName("On Off Toggle Box")]
        OnOffToggleBox,

        [EnumName("One To Hundred Slider")]
        OneToHundredSlider,

        [EnumName("Display Time Slider")]
        DisplayTimeSlider,

        [EnumName("Dropdown Hair Color")]
        DropdownHairColor,

        [EnumName("Dropdown Tonal Colors")]
        DropdownTonalColors,

        [EnumName("Dropdown Tonal Length")]
        DropdownHairLength,

        [EnumName("Dropdown Color Type")]
        DropdownColorType,

        [EnumName("Dropdown Texture")]
        DropdownTexture,

        [EnumName("Grid Front Page")]
        GridFrontPage,

        [EnumName("Layout")]
        DropdownLayout,

        [EnumName("Form Editor")]
        FormEditor
    }
}