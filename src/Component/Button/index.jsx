import React from 'react';
import '../../Scss/Component/_button.scss';

const Button = props => {
  return (
    <button {...props} className={'button'}>
      {props.children}
    </button>
  );
};

export default Button;
