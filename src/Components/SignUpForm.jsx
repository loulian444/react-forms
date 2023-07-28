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

    try {
      const response = await fetch(
        `https://fsa-jwt-practice.herokuapp.com/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type='text' value={username} onChange={updateUsernameInput} required />
        </label>
        <br />
        <label>
          Password:
          <input type='password' value={password} onChange={updatePasswordInput} required />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
