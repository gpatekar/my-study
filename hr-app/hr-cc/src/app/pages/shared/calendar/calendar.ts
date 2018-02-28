//  interface Calendar {
//       addDays(days: number, useThis?: boolean): Date;
//       isToday(): boolean;
//       clone(): Date;
//       isAnotherMonth(date: Date): boolean;
//       isWeekend(): boolean;
//       isSameDate(date: Date): boolean;
//    }

// Calendar.prototype.addDays = (days: number): Date => {
//    if (!days) return this;
//    console.log(this);
//    let date = this;
//    date.setDate(date.getDate() + days);

//    return date;
// };

// Calendar.prototype.isToday = (): boolean => {
//    let today = new Date();
//    return this.isSameDate(today);
// };

// Calendar.prototype.clone = (): Date => {
//    return new Date(+this);
// };

// Calendar.prototype.isAnotherMonth = (date: Date): boolean => {
//    return date && this.getMonth() !== date.getMonth();
// };

// Calendar.prototype.isWeekend = (): boolean => {
//    return this.getDay() === 0 || this.getDay() === 6;
// };

// Calendar.prototype.isSameDate = (date: Date): boolean => {
//    return date && this.getFullYear() === date.getFullYear() && this.getMonth() === date.getMonth() && this.getDate() === date.getDate();
// };
