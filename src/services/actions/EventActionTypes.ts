export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_EVENTS_DATA = 'SET_EVENTS_DATA';
export const GET_EVENTS_DATA = 'GET_EVENTS_DATA'; 

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

export interface getEventsDataI {
  type : typeof GET_EVENTS_DATA,
  payload : eventI[]
}

export type eventDispatchTypes = addEventI | deleteEventI | getEventsDataI;