import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate
  const [formData, setFormData] = useState({ username: "", password: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login Successful")
    navigate ("/dashboard", {
      state:formData
    })
    console.log(formData);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;