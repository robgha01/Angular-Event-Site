namespace AngularEventSite.Web.ViewModels
{
    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Models;

    public class NotifyEventEmailViewModel
    {
        public NotifyEventEmailViewModel(ISiteMember member, EventPageModel eventPageModel)
        {
            Member = member;
            Event = eventPageModel;
        }

        public ISiteMember Member { get; }

        public EventPageModel Event { get; }
    }
}