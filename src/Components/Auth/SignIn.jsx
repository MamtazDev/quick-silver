import React from "react";
import AuthLayout from "../../Layout/AuthLayout";
import "./Auth.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="d-flex justify-content-end gap-2 align-items-center">
          <p className="dont fs-6">Don’t have any account?</p>{" "}
          <Link to="/signup" className="signUn_btn fs_20">
            Sign Up
          </Link>
        </div>
        <form>
          <h2 className="fs-2">Sign In</h2>
          <p className="fs-6 subtitle">To continue to the system</p>
          <div>
            <label className="fs-6" htmlFor="email">
              Email Address
            </label>
            <input
              className="mb-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <Link to="#" className="forgot fs_14">
              Forgot password?
            </Link>
          </div>
          <button className="signIn_btn fs-5">Sign In</button>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
