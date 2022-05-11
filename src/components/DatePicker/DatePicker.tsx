import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setDatePickerMonth } from '../../services/actions/DatePickerActions';
import DatePickerDay from './DatePickerDay';
import { dayNames } from '../../constants/constants';
import '../Calendar/Calendar.scss';

const DatePicker = () => { 
  const days = useSelector((state :IRootStore) => state.datePicker.days);
  const date = useSelector((state :IRootStore) => state.datePicker.date);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(setDatePickerMonth(date))
  },[])

  return (
    <div className='container'>
      <div className='daynames-container'>
        {dayNames.map(day => <span key={day.name} className='day-name'> {day.name} </span> )}
      </div>
      <div className='days-container'>
        {days.map(day => <DatePickerDay key={day.toString()} date={day}/>)} 
      </div>
    </div>
  )
}

export default DatePicker;