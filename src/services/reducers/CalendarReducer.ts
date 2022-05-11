import {SET_MONTH, SetMonthI} from '../actions/CalendarActionTypes';

interface DefaultStateI {
  date : Date,
  days : Date [] 
}

const defaultState : DefaultStateI = {
  date : new Date(),
  days : []
} 

const CalendarReducer = (state: DefaultStateI = defaultState, action : SetMonthI) => {
  switch (action.type) {
    case SET_MONTH : 
      return { 
        ...state,
        date : action.payload.date,
        days : action.payload.days  
      }
    default : 
      return state
  }  
}

export default CalendarReducer;