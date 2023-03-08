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
      name: 'I agree to Terms and Conditions',
    });
    const button = screen.getByRole('button', {
      name: 'Confirm Order',
    });
    return {
      checkbox,
      button,
    };
  };

  test('Checkbox is unchecked and button is disabled by default', () => {
    const { checkbox, button } = renderSummaryForm();
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
  test('Checkbox enables button on first click and disables on second click', () => {
    const { checkbox, button } = renderSummaryForm();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
});
