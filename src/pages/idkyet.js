import React from 'react';
import "./style.css";
import Container from "../components/Container";

function Login() {
  return (
    <div className="genBackground">
      <Container>
      <div className="loginContainer">
        <h1 className="login">
          Login
                </h1>
        <form className="loginInput">
          <input type="email" className="form-control" aria-describedby="email" placeholder="Email" />
          <input type="password" className="form-control" aria-describedby="password" placeholder="Password" />
          <button type="submit" className="loginBtn">Login</button>
        </form>
      </div>
      </Container>
    </div>
  )
}

export default Login;