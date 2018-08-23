namespace AngularEventSite.Web.Extensions
{
    using System.Collections.Generic;
    using System.Web.Mvc;

    using Skybrud.Umbraco.GridData;

    /// <summary>
    /// The typed grid extensions.
    /// </summary>
    public static class TypedGridExtensions
    {
        public static MvcHtmlString RenderElementAttributes(this GridElement element)
        {
            var attrs = new List<string>();

            if (element.HasConfig)
            {
                foreach (var item in element.Config)
                {
                    attrs.Add(item.Key + "='" + item.Value + "'");
                }
            }

            if (element.HasStyles)
            {
                var cssVals = new List<string>();

                foreach (var item in element.Styles)
                {
                    cssVals.Add(item.Key + ":" + item.Value + ";");
                }

                attrs.Add("style='" + string.Join(" ", cssVals) + "'");
            }

            return new MvcHtmlString(string.Join(" ", attrs));
        }
    }
}