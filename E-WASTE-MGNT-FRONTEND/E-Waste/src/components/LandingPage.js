import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import "../css/login.css";
import "../css/home.css";
import whatsapplogo from "../images/whatsapplogo.png"
import instalogo from "../images/intsalogo.png"
import facebooklogo from "../images/facebooklogo.png"

export default function LandingPage() {


  useEffect(() => {
    document.title = "E-Waste Management System";
    
  })

  return (
   

    
    <div><div
    style={{
      backgroundImage:
        "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
    }}
  >   
    <div><div>
 <div className="bgimg">
 <div>
  <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
    <div className="container">
      <div></div>
    <div  className="icons-wrapper">
               
                   <a href="facebook.com"  className="ri-instagram-line icon" >
                     <img src={whatsapplogo} alt="image" height={30 } width={30} />
                   </a> 
                   <a href="www.google.com"  className="ri-facebook-line icon">
                     <img src={instalogo} alt="image"  height={30} width={30} />
                   </a>  &nbsp;
                   <a href="www.google.com" className="ri-whatsapp-line icon">
                     <img src={facebooklogo} alt="image" height={23} width={23} />
                   </a>  
                 </div>
      <h1
        className="navbar-brand text-warning fs-3 font-weight-bold ps-5"
        to="/"
      >
        Plastic & E-Waste Management System
      </h1>

   
     
      <div className="collapse navbar-collapse text-center" id="collapsenavbar">
        <ul className="navbar-nav ml-auto ">
        
          <li className="nav-item  ms-4 mt-2 fs-5">
            <Link to="/login" className="nav-link text-white" >
            USER LOGIN
            </Link>
          </li>

          <li className="nav-item  ms-4 mt-2 fs-5">
            <Link to="/login" className="nav-link text-white" >
            ADMIN LOGIN
            </Link>
          </li>

          <li className="nav-item  ms-4 mt-2 fs-5">
            <Link to="/register" className="nav-link text-white">
              SIGNUP
            </Link>
          </li>

        </ul>
      </div>
    </div>

  </nav>
</div>
                    
      <div className="container text-center text-white headerset">
          <h2> CONGRATULATIONS YOU ARE CONTRIBUTING TO A GLOBAL CAUSE  </h2>
        <h2>EACH YEAR, INDIA GENERATES</h2>
        <h1>63 MILLION TONNES OF WASTE</h1>
        <h3>
          By 2050, global waste levels will reach 3.4 billion tonnes per year
          unless waste generated per person is managed sustainably
        </h3>
        <br />
     
      </div>
    </div>
    <div></div>

    <section className="container ourservices text-center">
      <h1>OUR SERVICES</h1>
      <div className="row rowsetting">
        <div className="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
          <div className="imgsetting d-block m-auto bg-dark">
            <i className="fa fa-truck fa-3x text-white"></i>
          </div>
          <h2>Plastic Management</h2>
        </div>

        <div className="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
          <div className="imgsetting d-block m-auto bg-dark">
            <i className="fa fa-truck fa-3x text-white"></i>
          </div>
          <h2>E-Waste Management</h2>
        </div>

        <div className="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
          <div className="imgsetting d-block m-auto bg-dark">
            <i className="fa fa-send fa-3x text-white"></i>
          </div>
          <h2>Public Awareness</h2>
        </div>
      </div>
    </section>

   </div>
    <br />
    <br />
  </div>
    
    
    
    
    
    </div></div>
   
  )
}














