// --------------------------------------------------------------------------------------------------------------------
// <copyright file="GenericMessageViewModel.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved 
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the GenericMessageViewModel type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace SpecialistHjalpen.Web.ViewModels
{
    using System.Runtime.Serialization;

    using SpecialistHjalpen.Web.Enums;

    /// <summary>
    /// The generic message view model.
    /// </summary>
    public class GenericMessageViewModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GenericMessageViewModel"/> class.
        /// </summary>
        public GenericMessageViewModel()
        {
            MessageType = GenericMessages.Info;
        }

        /// <summary>
        /// Gets or sets the message.
        /// </summary>
        [DataMember]
        public string Message { get; set; }

        /// <summary>
        /// Gets or sets the message type.
        /// </summary>
        public GenericMessages MessageType { get; set; }
    }
}