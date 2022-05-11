import { useSelector } from 'react-redux';
import { IRootStore } from '../../services/Store';
import WeekHeader from '../WeekHeader/WeekHeader';
import DetailedDay from '../DetailedDay/DetailedDay';
import { GetWeek } from '../../services/helpers/functions';
import './WeekView.scss';

const WeekView = () => {
  const date = useSelector((state :IRootStore) => state.calendar.date);
  const week = GetWeek(date);

  return (
    <div className='week'>
      <WeekHeader />
      <div className='detailed-days-container'>
        {week.map(day => <DetailedDay key={day.toString()} date={day}/>)}
      </div>
    </div>
  )
  
}

export default WeekView;