import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Day from '../Day/Day';
import { dayNames } from '../../constants/constants';
import './Calendar.scss'

interface propsI {
  selectedDate : Date,
  days : Date[],
  setMonth : (date : Date) => any
}

const Calendar = ({selectedDate, days, setMonth}: propsI) => { 
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
        {days.map(day => <Day key={day.toString()} date={day} selectedDate = {selectedDate} setMonth={setMonth}/>)} 
      </div>
    </div>
  )
}

export default Calendar;