import React, { Component } from 'react';

class Holiday extends Component {
    render() {
        return (
            <div className="card"> 
                <h2>{this.props.holiday.day}</h2>
                <p>{this.props.holiday.Month}</p>
                <p>{this.props.holiday.dayName}</p>
                <hr/>
                <p>{this.props.holiday.holidayName}</p>
            </div>
        );
    }
}

export default Holiday;