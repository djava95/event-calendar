import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootStore } from '../../../services/Store';
import { addEvent } from '../../../services/actions/EventActions';
import Button from '../../Button/Button';
import DatePicker from '../../DatePicker/DatePicker';
import DatepickerHeader from '../../DatePicker/DatePickerHeader';
import { colors } from '../../../constants/constants';
import { showDate } from '../../../services/helpers/functions';
import calendar_icon from '../../../assets/calendar-icon.png';
import './EventForm.scss';


const EventForm = ({id = '', title='', description = '', startDate = new Date(), endDate= new Date(), labelColor = '#039BE5', handleClose =()=> {}}) => {
  const dispatch = useDispatch();
  const date = useSelector((state :IRootStore) => state.datePicker.date);

  const [newTitle, setNewTitle] = useState(title);
  const handleTitleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);  
  }

  const [newDescription, setNewDescription] = useState(description);
  const handleDescriptionChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value);
  } 

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(prevState => !prevState);
  }

  const [startHours, setStartHours] = useState(startDate.getHours().toString());
  const handleStartHoursChange = (e : React.ChangeEvent<HTMLInputElement>) => {
   setStartHours(e.target.value);
  }

  const [endHours, setEndHours] = useState(endDate.getHours().toString());
  const handleEndHoursChange = (e : React.ChangeEvent<HTMLInputElement>) => {
   setEndHours(e.target.value);
  }

  const [startMinutes, setStartMinutes] = useState(startDate.getMinutes().toString());
  const handleStartMinutesChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setStartMinutes(e.target.value);
  }

  const [endMinutes, setEndMinutes] = useState(endDate.getMinutes().toString());
  const handleEndMinutesChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setEndMinutes(e.target.value);
  }
  
  const [newLabelColor, setNewLabelColor] = useState(labelColor);
  const handleColorChange = (e : React.MouseEvent<HTMLDivElement>) => {
    setNewLabelColor(e.currentTarget.id)
  }

  const today = new Date();
  id = (id === '') ?  (+today).toString() : id;
  startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +startHours, +startMinutes);
  endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), +endHours, +endMinutes)
  const eventTitle = (newTitle ? newTitle : 'Untitled');
  const eventDescription  = (newDescription? newDescription : 'No description');
  const lblColor = newLabelColor;
  

  const timeValidation = (startDate : Date, endDate : Date ) => {
    return (((+endDate)-(+startDate)) <0 )
  }

  const handleSave = () => {
    if (!timeValidation(startDate, endDate)){
      dispatch(addEvent(id, startDate, endDate, eventTitle, eventDescription, lblColor));
      handleClose();
    }
    
  }

  return (
    <div className="event-form-main-container">
     
      <div className="title-and-description">
        <input className='title' type='text' placeholder='Title' value={newTitle} onChange={handleTitleChange}></input>
        <textarea className='description' rows={5} placeholder='Description' value={newDescription} onChange={handleDescriptionChange}></textarea>
      </div>
      <div className='date-and-time'>
        {(+startDate) < (+today) ? (
          <div className='warning'> Warning! You are trying to add event on a past date.</div>
        ): ''}
        <div className="date-container"> 
          <span> Date : </span>
          <div className='date'> {showDate(date)} </div>
          <div className="icon-container">
            <img className='icon' src={calendar_icon} alt='calendar-icon' onClick={handleOpen}/>
          </div>
          {open ? (
            <div className="datePicker-container"> 
              <DatepickerHeader />
              <DatePicker />
            </div>
          ): ''}
        </div>
        <div className="start-time-container">
          <span className='start-time'> Start Time : </span>
          <input className='hours' type='number' placeholder='HH' value={startHours} onChange={handleStartHoursChange} step='1' min='0' max='23' required={true}></input>
          <span>:</span>
          <input className='minutes' type='number' placeholder='MM' value={startMinutes} onChange={handleStartMinutesChange} step='1' min='0' max='59' required={true}></input>
        </div>  
        <div className="end-time-container">
          <span className="end-time"> End Time : </span>
          <input className='hours' type='number' placeholder='HH' value={endHours} onChange={handleEndHoursChange} step='1' min='0' max='23' required={true}></input>
          <span>:</span>
          <input className='minutes' type='number' placeholder='MM' value={endMinutes} onChange={handleEndMinutesChange} step='1' min='0' max='59' required={true}></input>
          {timeValidation(startDate, endDate) ? (
            <div className='time-error'>Invalid value!</div>): '' }
        </div>
      </div>
      <div className="color-input">
        <span>Label color :</span>
        <div className='color-options-container'>
          {colors.map(
            color => <div key={color} id={color} className={`color-option ${color===newLabelColor ? 'selected' : '' }`} 
            style={{backgroundColor : color}} onClick={handleColorChange}>  </div>
          )}
        </div>
      </div>
      <div className='buttons-container'>
      <Button handleClick={handleSave}> 
        <div className='save'> Save </div> 
      </Button>
      <Button handleClick={handleClose}> 
        <div className='cancel'> Cancel </div> 
      </Button>  
      </div>  
    </div>
  )
}

export default EventForm;