import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App, { MEDIUM_VIOLET_RED, MIDNIGHT_BLUE, replaceCamelWithSpaces } from './App';

const CHANGE_TO_MIDNIGHT_BLUE = 'Change to Midnight Blue';
const CHANGE_TO_MEDIUM_VIOLET_RED = 'Change to Medium Violet Red';

test('button has correct initial color, and updates when clicked', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: CHANGE_TO_MIDNIGHT_BLUE });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: MEDIUM_VIOLET_RED });

  // click button
  fireEvent.click(colorButton);

  //expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: MIDNIGHT_BLUE });

  // expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton).toHaveTextContent(CHANGE_TO_MEDIUM_VIOLET_RED);
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: CHANGE_TO_MIDNIGHT_BLUE,
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button',
  });
  const button = screen.getByRole('button', {
    name: CHANGE_TO_MIDNIGHT_BLUE,
  });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('Disabled button has gray background and reverts to ', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button',
  });
  const button = screen.getByRole('button', {
    name: CHANGE_TO_MIDNIGHT_BLUE,
  });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: MEDIUM_VIOLET_RED });
});

test('Clicked disabled button has gray background and reverts to MidnightBlue', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button',
  });
  const button = screen.getByRole('button', {
    name: CHANGE_TO_MIDNIGHT_BLUE,
  });

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: MIDNIGHT_BLUE });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
