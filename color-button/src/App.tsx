import React, { useState, ChangeEvent } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName: string): string {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

export const MEDIUM_VIOLET_RED = 'MediumVioletRed';
export const MIDNIGHT_BLUE = 'MidnightBlue';
function App() {
  const [buttonColor, setButtonColor] = useState(MEDIUM_VIOLET_RED);
  const newButtonColor = buttonColor === MEDIUM_VIOLET_RED ? MIDNIGHT_BLUE : MEDIUM_VIOLET_RED;
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
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
