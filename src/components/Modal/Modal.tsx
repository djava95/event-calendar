import { ReactNode } from "react";
import './Modal.scss';

interface propsI {
  children : ReactNode
}

const Modal = ({children}: propsI) => {
  return (
    <div className="modal-container">
      {children}
    </div>   
  )
};

export default Modal;