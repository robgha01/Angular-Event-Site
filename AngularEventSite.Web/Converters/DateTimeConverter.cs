namespace AngularEventSite.Web.Converters
{
    using System;
    using System.Reflection;

    using BlueLeet.UCodeFirst.Converters;

    public class DateTimeConverter : IConverter
    {
        public object Read(PropertyInfo propertyInfo, object value)
        {
            return value as DateTime? ?? new DateTime();
        }
    }
}