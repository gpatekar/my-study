//Gloabal Var  
var queSeq = [],
    prvM,
    NextM,
    tempCur,
    tempScrollStartPos,
    tempScrollEndPos,
    maxNoOfYears = new Date().getFullYear() + 0,
    minNoOfYears = new Date().getFullYear() - 1,
    mmonthLimit = 12, //ggosavi
    defaultOffset;


//ggosavi
var now = new Date(Date.now());
var start = new Date(Date.now());
var end = new Date(Date.now());
start.setMonth(start.getMonth() - mmonthLimit);
end.setMonth(end.getMonth() + mmonthLimit);

//Finds the difference between the top of calendar container and first calendar = 

var currentMonth;
var lastMonthActive;
var firstMonthActive;

cal_days_labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
cal_months_labels = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
];
cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function generateCalendar(id, month, year) {
    //alert(id);  
    var cal = new Calendar(month, year);
    cal.generateHTML();
    $("#" + id).html(cal.getHTML());
    cal.bindDates();
    prependEvent(id);

}


//Create event div inside calendar
function prependEvent(eId) {
    $('#' + eId + ' ' + '.cell').prepend('<div class="event"></div>');
}

var lastScrollTop = 30;

function activeCurrentMonth(currentMonth) {
    //console.log(currentMonth);
    for (var i = 0; i < queSeq.length; i++) {
        if (queSeq[i] == currentMonth) {
            queSeq[i].addClass("active");
            updateActiveMonthHeader();
        } else {
            queSeq[i].removeClass("active");

        }
    }
}

var currentTopMonth;

function detectCurrentPosMonth() {

    for (i = 0; i < queSeq.length; i++) {
        //40 is the margin bottom of calendar 
        if (queSeq[i].offset().top <= (defaultOffset + 40) && queSeq[i].offset().top > (defaultOffset + 40) - queSeq[0].height()) {
            currentTopMonth = queSeq[i];
        }
    }
    return (currentTopMonth);
}

//maximum year limit
function checkMaxYearLimit() {
    var value = $(queSeq[2]).attr("id");
    if (value == '11_' + maxNoOfYears) {

        return false;
    } else {
        return true;
    }
}

//minimum year limit
function checkMinYearLimit() {
    var value = $(queSeq[0]).attr("id");
    if (value == '0_' + minNoOfYears) {

        return false;
    } else {
        return true;
    }
}


function updateCal(eId, month, year) {
    var cal = new Calendar(month, year);
    cal.generateHTML();
    $("#" + eId).html(cal.getHTML());
    cal.bindDates();
    prependEvent(eId);
    updateCalButtonsEvents();
    adjustCalendarCellDimension();
    return false;
}


/*Table width and hight*/
var windowHeight = $(window).height();
var headerHeight = $('.header').first().height();

function adjustCalendarCellDimension() {

    if (windowHeight - $('.CalendarSec').offset().top < 500) {
        $('.CalendarSec').css('height', windowHeight - $('.CalendarSec').offset().top);
    }

    //$('.calendar table td').css('width', calendarCellWidth = getCalendarDayWidth());
    //$('.calendar table td').css('height', calendarCellheight = getCalendarDayHeight());
    //$('.calendar table td .event').css('height', calendarCellheight = getCalEventHeight());
    //$('.scrollerWidth').css('width', calendarWrapperWidth = getCanvasWidth() + 15);
    $('.calendar table').css('width', '100%');
    $('.calendar table').css('height', getCanvasHeight());
    $('.calendar table td .event').css('height', calendarCellheight = getCalEventHeight());
}

function getCanvasWidth() {
    var calendarWidth = $('.colum-1').width();
    return (calendarWidth);
}


function getCanvasHeight() {
    var canvasHeight = windowHeight - $('.CalendarSec').offset().top;
    if (canvasHeight < 500) {
        return (canvasHeight);
    } else {
        return (canvasHeight = 500);
    }

}



function getCalendarDayHeight() {

    var calendarCanvasHeight = getCanvasHeight();
    var calendarCellheight = (calendarCanvasHeight / 7);
    return (calendarCellheight);
}

function getCalendarDayWidth() {

    var calendarCanvasWidth = getCanvasWidth();
    var calendarCellWidth = (calendarCanvasWidth / 7);
    return (calendarCellWidth);
}

function getCalEventHeight() {
    var calendarCanvasHeight = getCanvasHeight();
    var calendarEventheight = (calendarCanvasHeight / 7) - $('.day').height();
    return (calendarEventheight);
}


/*Set the height of the calendar container according to table*/
function adjustCalContHeight() {
    // var calendarWidth = $('#calendarcanvas table').height();
    //$('.CalendarSec').css('height',calendarWidth);
}

/*day header row Changes*/
function adjustDayHeadr() {
    var calendarWidth = $('#calendarcanvas table').width();
    $('#daysHeader table').css('width', calendarWidth);
    $('#daysHeader table').css('top', $('.CalendarSec').position().top - 40);
}


//Sets active month header
function updateActiveMonthHeader() {
    var val = $(currentMonth).selector;
    var splitStr = val.split("_");
    var curMonth = splitStr[0].slice(1);
    var curYear = parseInt(splitStr[1]);

    var htmlString = cal_months_labels[curMonth];
    $('.currentMonthHeader').html("<strong>" + htmlString + "</strong> " + curYear);
}

$('.CalendarSec').bind('scroll', function() {
    currentMonth = detectCurrentPosMonth();
    activeCurrentMonth(currentMonth);
    closeDropDown();
});

