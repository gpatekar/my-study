import React, { Component } from 'react';
import Holiday from './../../components/Shared/Holiday';

var holidays = [
    {
        "name":"fixed",
        "day":1,
        "dayName":"Monday",
        "Month":"January", 
        "holidayName":"New Year"
    },
    {
        "name":"fixed",
        "day":26,
        "dayName":"Friday",
        "Month":"January", 
        "holidayName":"Republic Day"
    },
    {
        "name":"fixed",
        "day":15,
        "dayName":"Wednesday",
        "Month":"May", 
        "holidayName":"Independence Day"
    }
];



class HolidayList extends Component {

    render() { 
        return (
            <div>
                {
                    holidays.map(function(holiday){
                        return <Holiday holiday={holiday} />;
                    }) 
                }
            </div> 
        );
    }
}

export default HolidayList;