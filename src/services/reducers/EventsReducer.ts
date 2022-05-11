import { ADD_EVENT, DELETE_EVENT, eventI, eventDispatchTypes } from "../actions/EventActionTypes";

interface DefaultStateI {
  events : eventI[] 
}

const defaultState : DefaultStateI = {
  events : []
} 

const EventsReducer = (state: DefaultStateI = defaultState, action : eventDispatchTypes) => {
  switch (action.type) {
    case ADD_EVENT : 
    const newEvent = action.payload;
    const existingEventIndex  = state.events.findIndex(event => event.id === newEvent.id );
    if (existingEventIndex === -1) {
      return { 
        ...state,
        events : state.events?.concat(newEvent)  
      }
    } else {
      const updEvents = [...state.events]
      updEvents[existingEventIndex] = newEvent
      return {
        ...state,
        events : updEvents
      }
    }
    case DELETE_EVENT : 
    return { 
      ...state,
      events : state.events?.filter(event => event.id !== action.payload)  
    }
    default : 
      return state
  }  
}

export default EventsReducer;