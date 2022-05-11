import {SET_DATEPICKER_MONTH, SetDatePickerMonthI} from '../actions/DatePickerActionTypes';

interface DefaultStateI {
  date : Date,
  days : Date [] 
}

const defaultState : DefaultStateI = {
  date : new Date(),
  days : []
} 

const DatePickerReducer = (state: DefaultStateI = defaultState, action : SetDatePickerMonthI) => {
  switch (action.type) {
    case SET_DATEPICKER_MONTH : 
      return { 
        ...state,
        date : action.payload.date,
        days : action.payload.days  
      }
    default : 
      return state
  }  
}

export default DatePickerReducer;