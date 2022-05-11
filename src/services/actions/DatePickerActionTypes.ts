export const SET_DATEPICKER_MONTH = 'SET_DATEPICKER_MONTH';

export interface DayI {
 date : Date,
}

export interface SetDatePickerMonthI {
  type : typeof SET_DATEPICKER_MONTH,
  payload : {date :Date, days :Date [] },
}

