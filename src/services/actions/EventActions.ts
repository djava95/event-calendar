import { ADD_EVENT, DELETE_EVENT } from "./EventActionTypes";

export const addEvent = (id: Date | string , startDate: Date, endDate : Date, title: string, description: string, labelColor: string)  => {
  return({
    type: ADD_EVENT,
    payload: {
      id: id,
      startDate: startDate,
      endDate : endDate,
      title: title,
      description: description,
      labelColor: labelColor  
    } 
  })
}


export const deleteEvent = (id : string) => {
  return ({
    type : DELETE_EVENT,
    payload : id
  })
}


