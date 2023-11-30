import React from "react";
import AuthLayout from "../../Layout/AuthLayout";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="d-flex justify-content-end gap-2 align-items-center">
          <p className="dont fs-6">Already have any account?</p>{" "}
          <Link to="/" className="signUn_btn fs_20">
            Sign In
          </Link>
        </div>
        <form>
          <h2 className="fs-2">Sign Up</h2>
          <p className="fs-6 subtitle">To continue to the system</p>
          <div className="d-flex align-items-center gap-3 w-100 mb-4">
            <div className="w-100">
              <label className="fs-6" htmlFor="fname">
                First name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter your  first name"
              />
            </div>
            <div className="w-100">
              <label className="fs-6" htmlFor="email">
                Last name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="fs-6" htmlFor="cname">
              Company name
            </label>
            <input
              type="text"
              name="cname"
              id="cname"
              placeholder="Enter your company name"
            />
          </div>
          <div className="mb-4">
            <label className="fs-6" htmlFor="semail">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="semail"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="fs-6" htmlFor="cell">
              Cell phone number
            </label>
            <input
              type="tel"
              name="cell"
              id="cell"
              placeholder="Enter your cell phone number"
            />
          </div>
          <div className="mb-4">
            <label className="fs-6" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-5">
            <label className="fs-6" htmlFor="cpassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Password"
            />
          </div>

          <button className="signIn_btn fs-5">Create account </button>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
