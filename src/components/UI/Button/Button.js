import React from 'react';

import './Button.css';

const Button = props => {
  // console.log(props.valid)
  let cl = 'button ' + props.valid
  return (
    <button type={props.type} className={cl} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
