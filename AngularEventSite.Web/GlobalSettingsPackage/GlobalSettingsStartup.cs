// --------------------------------------------------------------------------------------------------------------------
// <copyright file="GlobalSettingsStartup.cs" company="BlueLeet">
//   Copyright (C) BlueLeet - All Rights Reserved
//   Unauthorized copying of this file, via any medium is strictly prohibited
//   Proprietary and confidential
// </copyright>
// <summary>
//   The global settings startup.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace AngularEventSite.Web.GlobalSettingsPackage
{
    using Umbraco.Core;

    /// <summary>
    /// The global settings startup.
    /// </summary>
    public class GlobalSettingsStartup : ApplicationEventHandler
    {
        protected override void ApplicationStarted(UmbracoApplicationBase umbraco, ApplicationContext context)
        {
            // Gets a reference to the section (if already added)
            var section = context.Services.SectionService.GetByAlias(GlobalSettingsConstants.SectionAlias);
            if (section != null)
            {
                return;
            }

            // Add a new "global settings" section
            context.Services.SectionService.MakeNew(GlobalSettingsConstants.SectionName, GlobalSettingsConstants.SectionAlias, GlobalSettingsConstants.SectionIcon);
        }
    }
}