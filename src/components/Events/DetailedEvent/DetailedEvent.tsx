import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../../services/actions/EventActions';
import { showDate, showTime } from '../../../services/helpers/helpers';
import EventForm from '../EventForm/EventForm';
import Modal from '../../Modal/Modal';
import ConfirmationDialogue from '../../ConfirmationDialogue/ConfirmationDialogue';
import Button from '../../Button/Button';
import './DetailedEvent.scss';

interface propsI {
  id : string,
  title : string,
  description : string,
  startDate : Date,
  endDate : Date,
  labelColor : string
  handleClose : ()=> void
}

const DetailedEvent = ({id, title, description, startDate, endDate, labelColor, handleClose}: propsI) => {
  const dispatch = useDispatch();
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleEdit = () => {
    setEditOpen(prevState => !prevState);
  }
  const toggleOpen = () => {
    setDialogueOpen(prevState => !prevState);
  }
  const handleDelete = () => {
    dispatch(deleteEvent(id));
    handleClose();
  }

  return (
    <>
      <div className='detailed-event-container'>
        <div className='event-info'>
          <div className='title'> {title} </div>
          <div className='description'> {description} </div>
          <div className='date'> Date: {showDate(startDate)} </div>
          <div className='start-time'> Start time: {showTime(startDate)} </div>
          <div className="end-time"> End time: {showTime(endDate)} </div>
          <div className='label-color-container'>
            <div>Label color:</div>
            <div className='label-color' style={{backgroundColor : labelColor}}></div>
          </div>
        </div>
        <div className='buttons-container'>
          <Button handleClick={handleEdit}> 
            <div className="edit">Edit</div> 
          </Button>
          <Button handleClick={toggleOpen}>
            <div className="delete">Delete</div> 
          </Button>
          <Button handleClick={handleClose}> 
            <div className="close">Close</div> 
          </Button>
        </div>
        {dialogueOpen ? (
          <Modal>
            <ConfirmationDialogue handleDelete={handleDelete} handleCancel={toggleOpen} />
          </Modal>      
        ) : ''}
      </div>
      {editOpen ? (
        <EventForm id={id} title={title} description={description} startDate={startDate} 
        endDate={endDate} labelColor={labelColor}  handleClose={handleEdit}/>
      ) : ''}
    </>
  ) 
}

export default DetailedEvent;