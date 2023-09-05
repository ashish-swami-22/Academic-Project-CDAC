import React from "react";
import "../css/home.css";
import img from "../images/swatcha.jpeg";

function About() {
  return (
    <div
      className="min-vh-100 pt-5 text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <h1 className="mt-5 pt-5 text-center  display-2 fw-bold">E-WASTE MANAGEMENT SYSTEM</h1>
      <div className="container-fluid p-5 ">
        <div className="row m-auto">
          <div className="col-lg-8">
            <h1>
              <b>ABOUT US</b>
            </h1>
            <br />
            <h1>
              <strong>Our Mission</strong>
            </h1>
            <h4>
              <p>
                Our mission is to ensure consumption is more responsible and
                less burdensome on the planet and the poor. We strive to reduce
                waste and unsustainable consumption and enable better management
                of that waste which is generated. We also focus on fighting air
                pollution through making science and policy more accessible to
                everyone, thus creating public vigilance and action. In all our
                work, vulnerable populations-the poor, the marginalized,
                children and women-will remain the sharpest on our radar. The
                programme aims to create effective awareness in various levels
                (of society) to reduce the adverse impact on environment and
                health arising out of the polluting technologies used in
                recycling plastic and e-waste in the unorganized sector.
              </p>
            </h4>
            <br />
          </div>
          <div className="col-lg-4 mt-5">
            <img
              src={img}
              alt="E-WASTE MANAGEMENT SYSTEM"
              className="card img-fluid"
              style={{ width: "415.99px", height: "250px" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="font text-center">
              <i className="fas fa-recycle fa-9x " />
            </div>
            <br />
            <div className=" text-center m-auto">
              <div className="row ">
                <h2>
                  <i className=" fas fa-circle "> Reduce</i>
                  <i className=" fas fa-circle "> Reuse </i>
                  <i className=" fas fa-circle "> Recycle</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1>
              <strong>Our Vision</strong>
            </h1>
            <br />
            <h4>
              <p>Inclusive, Sustainable and Equitable Growth For All</p>
            </h4>
            <h4>
              <p>
                We bring together nature, people and technology to provide the
                most impactful waste management solutions that maximise resource
                recovery
              </p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
