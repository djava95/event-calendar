export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT'; 

export interface eventI {
  id : string,
  startDate : Date,
  endDate : Date,
  title : string,
  description : string,
  labelColor : string
}

export interface addEventI {
  type : typeof ADD_EVENT,
  payload : eventI,
}

export interface deleteEventI {
  type : typeof DELETE_EVENT,
  payload : string
}

export type eventDispatchTypes = addEventI | deleteEventI;