import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setMonth } from '../../services/actions/CalendarActions';
import { sameDay } from '../../services/helpers/functions';
import { dayNames } from "../../constants/constants";
import EventPreview from '../Events/EventPreview/EventPreview';
import './DetailedDay.scss';

interface PropsI {
  date : Date
}

const DetailedDay = ({date} : PropsI) => {
  const dispatch = useDispatch();
  const selectDate = (date : Date) => {
    dispatch(setMonth(date));
  }
  const getDayName = () => dayNames.find(day => day.number === date.getDay())?.name;
  const selectedDate = useSelector((state :IRootStore) => state.calendar.date);
  const events = useSelector((state :IRootStore) => state.events.events);
  const selected =  sameDay(date, selectedDate);

  return (
    <div className="detailed-day-container">
      <div onClick={() => selectDate(date)} className={`day-info ${selected ? 'selected' : ''}`}>
        <div className="day-name">{getDayName()}</div>
        <div className="date">{date.getDate()}</div>
      </div>
      <div className="events-container">
        {events.map(event => sameDay(event.startDate, date) ? (
          <EventPreview key={event.id.toString()} id={event.id} title={event.title} 
          description={event.description} startDate={event.startDate} endDate={event.endDate} labelColor={event.labelColor}/>) 
          : ''
        )}
      </div>
    </div>
  )
}

export default DetailedDay;