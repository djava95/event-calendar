import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setMonth } from '../../services/actions/CalendarActions';
import Day from '../Day/Day';
import { dayNames } from '../../constants/constants';
import './Calendar.scss'

const Calendar = () => { 
  const days = useSelector((state :IRootStore) => state.calendar.days);
  const dispatch = useDispatch();
  const date = new Date();

  useEffect(()=>{
    dispatch(setMonth(date))
  },[])

  return (
    <div className='container'>
      <div className='daynames-container'>
        {dayNames.map(day => <span key={day.name} className='day-name'> {day.name} </span> )}
      </div>
      <div className='days-container'>
        {days.map(day => <Day key={day.toString()} date={day}/>)} 
      </div>
    </div>
  )
}

export default Calendar;