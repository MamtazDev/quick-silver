import "./Shared.css";
import profile from "../../assets/profile.png";
import arrow from "../../assets/green-arrow.png";
import dot from "../../assets/dot.png";
import manage from "../../assets/manage.png";
import signOut from "../../assets/sign-out.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header ">
      <h2 className="fs-3">Office Dashboard</h2>
      <div className="d-flex align-items-center gap-5">
        <input type="search" placeholder="Search" />
        <div
          onClick={() => setShow(!show)}
          className="d-flex align-items-center gap-2 w-100 profile "
        >
          <img
            height={40}
            width={40}
            className="rounded-circle"
            src={profile}
            alt=""
          />
          <p className="name">John Doe</p>
          <img src={arrow} alt="" />
        </div>
        {show && (
          <div className="d-flex align-items-start gap-4 justify-content-between profile_box fs_18">
            <div className="d-flex align-items-start gap-4  ">
              <img
                height={59}
                width={59}
                className="rounded-circle"
                src={profile}
                alt=""
              />
              <div>
                <div>
                  <p className="name ">John Doe</p>
                  <p className="email ">john.doe@gmail.com</p>
                </div>
                <Link className=" d-flex align-items-center gap-3 " to="#">
                  <img src={manage} alt="" />
                  Manage account
                </Link>
                <Link className=" d-flex align-items-center gap-3" to="#">
                  <img src={signOut} alt="" />
                  Sign Out
                </Link>
              </div>
            </div>
            <img src={dot} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
