import { useDispatch } from 'react-redux';
import { sameDay } from '../../services/helpers/helpers';
import './Day.scss';

type PropsI = {
  date : Date,
  selectedDate : Date, 
  setMonth : (date : Date)=> any
}

const Day = ({date, selectedDate, setMonth}: PropsI) => {
  const dispatch = useDispatch();
  const selectDate = (date : Date) => {
    dispatch(setMonth(date));
  } 
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