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
    const { checked } = event.target;
    setButtonDisabled(checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }}
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
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
