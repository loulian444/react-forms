import { useState } from "react";

const Authenticate = ({ token, setAuthData }) => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://fsa-jwt-practice.herokuapp.com/authenticate`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      setMessage(data.message);
      setAuthData(data.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h2>Authenticate</h2>
      {error ? <p>{error}</p> : null}
      {message ? <p>{message}</p> : null}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
};

export default Authenticate;
