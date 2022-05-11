import {combineReducers} from 'redux';
import CalendarReducer from './CalendarReducer';
import DatePickerReducer from './DatePickerReducer';
import EventsReducer from './EventsReducer';

const RootReducer = combineReducers ({
  calendar : CalendarReducer,
  datePicker : DatePickerReducer,
  events : EventsReducer
})

export default RootReducer;