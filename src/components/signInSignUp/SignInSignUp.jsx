import React from "react";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import "./signInAndSignUp.scss";
const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
