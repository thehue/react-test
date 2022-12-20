import React, { useState, ChangeEvent } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function onClickButton(): void {
    setButtonColor(newButtonColor);
  }

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;
    if (checked) {
      setButtonDisabled(true);
      return;
    }

    setButtonDisabled(false);
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
      <input type="checkbox" onChange={onChangeCheckbox} />
    </div>
  );
}

export default App;
