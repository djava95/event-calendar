import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setMonth } from '../../services/actions/CalendarActions';
import EventForm from '../Events/EventForm/EventForm';
import Button from '../Button/Button';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import { monthNames } from '../../constants/constants';
import './WeekHeader.scss';

const WeekHeader = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const date = useSelector((state :IRootStore) => state.calendar.date);
  const defaultStartTime = new Date(date.setHours(12)); 
  const defaultEndTime = new Date(date.setHours(13))
  
  const switchWeek = (m : number) => {
    let updWeek = new Date(date.setDate(date.getDate() + m))
    dispatch(setMonth(updWeek));
  } 
  
  const switchToday  = () => {
    const today = new Date();
    dispatch(setMonth(today));
  }

  const toggleOpen = () => {
    setOpen (prevstate => !prevstate);
  }

  return (
    <header className='week-header-container'>
      <nav className='week-navigation'>
        <div className='buttons-container'>
          <Button handleClick={toggleOpen}>
            <div className='create-event'> Create new event </div>
          </Button>
          <Button handleClick={switchToday}>
            <div className='switch-today'> Today </div>
          </Button>
          <div className='switch-week-buttons'>
            <Button handleClick={() => switchWeek(-7)}>
              <div className='icon-container' title='Previous week'>
                <ArrowIcon reverted={true} />
              </div>
            </Button>          
            <Button handleClick={()=>switchWeek(7)}>
              <div className='icon-container' title='Next week'> 
                <ArrowIcon />
              </div>
            </Button>
          </div>   
        </div>
        <div className='month'>
          {`${monthNames[date.getMonth()]} ${date.getFullYear()}`} 
        </div>
      </nav>
      {open? (
        <EventForm startDate={defaultStartTime} endDate={defaultEndTime} handleClose={toggleOpen} />
      )
      : '' }
    </header>
  )
}

export default WeekHeader;