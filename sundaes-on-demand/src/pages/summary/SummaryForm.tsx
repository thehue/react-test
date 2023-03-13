import * as React from 'react';
import { ChangeEvent, ReactElement, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SummaryForm = (): ReactElement => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
  };

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId={'terms-and-conditions'}>
        <Form.Check
          type={'checkbox'}
          checked={checked}
          onChange={handleChangeCheckbox}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button disabled={!checked} type={'submit'} variant={'primary'}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
