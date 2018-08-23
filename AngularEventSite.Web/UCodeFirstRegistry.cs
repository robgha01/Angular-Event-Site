namespace AngularEventSite.Web
{
    using System.Collections.Generic;

    using BlueLeet.UCodeFirst.Enums;
    using BlueLeet.UCodeFirst.Structure;
    using BlueLeet.UCodeFirst.Structure.ConfigurationSets;
    using BlueLeet.UComponents.Core.Enums;
    using BlueLeet.UComponents.Core.PropertyPreValues;

    using AngularEventSite.Web.Models;
    using AngularEventSite.Web.Models.Forms;

    /// <summary>
    /// Defines a structure registry for <see langword="this"/> project.
    /// </summary>
    public class UCodeFirstRegistry : Registry
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UCodeFirstRegistry"/> class.
        /// </summary>
        public UCodeFirstRegistry()
        {
            ForContentType<BaseContentModel>().ConfigureProperty(
                    model => model.Redirect,
                    expression =>
                        {
                            var treeSources = new List<TreeSourcePreValue>
                                                  {
                                                      new TreeSourcePreValue(
                                                          "Internal Link",
                                                          TreeSourceType.Content) {
                                                                                     Id = "-1" 
                                                                                  }
                                                  };

                            expression.WithKeys().Value("multiPicker", "0").Value("maxNumberOfItems", "1")
                                .Value("externalPicker", "1").JsonValue("treeSources", treeSources.ToArray());
                        }).ConfigureProperty(
                    model => model.GridFrontPage,
                    expression => expression.Inheritance(false).Searchable(x => x.Boost(5)))
                .ConfigureProperty(
                    model => model.HideInNavigation,
                    expression => expression.MarkAs(SystemPropertyType.NaviHide).WithKeys().Value("inverse", "1"))
                .ConfigureProperty(
                    model => model.UmbracoUrlAlias,
                    expression => expression.MarkAs(SystemPropertyType.UrlAlias)).ConfigureProperty(
                    model => model.UmbracoUrlName,
                    expression => expression.MarkAs(SystemPropertyType.UrlName));

            // ForContentType<StartPageModel>()
            // .ConfigureProperty(model => model.GridStartPage, expression => expression.Inheritance(false));
            ForContentType<ErrorPageModel>().ConfigurePageNotFound(model => model.Name, () => "404");

            ForContentType<FormPageModel>().ConfigureProperty(
                model => model.Form,
                expression => expression.Inheritance(false));

            ForContentType<SearchPageModel>().ConfigureProperty(
                model => model.GridSearchPageEmptyResult,
                expression => expression.MarkdownNote(
                    "AngularEventSite.Web",
                    "AngularEventSite.Web.Markdowns.SearchPageGridEmptyResult.md",
                    renderMode: PropertyNoteRenderMode.SlidingPane));
        }
    }
}