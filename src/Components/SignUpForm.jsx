import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [error, setError] = useState(null);

  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input />
        </label>
        <br />
        <label>
          Password:
          <input />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
