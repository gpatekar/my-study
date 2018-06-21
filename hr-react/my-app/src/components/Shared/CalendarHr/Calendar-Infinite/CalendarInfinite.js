import React, { Component } from 'react';
import MonthList from './../MonthList/MonthList';
import CalHeader from './../Header/Header';
import defaultLocale from '../Utils/defaultLocale';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfDay from 'date-fns/start_of_day'; 

class CalendarInfinite extends Component {
    constructor(props) {
    super(...arguments);  
    this.updateYears(props);
    this.state = {
      display: props.display,
    };
  }
    _locale = {};
    getDisabledDates(disabledDates) {
    return disabledDates && disabledDates.map((date) => format(parse(date), 'YYYY-MM-DD'));
  }
    getLocale() {
        return Object.assign(this._locale, defaultLocale, this.props.locale);
    }
    setDisplay = (display) => {
        this.setState({display});
    }
    // min = subMonths(today, 1) ;
    updateYears(props = this.props) {
        this._min = parse(props.min);
        this._max = parse(props.max);
        this._minDate = parse(props.minDate);
        this._maxDate = parse(props.maxDate);

        const min = this._min.getFullYear();
        const minMonth = this._min.getMonth();
        const max = this._max.getFullYear();
        const maxMonth = this._max.getMonth();

        const months = [];
        let year, month;
        for (year = min; year <= max; year++) {
        for (month = 0; month < 12; month++) {
            if (
            year === min && month < minMonth ||
            year === max && month > maxMonth
            ) {
            continue;
            }

            months.push({month, year});
        }
        } 
        this.months = months;
    }
    
    render() {
        const locale = this.getLocale();
        const today = this.today = startOfDay(new Date());
        const disabledDates = this.getDisabledDates(this.props.disabledDates); 
        return (
            <div> 
                 <CalHeader  
                    selected={this.props.selected} 
                    locale={locale} 
                    setDisplay={this.setDisplay}
                    dateFormat={locale.headerFormat}
                    display={this.state.display}
                    displayDate={this.props.displayDate}  
                  /> 
                <MonthList 
                    width={this.props.width}
                    height={this.props.height}
                    disabledDates={disabledDates}
                    disabledDays={this.props.disabledDays}
                    months={this.months}
                    today={this.today}
                    maxDate={this._maxDate}
                    min={this._min}
                    minDate={this._minDate}
                />
            </div>
        );
    }
}

export default CalendarInfinite;