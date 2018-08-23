namespace AngularEventSite.Web.Entities.Payloads
{
    using System.Runtime.Serialization;
    using System.Web.Http.ModelBinding;

    using BlueLeet.Common.Web.ModelBinding;

    /// <summary>
    /// Describes a state payload for courses. 
    /// </summary>
    [ModelBinder(typeof(AttemptingModelBinder))]
    [DataContract]
    public class EventStatePayload
    {
        ///// <summary>
        ///// Gets or sets the open spots.
        ///// </summary>
        //[DataMember]
        //public int OpenSpots { get; set; }

        ///// <summary>
        ///// Gets or sets the total spots.
        ///// </summary>
        //[DataMember]
        //public int TotalSpots { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether can unregister.
        /// </summary>
        [DataMember]
        public bool CanUnregister { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether course closed.
        /// </summary>
        [DataMember]
        public bool Closed { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether the member is participating.
        /// </summary>
        [DataMember]
        public bool IsParticipating { get; set; }
    }
}