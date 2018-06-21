import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import CalendarInfinite from './../../components/Shared/CalendarHr/Calendar-Infinite/CalendarInfinite' 
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

import subMonths from 'date-fns/sub_months';
import endOfMonth from 'date-fns/end_of_month';
import addMonths from 'date-fns/add_months';

class ApplyLeave extends Component {
    
    render() {
        var today = new Date(); 
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
         
            return (
                <div>     
                    <InfiniteCalendar
                    width={(window.innerWidth <= 650) ? window.innerWidth : 650}
                    height={window.innerHeight - 250}
                    rowHeight={70}
                    selected={today}
                    disabledDays={[0,6]}
                    minDate={lastWeek}/>

                    <hr/>
                    
                    <CalendarInfinite
                    width={(window.innerWidth <= 650) ? window.innerWidth : 650}
                    height={window.innerHeight - 250}
                    rowHeight={70}
                    selected={today}
                    disabledDays={[0,6]}
                    min= {subMonths(today, 1)}
                    max = {endOfMonth(addMonths(today, 1))}
                    minDate={lastWeek}/> 
                </div>
            );
        }
}

export default ApplyLeave;