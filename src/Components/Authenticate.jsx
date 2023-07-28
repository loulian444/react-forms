const Authenticate = ({ token }) => {
  console.log(token)

  const handleClick = async () => {

  };

  return (
    <>
      <h2>Authenticate</h2>
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
};

export default Authenticate;