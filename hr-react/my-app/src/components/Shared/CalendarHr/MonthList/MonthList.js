import React, { Component } from 'react'; 
import VirtualList from 'react-tiny-virtual-list';
import Month from './../Month/Month';
import {
  emptyFn,
  getMonth,
  getWeek,
  getWeeksInMonth,
  animate,
} from '../Utils/Utils.js';

class MonthList extends Component {
    cache = {};
    memoize = function(param) {
        if (!this.cache[param]) {
        var weekStartsOn = 1;    
        const locale = {weekStartsOn};
        const [year, month] = param.split(':');
        const result = getMonth(year, month, weekStartsOn);
        this.cache[param] = result;
        }
        return this.cache[param];
    }
    render() {
        const selected = this.props.selected; 
        let {month, year} = this.props.months[1];
        let key = `${year}:${month}`;
        let {date, rows} = this.memoize(key);
        return (
            <div>
                <VirtualList 

                    width={this.props.width}
                     height={this.props.height}
                     itemCount={200}
                    itemSize={50} // Also supports variable heights (array or function getter)
                    renderItem={({index, style}) =>
                     <Month selected={selected} monthDate={date} />
                    }
                />,
                
            </div>
        );
    }
}

export default MonthList;