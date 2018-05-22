import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import Calendar from './../../components/Shared/Calendar-hr/Calendar/Calendar'
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

class ApplyLeave extends Component {
    
    render() {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            return (
                <div> 
                    {/*<InfiniteCalendar
                    width={(window.innerWidth <= 650) ? window.innerWidth : 650}
                    height={window.innerHeight - 250}
                    rowHeight={70}
                    selected={today}
                    disabledDays={[0,6]}
                    minDate={lastWeek}/>*/}
                    <Calendar
                    width={(window.innerWidth <= 650) ? window.innerWidth : 650}
                    height={window.innerHeight - 250}
                    rowHeight={70}
                    selected={today}
                    disabledDays={[0,6]}
                    minDate={lastWeek}/>
                </div>
            );
        }
}

export default ApplyLeave;