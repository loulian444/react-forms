import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [error, setError] = useState(null);

  const updateUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const updatePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`hello`);
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input value={username} onChange={updateUsernameInput} />
        </label>
        <br />
        <label>
          Password:
          <input value={password} onChange={updatePasswordInput} />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
