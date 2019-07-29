import React from "react";

import "./formInput.scss";

const FormInput = ({ onChange, label, value, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={onChange} {...otherProps} />
    {label ? (
      <label className={`${!value ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
