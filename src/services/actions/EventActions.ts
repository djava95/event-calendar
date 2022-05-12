import { eventI, ADD_EVENT, DELETE_EVENT, GET_EVENTS_DATA } from "./EventActionTypes";

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

export const setEventsData = (events : eventI[]) => {
  localStorage.setItem('eventsData', JSON.stringify(events))
}

export const getEventsData  = () => {
  const eventsData = localStorage.getItem('eventsData');
  if (!eventsData || eventsData.length === 0) {
    setEventsData([]);
    console.log(eventsData);
    
  } else {
    const data = JSON.parse(eventsData);
    let convertedData = data.map((event : any) => { 
      return {...event, 
        startDate : new Date(Date.parse(event.startDate)),
        endDate :  new Date(Date.parse(event.endDate))
      }
    })  
    return {
      type : GET_EVENTS_DATA,
      payload : convertedData
    }
  }
}

