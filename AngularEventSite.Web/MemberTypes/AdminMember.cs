namespace AngularEventSite.Web.MemberTypes
{
    using BlueLeet.UCodeFirst.MemberTypes;

    /// <summary>
    /// The admin member.
    /// </summary>
    [MemberType(DisplayName = "#AdminMemberType name", Description = "#AdminMemberType description")]
    public class AdminMember : SiteMember
    {
        // [MemberProperty(UmbracoDefaultDataType.TrueFalse, Tab.MembershipProfile, DisplayName = "#GetNotifications name", Description = "#GetNotifications description", MemberCanEdit = true)]
        // [UsedImplicitly]
        // public virtual bool GetNotifications { get; set; }
    }
}