import { useSelector } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setDatePickerMonth } from '../../services/actions/DatePickerActions';
import Calendar from '../Calendar/Calendar';
import CalendarHeader from '../CalendarHeader/CalendarHeader';
import './DatePicker.scss';

const DatePicker = ({handleClose = () => {}}) => { 
  const days = useSelector((state :IRootStore) => state.datePicker.days);
  const date = useSelector((state :IRootStore) => state.datePicker.date);
    
  return (
    <div className='date-picker'>
      <CalendarHeader date={date} setMonth ={setDatePickerMonth} showCloseButton={true} handleClose={handleClose} />
      <Calendar selectedDate={date} days={days} setMonth ={setDatePickerMonth}/>
    </div>
  )
}

export default DatePicker;