function Login() {
  const handleLogin = () => {
    const uname = document.getElementById("uname").value;

    if (uname === "") {
      alert("Please enter username");
    } else {
      alert("Login successful");
    }
  };

  return (
    <div>
      <form>
        Username:
        <input
          type="text"
          id="uname"
          placeholder="Enter username"
        />
        <br /><br />

        Password:
        <input
          type="password"
          placeholder="Enter password"
        />
        <br /><br />

        <button type="button" onClick={handleLogin}>
          Login here
        </button>
      </form>
    </div>
  );
}

export default Login;
