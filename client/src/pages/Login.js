import React from "react";
import Header from "../components/Header";
import "../styles/Login.css";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="login-cont-cont">
        <fieldset className="login-fieldset">
          <legend className="login-legend">Login</legend>
          <form className="login-form" action="/loginsubmit" method="POST">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <input type="submit" value="Login" />
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
