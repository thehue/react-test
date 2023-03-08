import * as React from 'react';
import { ChangeEvent, ReactElement, useState } from 'react';

const SummaryForm = (): ReactElement => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <label htmlFor={'agreement'}>I agree to Terms and Conditions</label>
      <input type={'checkbox'} id={'agreement'} checked={checked} onChange={handleChangeCheckbox} />
      <button disabled={!checked}>Confirm Order</button>
    </div>
  );
};

export default SummaryForm;
