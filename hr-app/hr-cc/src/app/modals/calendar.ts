
// export interface Cal {
//     getWeekNumber(): number;
// }
export interface  Cal {
      addDays(days: number, useThis?: boolean): Date;
      isToday(): boolean;
      clone(): Date;
      isAnotherMonth(date: Date): boolean;
      isWeekend(): boolean;
      isSameDate(date: Date): boolean;
   }
