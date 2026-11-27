import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [logindata, setLogindata] = useState({
    username: "",
    password: ""
  });

  function handlechange(e) {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  }

  function formsubmit(e) {
    e.preventDefault();

    const registerdata = location.state;

    if (
      registerdata &&
      logindata.username === registerdata.name &&
      logindata.password === registerdata.password
    ) {
      alert("Login successful");
      navigate("/dashboard", { state: logindata });
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={formsubmit}>
        <h2>Login</h2>
        <p>Welcome Back!</p>

        <input
          type="text"
          placeholder="Username"
          required
          name="username"
          onChange={handlechange}
        />

        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handlechange}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;