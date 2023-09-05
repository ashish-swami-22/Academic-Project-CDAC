import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                E-WASTE MANAGEMENT SYSTEM
              </h5>
              <p>
                We collect Plastic and E-waste from various societies and nearby
                localities.We are currently working only in four cities for now
                i.e Mumbai,Hyderabad,Pune and Banglore
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
                <a href="#" className="text-white">
                  Plastic Management
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  E-Waste Management
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link to="/home" className="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link to="/donate" className="text-white">
                  DONATE
                </Link>
              </p>
              <p>
                <Link to="/view" className="text-white">
                  VIEW DONATION
                </Link>
              </p>
              <p>
                <Link to="/profile" className="text-white">
                  PROFILE
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="fa fa-home mr-3"></i>Chennai
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i>swamiashish2511@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i>+91 9834640161
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i>+91 7566238111
              </p>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row align-items-center">
            <div className="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2022 All rights reserved by:
                <a href="#">
                  <strong className="text-warning">CDAC Chennai</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
