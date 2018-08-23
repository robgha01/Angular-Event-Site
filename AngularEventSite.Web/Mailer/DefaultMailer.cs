namespace AngularEventSite.Web.Mailer
{
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Net.Mail;
    using System.Runtime.CompilerServices;
    using System.Web.Mvc;
    using System.Xml;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Abstraction.Configuration;
    using AngularEventSite.Web.Entities;
    using AngularEventSite.Web.JobManager.Abstraction;
    using AngularEventSite.Web.Models;
    using AngularEventSite.Web.ViewModels;

    using Hangfire;

    using JetBrains.Annotations;

    using RazorMailer.Core;
    using RazorMailer.Core.Dispatchers;

    using Umbraco.Core.Logging;

    using IContainer = StructureMap.IContainer;

    /// <summary>
    /// The <c>angulareventsite</c> mailer.
    /// </summary>
    public class DefaultMailer : IMailer
    {
        private readonly IConfigService config;

        private readonly IJobManager jobManager;

        private readonly RazorMailerEngine mailerEngine;

        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultMailer"/> class.
        /// </summary>
        public DefaultMailer()
            : this(new SmtpDispatcher())
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultMailer"/> class.
        /// </summary>
        /// <param name="dispatcher">
        /// The dispatcher.
        /// </param>
        public DefaultMailer(IEmailDispatcher dispatcher)
        {
            var container = DependencyResolver.Current.GetService<IContainer>();
            config = container.GetInstance<IConfigService>();
            jobManager = container.GetInstance<IJobManager>();

            mailerEngine = new RazorMailerEngine(
                @"Views\EmailTemplates",
                config.DefaultEmailAddress,
                config.DefaultEmailName,
                dispatcher);
        }

        /// <inheritdoc />
        [UsedImplicitly]
        public void SendEmailConfirmation(ISiteMember member, string returnUrl)
        {
            var email = mailerEngine.Create(
                "ConfirmEmail",
                new EmailConfirmationModel(member, returnUrl),
                member.Email,
                config.MembersEmailConfirmationSubject);
            
            EnqueueMail(email);
        }

        /// <inheritdoc />
        public void SendForgotPassword(ISiteMember member, string returnUrl)
        {
            var email = mailerEngine.Create(
                "ForgotPasswordEmail",
                new ForgotPasswordEmailViewModel(member, returnUrl),
                member.Email,
                config.MembersEmailConfirmationSubject);

            EnqueueMail(email);
        }

        /// <inheritdoc />
        public void SendNotifyNewMemberRegistration(ISiteMember member)
        {
            var email = mailerEngine.Create(
                "NewMemberRegistrationNotificationEmail",
                member,
                config.NotificationEmailAddress,
                config.MembersEmailConfirmationSubject);

            EnqueueMail(email);
        }

        /// <inheritdoc />
        public void SendNotifyEventApplied(ISiteMember member, EventPageModel eventPageModel)
        {
            MailMessage email = mailerEngine.Create("NotifyEventAppliedEmail", new NotifyEventEmailViewModel(member, eventPageModel), member.Email, eventPageModel.Name);
            EnqueueMail(email);
        }
        
        /// <inheritdoc />
        public void ScheduleSendNotifyEventStart(ISiteMember member, EventPageModel eventPageModel, EventActivityPageModel activityPageModel)
        {
            if (eventPageModel.StartDate.HasValue == false)
            {
                LogHelper.Info<DefaultMailer>($"The event {eventPageModel.Id} has no start date! aborting, scheduling mail.");
                return;
            }

            MailMessage email = mailerEngine.Create("NotifyEventStart", new NotifyEventStartEmailViewModel(activityPageModel, member, eventPageModel), member.Email, eventPageModel.Name);
            ScheduleMail(email, $"{member.Id}:SendNotifyEventStart:{eventPageModel.Id}", eventPageModel.StartDate.Value.AddDays(-1));
        }

        public void RemoveScheduleNotifyEventStart(ISiteMember member, EventPageModel eventPageModel)
        {
            jobManager.RemoveJob($"{member.Id}:SendNotifyEventStart:{eventPageModel.Id}", true);
        }
        
        public void EnqueueMail(MailMessage email, [CallerMemberName]string memberName = "")
        {
            using (var stringWriter = new StringWriter())
            {
                using (var mailMessageXmlWriter = new XmlTextWriter(stringWriter))
                {
                    var mailMessage = new SerializableMailMessage { Email = email };
                    mailMessage.WriteXml(mailMessageXmlWriter);
                    mailMessageXmlWriter.Flush();

                    var data = stringWriter.ToString();
                    BackgroundJob.Enqueue(() => Send(memberName, email.To.ToString(), data));
                }
            }
        }

        public void ScheduleMail(MailMessage email, string jobId, DateTime delay, [CallerMemberName]string memberName = "")
        {
            using (var stringWriter = new StringWriter())
            {
                using (var mailMessageXmlWriter = new XmlTextWriter(stringWriter))
                {
                    var mailMessage = new SerializableMailMessage { Email = email };
                    mailMessage.WriteXml(mailMessageXmlWriter);
                    mailMessageXmlWriter.Flush();

                    var data = stringWriter.ToString();
                    jobManager.Schedule(jobId, () => Send(memberName, email.To.ToString(), data), delay);
                }
            }
        }

        [DisplayName("Sending {0} to {1}")]
        public void Send(string messageType, string to, string mailMessageString)
        {
            using (var mailMessageXmlReader = new XmlTextReader(new StringReader(mailMessageString)))
            {
                mailMessageXmlReader.Read();
                var mailMessage = new SerializableMailMessage();
                mailMessage.ReadXml(mailMessageXmlReader);
                mailerEngine.Send(mailMessage.Email);
            }
        }
    }
}