import React, { useState, ChangeEvent } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onClickButton = (): void => {
    setButtonColor(newButtonColor);
  };

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    setButtonDisabled(event.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={onClickButton}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={buttonDisabled}
        onChange={onChangeCheckbox}
      />
    </div>
  );
}

export default App;
