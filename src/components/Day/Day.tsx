import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setMonth } from '../../services/actions/CalendarActions';
import { sameDay } from '../../services/helpers/functions';
import './Day.scss';

type PropsI = {
  date : Date,
}

const Day = ({date}: PropsI) => {
  const dispatch = useDispatch();
  const selectDate = (date : Date) => {
    dispatch(setMonth(date));
  } 
  const selectedDate = useSelector((state :IRootStore) => state.calendar.date);
  const today = new Date();
  const checkToday = sameDay(date, today);
  const selectedDay =  sameDay(date, selectedDate)
  
  return (
    <div className={`day-container ${(selectedDate.getMonth() === date.getMonth()) ? '' : 'inactive'}`}>
      <span onClick={() => selectDate(date)} className={`day ${checkToday ? 'today' : ''} ${selectedDay ? 'selected' : ''}`}>{date.getDate()}</span>
    </div>
  )
}

export default Day;