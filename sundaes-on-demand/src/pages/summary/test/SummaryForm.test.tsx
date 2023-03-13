import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
// Checkbox is unchecked by default
// Checking checkbox enables button
// Unchecking checkbox again disables button
// Find checkbox and button using { name } option
// * Use mockup for 'name' option values
// https://testing-library.com/docs/react-testing-library/cheatsheet/
// https://github.com/testing-library/jest-dom

describe('SummaryForm', () => {
  const renderSummaryForm = () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i, // ignore case (대소문자 구분 안함)
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });
    return {
      checkbox,
      confirmButton,
    };
  };

  test('initial conditions', () => {
    const { checkbox, confirmButton } = renderSummaryForm();
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
  test('Checkbox enables button on first click and disables on second click', () => {
    const { checkbox, confirmButton } = renderSummaryForm();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
});
