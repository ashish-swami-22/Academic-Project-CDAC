import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Navbar() {
  const name = sessionStorage.getItem("username");
  const endSession = () => {
    sessionStorage.removeItem("userSession");
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("username");
    localStorage.removeItem("user");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div className="container">
          <Link
            className="navbar-brand text-warning ps-5 font-weight-bold "
            to="/home"
          >
            E-WASTE MANAGEMENT 
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="collapsenavbar">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item  ms-4 mt-2 fs-5">
                <Link to="/home" className="nav-link text-white ">
                  HOME
                </Link>
              </li>

              <li className="nav-item  ms-4 mt-2 fs-5">
                <Link to="/donate" className="nav-link text-white ">
                  DONATE
                </Link>
              </li>

              <li className="nav-item ms-4 mt-2 fs-5">
                <Link to="/view" className="nav-link text-white">
                  PENDING DONATIONS
                </Link>
              </li>

              <li className="nav-item  ms-4 mt-2 fs-5">
                <Link to="/donations" className="nav-link text-white">
                  VIEW DONATIONS
                </Link>
              </li>

              <li className="nav-item  ms-4 mt-2 fs-5">
                <Link to="/profile" className="nav-link text-white">
                  PROFILE
                </Link>
              </li>

              <li className="nav-item  nav-logout mt-3 ">
                <form onSubmit={endSession} action="/">
                  <button type="submit" className="btn btn-sm btn-primary">
                    <span className="fs-6 ">LOGOUT</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="ps-3 pe-5 text-center">
          <h5 className="text-white ">
            Welcome
            <br />
            <span>{name}</span>
          </h5>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
