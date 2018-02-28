import { Component, OnInit } from '@angular/core';
import { Cal } from '../../../modals';
import './calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  cal_days_labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  cal_months_labels = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  calendars = [];
  constructor() { }

  ngOnInit() {
    this.genCalendar(2018, 1);
  }

  genCalendar(year, month) {
    // get first day of month
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay();

    // number of days in month
    let daysInMonth = this.cal_days_in_month[month];

    // compensate for leap year
    if (month === 1) { // February only!
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
      }
    }

    let days = 1;
    for (let i = 0; i < 5; i++) {
      this.calendars[i] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay || i === 4 && days > daysInMonth) {
          this.calendars[i].push({day: '', events: ['', '']});
        } else {
          this.calendars[i].push({day: days++, events: ['1', '3']});
        }
      }
    }
}

