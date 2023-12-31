import React from "react";
import "./styling/logins.css";
import { useState } from "react";
import SignUp from "./signUp";

export default function Logins() {
  return (
    <div className="logins" id="logins">
      <div className="farmers">
        <h2 className="heading">Farmer Login</h2>
        <form className="inputs">
          <input
            className="text"
            type="text"
            placeholder="Username or Email"
            required
          />
          <input
            className="text"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" id="button">
            Login
          </button>
        </form>
        <p className="login-text">
          Don't have an account yet?<a className="slinks" href="#">SignUp</a>
        </p>
        <p className="login-text">
          Forgot your password?<a className="slinks" href="#">Reset Password</a>
        </p>
      </div>
      {/* <div className="farmers">
        <h2 className="heading">Customer Login</h2>
        <form className="inputs">
          <input
            className="text"
            type="text"
            placeholder="Username or Email"
            required
          />
          <input
            className="text"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" id="button">
            Login
          </button>
        </form>
        <p className="login-text">
          Don't have an account yet? <a href="#" className="slinks">SignUp</a>
        </p>
        <p className="login-text">
          Forgot your password? <a href="#" className="slinks">Reset Password</a>
        </p>
      </div> */}
    </div>
  );
}
