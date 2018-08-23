namespace AngularEventSite.Web.Models
{
    using System.Globalization;

    using BlueLeet.UCodeFirst;
    using BlueLeet.UCodeFirst.ContentTypes;

    using AngularEventSite.Web.Models.Configuration;
    using AngularEventSite.Web.Models.Forms;

    using Umbraco.Core.Models;

    /// <summary>
    /// The start page model.
    /// </summary>
    [ContentType(
        DisplayName = "Sida: Start",
        Icon = Icon.Home,
        AllowAtRoot = true,
        Description = "",
        PropertySortMode = PropertySortMode.LocalFirst,
        AllowedChildNodes = new object[]
                                {
                                    typeof(ErrorPageModel), typeof(LoginPageModel), typeof(SearchPageModel),
                                    typeof(ProfilePageModel), typeof(ConfigurationPageModel),
                                    typeof(FormFolderPageModel), typeof(ArticlePageModel), typeof(EventPageModel),
                                    typeof(EventCodePageModel)
                                })]
    public class StartPageModel : BaseContentModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StartPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="culture">
        /// The culture.
        /// </param>
        public StartPageModel(IPublishedContent content, CultureInfo culture)
            : base(content, culture)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="StartPageModel"/> class.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        public StartPageModel(IPublishedContent content)
            : base(content)
        {
        }

        ///// <summary>
        ///// Gets or sets the main body.
        ///// </summary>
        // [Property(DataType.GridFrontPage, Tab.ModuleContent, DisplayName = "#GridStartPage name", Description = "#GridStartPage description")]
        // public virtual string GridStartPage { get; set; }
    }
}