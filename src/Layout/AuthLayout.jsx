import React from "react";
import logo from "../assets/logo.png";
import girl from "../assets/girl.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth ">
      <div className="row m-0 h-100">
        <div className="col-lg-6 right_side d-flex flex-column align-items-start justify-content-between">
          <img src={logo} alt="" />
          <div className="d-flex justify-content-center w-100">
            <img className=" img-fluid" src={girl} alt="" />
          </div>
          <div></div>
        </div>
        <div
          style={{ overflowY: "scroll" }}
          className="col-lg-6 left_side  h-100"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
