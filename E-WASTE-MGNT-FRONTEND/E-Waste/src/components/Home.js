import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import mumimg from "../images/Mumbai.jpg";
import puneimg from "../images/pune.png";
import hydimg from "../images/hyderbad.jpg";
import bangimg from "../images/banglore.jpg";

function Home() {
  useEffect(() => {
    document.title = "Home";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);


  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
      }}
    >
      <div className="bgimg">
        <div className="container text-center text-white headerset">
          <h2>EACH YEAR, INDIA GENERATES</h2>
          <h1>63 MILLION TONNES OF WASTE</h1>
          <h3>
            By 2050, global waste levels will reach 3.4 billion tonnes per year
            unless waste generated per person is managed sustainably
          </h3>
          <br />
          <Link to="/aboutus" className="btn btn-warning text-white btn-lg mt-5">
            ABOUT US
          </Link>
        </div>
      </div>

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

      <section
        className="portfolio"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        }}
      >
        <div className="container text-center ">
          <h1>LATEST BLOGS</h1>
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img
                  src={blog1}
                  className="card img-fluid"
                  style={{ width: "415.99px", height: "250px" }}
                 alt=""/>
                <div className="card body ">
                  <h2 className="card-title">
                    Recycling of e-waste in India and its potential
                  </h2>
                  <p className="card-text text-left">
                    Electronic waste (e-waste) typically includes discarded
                    computer monitors, motherboards, mobile phones and chargers,
                    compact discs, headphones, television sets, air conditioners
                    and refrigerators. According to the Global E-Waste Monitor
                    2017, India generates about 2 million tonnes (MT) of e-waste
                    annually and ranks fifth among e-waste producing countries,
                    after the US, China, Japan and Germany. In 2016-17, India
                    treated only 0.036 MT of its e-waste.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img
                  src={blog2}
                  className="card img-fluid"
                  style={{ width: "415.99px", height: "250px" }}
                alt=""/>
                <div className="card body">
                  <h2 className="card-title">Nirmalaya Collection</h2>
                  <p className="card-text text-left">
                    Every Ganapati Visarjan, rivers are choked with hundreds of
                    tonnes of paper, plastic, thermocol, flowers fruits, and
                    cloth. This practice pollutes the city’s already stressed
                    rivers. Zero Waste ‘Nirmalaya’ Project enables devotees to
                    recycle their votive offerings. Hundreds of corporate,
                    citizen and student volunteers work with Zero Waste
                    waste-pickers and staff to divert over a hundred tonnes of
                    this waste each year from the rivers to the recycling
                    stream. While coconuts and fruit are consumed or resold,
                    partner agencies compost flowers, leaves and other
                    biodegradable waste.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img
                  src={blog3}
                  className="card img-fluid"
                  style={{ width: "415.99px", height: "250px" }}
                 alt=""/>
                <div className="card body">
                  <h2 className="card-title">
                    8 Reasons To Recycle Your Old Home Appliance
                  </h2>
                  <p className="card-text text-left">
                    These are the 8 main reasons:-
                    <ul>
                      <li>Dangerous effects of non-recycled electronics</li>
                      <li>Recycling electronics is easier now</li>
                      <li>Data Destruction can be securely performed</li>
                      <li>Get precious metals out of your e-waste</li>
                      <li>Haphazard disposition is illegal</li>
                      <li>Help others in need</li>
                      <li>Recycling old gadgets could save money</li>
                      <li>Lesser production due to e-waste recycling</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage:
            "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
        }}
      >
        <div className="text-center p-5">
          <h1 color="blue">We are currently working in these cities</h1>
          <hr className="hrline" />
          <br />
          <br />
          <div className="img1">
            <img src={mumimg}  height="250" width="310" alt=""/>
            <img src={puneimg} alt="pune" height="250" width="310" />
            <img src={hydimg} alt="hyd" height="250" width="310" />
            <img src={bangimg} alt="banglore" height="250" width="310" />
          </div>
          <div className="fourcities">
            <h3 className="fmumbai">
              Mumbai <br />
              900k+ Tonnes
            </h3>
            <h3 className="fpune">
              Pune
              <br />
              750k+ Tonnes
            </h3>
            <h3 className="fbanglore">
              Hyderabad
              <br />
              456k+ Tonnes
            </h3>
            <h3 className="fbanglore">
              Banglore
              <br />
              300k+ Tonnes
            </h3>
          </div>
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}

export default Home;
