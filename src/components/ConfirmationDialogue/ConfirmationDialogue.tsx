import Button from "../Button/Button";
import './ConfirmationDialogue.scss';

interface propsI {
  handleDelete : () => void,
  handleCancel : () => void
}

const ConfirmationDialogue = ({handleDelete, handleCancel} : propsI ) => {
  return (
    <div className='dialogue-main-container'>
      <div className='dialogue-content'>
        Are you sure you want to permanently delete this event?
      </div>
      <div className='buttons-container'>
        <Button handleClick={handleDelete}>
          <div className='delete'> Delete </div>
        </Button>
        <Button handleClick={handleCancel}>
          <div className='cancel'> Cancel </div>
        </Button>
      </div>
    </div>
  )
}

export default ConfirmationDialogue;