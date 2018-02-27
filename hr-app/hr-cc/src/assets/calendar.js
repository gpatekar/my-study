var date = new Date(),
    d = date.getDate(),
    m = date.getMonth(),
    y = date.getFullYear(),
    cal_day_ids = new Array();

cal_days_labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
cal_months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Calendar(month, year) {
    this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
    this.year = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
    this.html = '';
}


Calendar.prototype.generateHTML = function() {
    // get first day of month
    var firstDay = new Date(this.year, this.month, 0);
    var startingDay = firstDay.getDay();

    // find number of days in month
    var monthLength = cal_days_in_month[this.month];
    var prvmonthLength = cal_days_in_month[this.month - 1];
    var nextmonthLength = cal_days_in_month[this.month + 1];

    // compensate for leap year
    if (this.month == 1) { // February only!
        if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
            monthLength = 29;
        }
    }

    // do the header
    var monthName = cal_months_labels[this.month]

    var nextmonthName = cal_months_labels[this.month + 1]
    var prvmonthName = cal_months_labels[this.month - 1]

    var html = '<table class="calendar-table" cellpadding="0" cellspacing="0">';
    html += '<tr><th colspan="7"> <div id="prv"></div> <h2>';
    html += monthName + "&nbsp;" + this.year;
    html += '</h2><div id="next"></div></th></tr>';
    html += '<tr class="calendar-header">';
    for (var i = 0; i <= 6; i++) {
        html += '<td class="calendar-header-day">';
        html += cal_days_labels[i];
        html += '</td>';
    }
    html += '</tr><tr>';

    var idloop = 0;
    // fill in the days
    var day = 1;
    // this loop is for is weeks (rows)
    var cssWeekend = "";
    var weekNum;
    var tmpDt = new Date();
    var todayDate = new Date(tmpDt.getFullYear(), tmpDt.getMonth(), tmpDt.getDate());
    todayDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 9; i++) {
        // this loop is for weekdays (cells)
        for (var j = 0; j <= 6; j++) {
            //boc ggosavi add weekday css
            if (day <= monthLength && (i > 0 || j >= startingDay)) {

                //check week for month
                cssWeekend = "";
                weekNum = 0;
                var dt = new Date(this.year, this.month, day);
                weekNum = 0 | dt.getDate() / 7;
                weekNum = (dt.getDate() % 7 === 0) ? weekNum - 1 : weekNum;
                //console.log(weekNum);

                var validDate = $.datepicker.formatDate("dd M, yy", dt);
                if (arrUserWeekend.indexOf(validDate) > -1) {
                    cssWeekend = "weekEnd";
                } else {
                    cssWeekend = "";
                }
                html += '<td class="calendar-day ' + cssWeekend + '">';
            } else {
                html += '<td class="calendar-day">';
            }
            //eoc ggosavi
            if (day <= monthLength && (i > 0 || j >= startingDay)) {

                var calDate = new Date(this.year, this.month, day);
                calDate.setHours(0, 0, 0, 0);
                if (calDate.getTime() == todayDate.getTime())
                    html += '<div  id=' + monthName + '-' + day + '-' + this.year + ' class="cell"><div class="today">' + day;
                else
                    html += '<div  id=' + monthName + '-' + day + '-' + this.year + ' class="cell"><div class="day">' + day;

                idloop++;
                day++;


            }


            html += '</div></div></td>';

        }
        // stop making rows if we've run out of days
        if (day > monthLength) {
            break;
        } else {
            html += '</tr><tr>';
        }
    }
    html += '</tr></table>';




    this.html = html;
}

Calendar.prototype.getHTML = function() {
    return this.html;
}


Calendar.prototype.bindDates = function() {

    // get first day of month
    var firstDay = new Date(this.year, this.month, 1);
    var startingDay = firstDay.getDay();

    // find number of days in month
    var monthLength = cal_days_in_month[this.month];

    // compensate for leap year
    if (this.month == 1) { // February only!
        if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
            monthLength = 29;
        }
    }

    // do the header
    var monthName = cal_months_labels[this.month]

    // fill in the days
    var day = 1;
    // this loop is for is weeks (rows)
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j <= 6; j++) {

            if (day <= monthLength && (i > 0 || j >= startingDay)) {


                $('.cell').click(function() {
                    var dtId = this.id;
                    var dtObj = dtId.split('-');
                    startSelect = new Date(dtObj[0] + " " + dtObj[1] + "," + dtObj[2]);
                });



                day++;
            }
        }
        // stop making rows if we've run out of days
        if (day > monthLength) {
            break;
        } else {}
    }

}