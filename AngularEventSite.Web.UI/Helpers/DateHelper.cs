namespace AngularEventSite.Helpers
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;

    public class DateHelper
    {
        public IEnumerable<DateTime> AllDatesInMonth(int year, int month)
        {
            var days = DateTime.DaysInMonth(year, month);

            for (var day = 1; day <= days; day++)
            {
                yield return new DateTime(year, month, day);
            }
        }

        public int GetWeekNumber(DateTime date)
        {
            var ciCurr = CultureInfo.CurrentCulture;
            var weekNum = ciCurr.Calendar.GetWeekOfYear(date, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday);

            return weekNum;
        }
    }
}