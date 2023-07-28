import { useState } from "react";
import "./App.css";
import SignUpForm from "./Components/SignUpForm.jsx";
import Authenticate from "./Components/Authenticate.jsx";

const App = () => {
  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  );
};

export default App;
