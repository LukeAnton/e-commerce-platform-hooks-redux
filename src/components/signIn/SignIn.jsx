import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase";

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
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          onChange={onChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          onChange={onChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