function takeMeToCurrentMonth() {

    //$('.CalendarSec').scrollTop(($("#" + now.getMonth() + '_' + now.getFullYear()).position().top));  
    $('.CalendarSec').scrollTop(0);
    $('.CalendarSec').scrollTop(($("#" + now.getMonth() + '_' + now.getFullYear()).position().top) + ($('.calendar:nth-child(4) table tr ').innerHeight() - 13));
    //('.CalendarSec').scrollTop(($("#" + now.getMonth() + '_' + now.getFullYear()).position().top));  
    $('.calendar-day').removeClass('selected');
    $("#" + cal_months_labels[m] + '-' + d + '-' + y).parent(this).first().addClass('selected');

    return (cal_months_labels[m] + '-' + d + '-' + y);
}


function intializeMonths() {

    var i = 0;
    for (var d = start; d <= end; d.setMonth(d.getMonth() + 1)) {

        $('.CalendarSec').append('<div class="calendar" id="' + d.getMonth() + '_' + d.getFullYear() + '"></div>');
        generateCalendar(d.getMonth() + '_' + d.getFullYear(), d.getMonth(), d.getFullYear());

        queSeq[i] = $('#' + d.getMonth() + '_' + d.getFullYear());
        i = i + 1;
    }

}

//call functions on window resize
$(window).resize(function(e) {
    adjustCalendarCellDimension();
    adjustCalContHeight();
    adjustDayHeadr();
    closeDropDown();
});



//boc ggosavi
//moved code from document ready to new function because document.ready is already called in applyleave.cshtml
function loadInitCalendar() {

    intializeMonths();
    defaultOffset = $('.CalendarSec').offset().top;
    //initalize three month on load of the page
    updateCalButtonsEvents();
    adjustCalendarCellDimension();

    $('.CalendarSec').scrollTop(($("#" + now.getMonth() + '_' + now.getFullYear()).position().top) + ($('.calendar:nth-child(4) table tr ').innerHeight() + 31));
    updateActiveMonthHeader();
    $('.calendar-day').removeClass('selected');
    $("#" + cal_months_labels[m] + '-' + d + '-' + y).parent(this).first().addClass('selected');


}

//call on load 
/*$(document).ready(function () {
});*/
//eoc ggosavi

//dropdown options when clicked on apply button
function toggleDropDown() {
    var openDropdownLeft = $('.openDropdown').position().left;
    var openDropdownTop = $('.openDropdown').position().top;

    $(".dorpDown").css('top', (openDropdownTop + 50));
    $(".dorpDown").css('left', (openDropdownLeft - 10));

    $('.popupOverlay.dropDownOverlay').toggleClass('active');
    $('.popupOverlay.dropDownOverlay').toggle();
    //$(".dorpDown").show(500);
    $(".dorpDown").toggle();

}

//Hide 	dropdown options when scrolled
function closeDropDown() {
    $(".dorpDown").fadeOut();
    $('.popupOverlay.dropDownOverlay').removeClass('active');
    $('.popupOverlay.dropDownOverlay').hide();
}

//popup apply leave
$(".calendar-day").click(function() {
    $(".popupOverlay.applyLeave").addClass('active');
    $("body").css('overflow', 'hidden');

});

//show extra info inside apply popup
function showExtraInfo() {
    $('.extraInfoShowButton').hide();
    $(".slider").show();
    $('#ApplyLeaves').removeClass('hideExtraInfo');
    //	$( ".leftContent" ).width('26.8%');
    $(".slider").animate({
        left: "0px",
    }, 100);
}


function hideExtraInfo() {

    $('#ApplyLeaves').addClass('hideExtraInfo');
    $(".slider").hide();
    $(".slider").animate({
        left: "100%",
    }, 100, function() {
        $('.extraInfoShowButton').show();
    });
}

//$('.pTabs li').click(function () {
//    $('.applyLeave .popup .laveType').hide();
//    $('.applyLeave .popup .leaveReason').hide();
//    // $('#halfDay .chooseHalfDay').hide();
//    // $('.applyLeave .popup .date').val('');
//    $('#ManyDays .chooseHalfDay').hide();
//    $('.applyLeave .popup .apply').hide();
//
//});

$('.pTabs li:nth-child(2)').click(function() {

    $('.applyLeave .popup .laveType').show();
    $('.applyLeave .popup .leaveReason').show();
    $('.applyLeave .popup .apply').show();
});



$('#halfDay .switches .btn').click(function() {
    $('.applyLeave .popup .laveType').show();
    $('.applyLeave .popup .leaveReason').show();
    $('.applyLeave .popup .apply').show();

});

/*$('#fullDay .date').change(function() {
    if ($('#fullDay .date').val() != null) {
        $('.applyLeave .popup .laveType').show();
        $('.applyLeave .popup .leaveReason').show();
        $('.applyLeave .popup .apply').show();
    }
});
*/

//$('#ManyDays .dateTo').change(function () {
//    if ($('#ManyDays .dateFrom').val().length > 0 && $('#ManyDays .dateTo').val().length > 0) {
//        $('.applyLeave .popup .chooseHalfDay').show();
//        $('.applyLeave .popup .laveType').show();
//        $('.applyLeave .popup .leaveReason').show();
//        $('.applyLeave .popup .apply').show();
//    }
//});
//
//$('#ManyDays .dateFrom').change(function () {
//    if ($('#ManyDays .dateFrom').val().length > 0 && $('#ManyDays .dateTo').val().length > 0) {
//        $('.applyLeave .popup .chooseHalfDay').show();
//        $('.applyLeave .popup .laveType').show();
//        $('.applyLeave .popup .leaveReason').show();
//        $('.applyLeave .popup .apply').show();
//    }
//});