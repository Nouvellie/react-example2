import React from 'react';
import '../static/button.css'

function ReactButton({ text, isClick, handleClick }) {
  return (
    <button 
      className={isClick ? 'click-button' : 'reset-button'}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default ReactButton;