import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  function onClickButton(): void {
    setButtonColor(newButtonColor);
  }

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={onClickButton}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
