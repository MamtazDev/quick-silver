import logo from "../assets/logo-black.png";
import "../Components/Auth/Auth.css";

const Validate = ({ title, veriation }) => {
  return (
    <div className="validate  ">
      <img src={logo} alt="" />
      <div className="valid_box text-center">
        <div style={{ maxWidth: "560px", width: "100%", margin: "auto" }}>
          <h2>Validate {title}</h2>
          <p>A unique 6 digit code has been sent</p>
          <input
            type="number"
            className="mb-5"
            placeholder="Enter 6 digit code sent to your email address"
          />
          <div className="d-flex align-items-center flex-wrap gap-3">
            <button className="fs-5 p-3 w-100">Validate</button>
            <button className="fs-5 p-3 w-100">Resend {veriation}</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Validate;
