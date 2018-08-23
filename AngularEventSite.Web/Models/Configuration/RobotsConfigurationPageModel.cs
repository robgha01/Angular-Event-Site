namespace AngularEventSite.Web.Models.Configuration
{
    using System.Diagnostics.CodeAnalysis;
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;
    using BlueLeet.UComponents.Core.PropertyValues;
    using BlueLeet.UComponents.UCodeFirst;

    using AngularEventSite.Web.Models.ContentTypeData;

    using JetBrains.Annotations;

    using Umbraco.Core.Models;

    /// <summary>
    /// The configuration model.
    /// </summary>
    [ContentType(DisplayName = "Robots", Description = "", Icon = BelleIconPack.Android, IconColor = IconColor.Red)]
    public class RobotsConfigurationPageModel : ConfigurationPageModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RobotsConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public RobotsConfigurationPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RobotsConfigurationPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public RobotsConfigurationPageModel(IPublishedContent content)
            : base(content)
        {
        }

        // [SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1600:ElementsMustBeDocumented", Justification = "Reviewed. Suppression is OK here.")]
        // [Property(DataType.RobotsEditorNotes, Tab.Content, DisplayName = "Description", Description = "")]
        // [UsedImplicitly]
        // public string RobotsDescription { get; set; }
        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        [Property(UComponentsDataType.Robots, Tab.Content, DisplayName = "Automatic content", Description = "")]
        [UsedImplicitly]
        public RobotsPropertyValue AutomaticContent { get; set; }

        [SuppressMessage(
            "StyleCop.CSharp.DocumentationRules",
            "SA1600:ElementsMustBeDocumented",
            Justification = "Reviewed. Suppression is OK here.")]
        [Property(
            UmbracoDefaultDataType.Textarea,
            Tab.Content,
            DisplayName = "Manual content",
            Description = "Optionally add extra lines to    robots.txt here.")]
        [UsedImplicitly]
        public string RobotsCustom { get; set; }
    }
}