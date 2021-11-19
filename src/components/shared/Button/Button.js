import React from 'react';
import './Button.css';

const Button = ({ label, item, handleClick }) => (
  <button
    data-testid="button"
    className='button' 
    onClick={() => handleClick(item)}>{label}
  </button>
)

export default Button;
