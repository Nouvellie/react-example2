import './App.css';
import logo from './imgs/clicker.jpg';
import ReactButton from './components/button';
import Count from './components/count';
import { useState } from 'react';

function App() {

  const [clicksValue, setClicksValue] = useState(0);

  const handleClick = () => {
    setClicksValue(clicksValue+1);
  }

  const resetCount = () => {
    setClicksValue(0);
  }

  return (
    <div className='App'>
      <div className='react-logo-container'>
        <img
          className='react-logo'
          src={logo}
          alt='CLICKER' 
        />
      </div>
      <div className='main-container'>
        <Count
          clicksNumber={clicksValue}
        />
        <ReactButton
          text={'Click'}  
          isClick={true}
          handleClick={handleClick}
        />
        <ReactButton
          text={'Reset'}  
          isClick={false}
          handleClick={resetCount}
        />
      </div>
    </div>
  );
}

export default App;
