import { useState } from 'react';
import { showTime } from '../../../services/helpers/helpers';
import DetailedEvent from '../DetailedEvent/DetailedEvent';
import Modal from '../../Modal/Modal';
import './EventPreview.scss';

interface propsI {
  id : string,
  title : string,
  description : string,
  startDate : Date,
  endDate : Date,
  labelColor : string
}

const EventPreview = ({id, title, description, startDate, endDate, labelColor}: propsI) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(prevState => !prevState);
  }
  return (
   <>
      <div style={{backgroundColor : labelColor}} className="event-preview-container" onClick={toggleOpen}>
        <div className='title'> {title} </div>
        <div className="time"> {`${showTime(startDate)}-${showTime(endDate)}`} </div>
      </div>
      {open ? (
        <Modal>
          <DetailedEvent id={id} title={title} description={description} 
          startDate={startDate} endDate={endDate} labelColor={labelColor} handleClose={toggleOpen}  
        />
        </Modal>
      ): ''}
   </> 
  )
}

export default EventPreview