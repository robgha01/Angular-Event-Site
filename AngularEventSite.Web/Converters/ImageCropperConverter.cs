namespace AngularEventSite.Web.Converters
{
    using System.Reflection;

    using BlueLeet.UCodeFirst.Converters;

    using Umbraco.Web.Models;

    /// <summary>
    /// The image cropper converter.
    /// </summary>
    public class ImageCropperConverter : IConverter
    {
        /// <inheritdoc />
        public object Read(PropertyInfo propertyInfo, object value)
        {
            // ToDo: create a crop url ?
            var cropData = value as ImageCropDataSet;
            var url = cropData?.Src;
            return url;
        }
    }
}