namespace AngularEventSite.Web.Converters
{
    using System;
    using System.Reflection;
    using System.Web;

    using BlueLeet.UCodeFirst.Converters;

    using HtmlAgilityPack;

    public class RichtextConverter : IConverter
    {
        public object Read(PropertyInfo propertyInfo, object value)
        {
            var v = value as IHtmlString;

            // if (string.IsNullOrEmpty(v) || !UmbracoContext.Current.PageId.HasValue)
            // {
            // return new HtmlString(string.Empty);
            // }

            //// v = Slimmage(v);
            return v;
        }

        public string Slimmage(string html)
        {
            var doc = new HtmlDocument();

            doc.LoadHtml(html);

            var nodes = doc.DocumentNode.SelectNodes(@"//img[@src]");

            if (nodes == null)
            {
                return html;
            }

            var noScriptElement = doc.CreateElement("data-slimmage");

            for (var index = 0; index < nodes.Count; index++)
            {
                var img = nodes[index];
                img.Attributes.Remove("style");

                if (img.Attributes["src"].Value.IndexOf("?", StringComparison.Ordinal) == -1)
                {
                    img.Attributes["src"].Value = img.Attributes["src"].Value + "?width=480&amp;quality=75";
                }

                noScriptElement.AppendChild(img);
                img.ParentNode.InsertAfter(noScriptElement, img);
                nodes.Remove(img);
            }

            var newHtml = doc.DocumentNode.OuterHtml;

            return newHtml;
        }
    }
}