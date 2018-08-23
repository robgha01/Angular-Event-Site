namespace AngularEventSite.Web.Abstraction
{
    public interface IPush
    {
        string PushHeader { get; set; }

        string PushDescription { get; set; }
    }
}