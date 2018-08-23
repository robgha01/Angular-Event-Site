namespace AngularEventSite.Web.ViewModels
{
    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Models;

    public class NotifyEventStartEmailViewModel : NotifyEventEmailViewModel
    {
        public NotifyEventStartEmailViewModel(EventActivityPageModel activityPageModel, ISiteMember member, EventPageModel eventPageModel) : base(member, eventPageModel)
        {
            ActivityPageModel = activityPageModel;
        }

        public EventActivityPageModel ActivityPageModel { get; }
    }
}