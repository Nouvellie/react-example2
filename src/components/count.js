import React from 'react';
import '../static/count.css';

function Count({ clicksNumber }) {
  return (
    <div className='react-count'>
      {clicksNumber}
    </div>
  );
}

export default Count;