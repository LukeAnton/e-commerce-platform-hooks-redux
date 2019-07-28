import React, { useState } from "react";
import FormInput from "../formIput/FormInput";

import "./signIn.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onSubmit = e => {
    e.preventDefault();
    setFormData({ email: "", password: "" });
  };
  const onChange = e => {
    const { name, value } = e.target.value;
    setFormData({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={onChange}
          required
        />
        <label>Password</label>
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          required
        />
        <FormInput type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
