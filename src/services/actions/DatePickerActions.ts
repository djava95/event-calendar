import { SET_DATEPICKER_MONTH } from "./DatePickerActionTypes";

export const setDatePickerMonth = (date : Date) => {
  let days = [];
  let calStartDay = new Date (date.getFullYear(), date.getMonth(), 1);
  calStartDay.setDate(calStartDay.getDate() - (calStartDay.getDay() === 0 ? 7 : calStartDay.getDay()));  
  
  for ( let n = 0; n < 42 ; n++) {
    calStartDay.setDate(calStartDay.getDate() + 1);          
    days.push(
       new Date(calStartDay.getTime()) 
      );
    }
   
  return({
    type : SET_DATEPICKER_MONTH,
    payload : {date : date, days: days} 
  })
}

