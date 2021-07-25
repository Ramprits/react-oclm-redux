import React from "react";
import { useTitle } from "react-use";

import SignIn from "../components/sign-in/SignIn";

export default function Login() {
  useTitle("Login Page");
  return (
    <React.Fragment>
      <SignIn content={null} />
    </React.Fragment>
  );
}
