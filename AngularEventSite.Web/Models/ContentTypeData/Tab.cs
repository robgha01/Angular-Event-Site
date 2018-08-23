namespace AngularEventSite.Web.Models.ContentTypeData
{
    using BlueLeet.UCodeFirst;

    /// <summary>
    /// All <c>EnumName</c> with #NameTab maps to a <c>Umbraco</c> dictionary.
    /// </summary>
    /// <remarks>
    /// You need to re save the document type for the dictionary translation to kick in. (after the key is created)
    /// </remarks>
    public enum Tab
    {
        [EnumName("#FileTab")]
        File,

        [EnumName("#ImageTab")]
        Image,

        [EnumName("#ContentTab")]
        Content,

        [EnumName("#PushTab")]
        Push,

        [EnumName("#ModuleContentTab")]
        ModuleContent,

        [EnumName("#PageTab")]
        Page,

        [EnumName("#SeoTab")]
        Seo,

        [EnumName("#SitemapXmlTab")]
        SitemapXml,

        [EnumName("#NavigationTab")]
        Navigation,

        [EnumName("#SiteTab")]
        Site,

        [EnumName("#MailSettingsTab")]
        MailSettings,

        [EnumName("#PackageTab")]
        Package,

        [EnumName("#FooterTab")]
        Footer,

        [EnumName("#GlobalsTab")]
        Globals,

        [EnumName("#AppSectionSettingsTab")]
        AppSectionSettings,

        [EnumName("#MembershipProfileTab")]
        MembershipProfile,

        [EnumName("#SettingsTab")]
        Settings
    }

    /// <summary>
    /// All <c>EnumName</c> with #NameTab maps to a <c>Umbraco</c> dictionary.
    /// </summary>
    /// <remarks>
    /// You need to re save the document type for the dictionary translation to kick in. (after the key is created)
    /// </remarks>
    public enum CleanServiceTab
    {
        [EnumName("#MoveInMoveOut")]
        MoveInMoveOut,

        [EnumName("#Window")]
        Window,

        [EnumName("#Home")]
        Home
    }
}