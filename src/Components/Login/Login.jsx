import React, { useState } from "react";
import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link>
        <img
          src="http://pngimg.com/uploads/amazon/small/amazon_PNG24.png"
          alt=""
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            vlaue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By Signing-in you agree to the AAMAZON CLONE Conditions & of Use &
          Sale. Please see our Privacy Notice , our Cookies Notice and Our
          Intrest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          {" "}
          Create Your Account
        </button>
      </div>
    </div>
  );
};

export default Login;
