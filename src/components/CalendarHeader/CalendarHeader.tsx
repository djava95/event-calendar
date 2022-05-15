import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import { monthNames } from '../../constants/constants';
import './CalendarHeader.scss';

interface propsI {
  showCloseButton : boolean,
  handleClose : ()=> void,
  date : Date,
  setMonth : (date : Date) => any
}

const CalendarHeader = ({date, setMonth, showCloseButton, handleClose}: propsI) => {
  const dispatch = useDispatch();
  const switchMonth = (m : number) => {
    let updMonth = new Date(date.setMonth(date.getMonth() + m))
    dispatch(setMonth(updMonth));
  } 

  return (
    <header className='cal-header-container'>
      <nav className='month-navigation'>
        <div className='month'>{`${monthNames[date.getMonth()]} ${date.getFullYear()}`}</div>
        <div className='buttons-container'>
          <Button handleClick={() => switchMonth(-1)}>
            <div className='icon-container' title='Previous month'>
              <ArrowIcon reverted={true} size={12} />
            </div>
          </Button>
          <Button handleClick={()=>switchMonth(1)}>
            <div className='icon-container' title='Next month'> 
              <ArrowIcon size={12}/>
            </div>
          </Button>
        </div>
        {showCloseButton ? (
          <div className="close-button-container">
            <Button handleClick={handleClose}> 
              <div className='close' title='close'> &#10006; </div>
            </Button>
          </div>
        ): ''}
      </nav>
    </header>
  )
}

export default CalendarHeader;