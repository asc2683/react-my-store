import React from 'react';
import './Button.css';

const Button = ({ item, handleClick, label }) => {
  return (
    <button
      type="button"
      data-testid="button"
      className="button"
      onClick={() => handleClick(item)}
    >
      {label}
    </button>
  );
};

export default Button;
