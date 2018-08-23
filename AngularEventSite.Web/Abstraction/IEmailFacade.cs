// --------------------------------------------------------------------------------------------------------------------
// <copyright file="IEmailFacade.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved 
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   Defines the IEmailFacade type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

// ReSharper disable StyleCop.SA1600
// ReSharper disable InconsistentNaming
namespace SpecialistHjalpen.Web.Abstraction
{
    using System.Net.Mail;

    /// <summary>
    /// Describes a fluent email facade.
    /// </summary>
    public interface IEmailFacade
    {
        IEmailFacade From(string fromAddress);

        IEmailFacade To(params string[] addresses);

        IEmailFacade CC(params string[] addresses);

        IEmailFacade BCC(params string[] addresses);

        IEmailFacade WithSubject(string subject);

        IEmailFacade WithBody(string body);
        
        IEmailFacade WithAttachments(params Attachment[] attachments);

        IEmailFacade WithEmbeddedResources(params LinkedResource[] resources);

        IEmailFacade WithPriority(MailPriority priority);
        
        void Send();

        void SendAsync();
    }
}