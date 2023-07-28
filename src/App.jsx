import { useState } from "react";
import "./App.css";
import SignUpForm from "./Components/SignUpForm.jsx";
import Authenticate from "./Components/Authenticate.jsx";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
};

export default App;
