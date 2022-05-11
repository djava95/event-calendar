export const SET_MONTH = 'SET_MONTH';

export interface DayI {
 date : Date,
}

export interface SetMonthI {
  type : typeof SET_MONTH,
  payload : {date :Date, days :Date [] },
}

