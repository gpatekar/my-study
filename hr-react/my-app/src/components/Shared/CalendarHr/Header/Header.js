import React, { Component } from 'react';
import format from 'date-fns/format'; 
import parse from 'date-fns/parse';

class CalHeader extends Component {
    render() { 
        // const date = this.props.selected;
        function renderSlection(
            value, {
            display,
            key,
            locale: {locale},
            dateFormat,
            onYearClick,
            scrollToDate,
            setDisplay,
            shouldAnimate,
            }
        ){ 
            const date = parse(value); 
            const values = date && [
                {
                active: display === 'years',
                handleClick: e => {
                    onYearClick(date, e, key);
                    setDisplay('years');
                },
                item: 'year',
                title: display === 'days' ? `Change year` : null,
                value: date.getFullYear(),
                },
                {
                active: display === 'days',
                handleClick: e => {
                if (display !== 'days') {
                    setDisplay('days');
                } else if (date) {
                    scrollToDate(date, -40, true);
                }
                },
                item: 'day',
                title: display === 'days'
                ? `Scroll to ${format(date, dateFormat, {locale})}`
                : null,
                value: format(date, dateFormat, {locale}),
                },
            ];

            return (
                <div> 
                    {values.map(({handleClick, item, key, value, active, title}, i) => { 
                        return (
                        <div key={i}>  
                            <span
                                key={`${item}-${value}`} 
                                aria-hidden={true}
                                onClick={handleClick}>
                                {value}
                            </span> 
                        </div>
                        );
                    })}
                </div>
                
            );
        }
         
        return (
            <div>
                {
                    <div>
                        {
                            this.props.selected && renderSlection(this.props.selected, this.props)
                        }
                    </div>
                }
            </div>
        );
    }
}

export default CalHeader;