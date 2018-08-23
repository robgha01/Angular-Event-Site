namespace AngularEventSite.Web.Converters
{
    using System.Reflection;

    /// <summary>
    /// The media converter.
    /// </summary>
    public class MediaConverter : ContextAwareConverter
    {
        /// <inheritdoc />
        public override object Read(PropertyInfo propertyInfo, object value)
        {
            if (string.IsNullOrEmpty(value as string))
            {
                return null;
            }

            return Umbraco.TypedMedia(value);
        }
    }
}