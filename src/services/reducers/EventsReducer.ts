import { GET_EVENTS_DATA, ADD_EVENT, DELETE_EVENT, eventI, eventDispatchTypes } from "../actions/EventActionTypes";

export interface DefaultStateI {
  events : eventI[] 
  changed : boolean
}

const defaultState : DefaultStateI = {
  events : [],
  changed : false
} 

const EventsReducer = (state: DefaultStateI = defaultState, action : eventDispatchTypes) => {
  switch (action.type) {
    case ADD_EVENT : 
    const newEvent = action.payload;
    const existingEventIndex  = state.events.findIndex(event => event.id === newEvent.id );
    if (existingEventIndex === -1) {
      return { 
        ...state,
        events : state.events?.concat(newEvent),
        changed : true  
      }
    } else {
      const updEvents = [...state.events]
      updEvents[existingEventIndex] = newEvent
      return {
        ...state,
        events : updEvents,
        changed : true
      }
    }
    case DELETE_EVENT : 
    return { 
      ...state,
      events : state.events?.filter(event => event.id !== action.payload),
      changed : true 
    }
    case GET_EVENTS_DATA : 
    return {
      ...state,
      events : action.payload,
      changed : false,
    }
    default : 
      return state
  }  
}

export default EventsReducer;