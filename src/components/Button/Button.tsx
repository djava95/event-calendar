import React from "react";
import './Button.scss';

type Props = {
  handleClick : ()=> void,
  children?: JSX.Element | string;
};

const Button = ({children, handleClick} : Props) => {
  return (
    <button className="button" onClick={handleClick}>{children}</button>
  )
}

export default Button;