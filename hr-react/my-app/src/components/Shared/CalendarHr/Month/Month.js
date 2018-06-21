import React, { Component } from 'react';
import format from 'date-fns/format';
import getDay from 'date-fns/get_day';
import isSameYear from 'date-fns/is_same_year';

import Day from "./../Day/Day";

function getDateString(year, month, date) {
  return `${year}-${('0' + (month + 1)).slice(-2)}-${('0' + date).slice(-2)}`;
}

class Month extends Component {
    
    renderRows() { 
        const { 
            disabledDates,
            disabledDays,
            monthDate,
            locale,
            maxDate,
            minDate,
            rowHeight,
            rows,
            selected,
            today,
            theme,
            passThrough,
        } = this.props;
        
    const currentYear = today.getFullYear();
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const monthShort = format(monthDate, 'MMM', {locale: locale.locale});
    const monthRows = [];
    let day = 0;
    let isDisabled = false;
    let isToday = false;
    let date, days, dow, row;

    // Used for faster comparisons
    const _today = format(today, 'YYYY-MM-DD');
    const _minDate = format(minDate, 'YYYY-MM-DD');
    const _maxDate = format(maxDate, 'YYYY-MM-DD');

		// Oh the things we do in the name of performance...
    for (let i = 0, len = rows.length; i < len; i++) {
      row = rows[i];
      days = [];
      dow = getDay(new Date(year, month, row[0]));

      for (let k = 0, len = row.length; k < len; k++) {
        day = row[k];

        date = getDateString(year, month, day);
        isToday = (date === _today);

        isDisabled = (
					minDate && date < _minDate ||
					maxDate && date > _maxDate ||
					disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1 ||
					disabledDates && disabledDates.length && disabledDates.indexOf(date) !== -1
				);

        days[k] = (
					<Day
						key={`day-${day}`}
						currentYear={currentYear}
						date={date}
						day={day}
                        selected={selected}
						isDisabled={isDisabled}
						isToday={isToday}
						locale={locale}
                        month={month}
                        monthShort={monthShort}
						theme={theme}
                        year={year}
                        {...passThrough.Day}
					 />
				);

        dow += 1;
      }
      monthRows[i] = (
        <ul
          key={`Row-${i}`}
           
          role="row"
          aria-label={`Week ${i + 1}`}
        >
          {days}
        </ul>
      );

    }

    return monthRows;
  }
    render() {  
        return (
            <div>
                 
                {/*<Day month={this.props.day}></Day>*/}
                {this.renderRows()}
            </div>
        );
    }
}

export default Month;