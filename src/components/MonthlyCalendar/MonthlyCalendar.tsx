import Calendar from '../Calendar/Calendar';
import CalendarHeader from '..//CalendarHeader/CalendarHeader';
import './MonthlyCalendar.scss';

const MonthlyCalendar = () => {
  return (
    <div className="monthly-calendar">
      <CalendarHeader />
      <Calendar />
    </div>
  )
};

export default MonthlyCalendar;