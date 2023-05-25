import React, { useId } from 'react';

import './Radio.css';

export const Radio = ({ label, ...rest }) => {
  const id = useId();

  return (
    <div className="radioButton">
      <input
        type="radio"
        {...rest}
        id={id}
      />
      <label className="label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
