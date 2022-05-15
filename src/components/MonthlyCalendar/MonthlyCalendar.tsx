import { useSelector } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setMonth } from '../../services/actions/CalendarActions';
import Calendar from '../Calendar/Calendar';
import CalendarHeader from '..//CalendarHeader/CalendarHeader';
import './MonthlyCalendar.scss';

const MonthlyCalendar = ({handleClose = () => {}}) => {
  const date = useSelector((state :IRootStore) => state.calendar.date);
  const days = useSelector((state :IRootStore) => state.calendar.days);

  return (
    <div className="monthly-calendar">
      <CalendarHeader date={date} setMonth ={setMonth} showCloseButton={false} handleClose={handleClose}/>
      <Calendar selectedDate={date} days={days} setMonth ={setMonth}/>
    </div>
  )
};

export default MonthlyCalendar;