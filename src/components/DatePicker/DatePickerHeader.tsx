import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../services/Store';
import { setDatePickerMonth } from '../../services/actions/DatePickerActions';
import Button from '../Button/Button';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import { monthNames } from '../../constants/constants';
import '../CalendarHeader/CalendarHeader.scss';

const DatepickerHeader = () => {
  const date = useSelector((state :IRootStore) => state.datePicker.date);
  const dispatch = useDispatch();
  const switchMonth = (m : number) => {
    let updMonth = new Date(date.setMonth(date.getMonth() + m))
    dispatch(setDatePickerMonth(updMonth));
  } 

  return (
    <header className='cal-header-container'>
      <nav className='month-navigation'>
        <div className='month'>{`${monthNames[date.getMonth()]} ${date.getFullYear()}`}</div>
        <div className='buttons-container'>
          <Button handleClick={() => switchMonth(-1)}>
            <div className='icon-container' title='Previous month'>
            <ArrowIcon direction={'left'} size={12} />
            </div>
          </Button>
          <Button handleClick={()=>switchMonth(1)}>
            <div className='icon-container' title='Next month'> 
            <ArrowIcon direction={''} size={12}/>
            </div>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default DatepickerHeader;