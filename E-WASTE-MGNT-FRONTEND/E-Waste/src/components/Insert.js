import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import swal from "sweetalert2";

const Insert = () => {
  useEffect(() => {
    document.title = "Donate";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);

  let uname = sessionStorage.getItem("username");
  let uemail = sessionStorage.getItem("userSession");
  let [uaddress, setUaddress] = useState("");
  let [ucity, setUcity] = useState("");
  let [uplasticQty, setUplasticQty] = useState("");
  let [uewasteQty, setUewasteQty] = useState("");

  let addressinp = (e) => setUaddress(e.target.value);
  let cityinp = (e) => setUcity(e.target.value);
  let plasticinp = (e) => setUplasticQty(e.target.value);
  let ewasteinp = (e) => setUewasteQty(e.target.value);

  const udata = {
    name: uname,
    email: uemail,
    address: uaddress,
    city: ucity,
    plasticQty: uplasticQty,
    ewasteQty: uewasteQty,
  };

  const insertRequest = (data) => {
    axios.post(`${base_url}/requests`, data).then(
      (response) => {
        swal
          .fire({
            icon: "Success",
            title: "Congratulations",
            text: "You are contributing to a great cause.We will contact you soon via email or phone number provided for collection.",
          })
          .then(function () {
            window.location = "/view";
          });
        clearFields();
        clearError();
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };

  let [eaddress, setEaddress] = useState("");
  let [ecity, setEcity] = useState("");
  let [eplasticQty, setEplasticQty] = useState("");
  let [eewasteQty, setEewasteQty] = useState("");

  const clearFields = () => {
    setUaddress("");
    setUcity("");
    setUplasticQty("");
    setUewasteQty("");
  };

  const clearError = () => {
    document.getElementById("address").classList.remove("is-invalid");
    setEaddress("");

    document.getElementById("city").classList.remove("is-invalid");
    setEcity("");

    document.getElementById("plasticQty").classList.remove("is-invalid");
    setEplasticQty("");

    document.getElementById("ewasteQty").classList.remove("is-invalid");
    setEewasteQty("");
  };

  const validate = () => {
    if (
      uaddress === "" ||
      ucity === "" ||
      uplasticQty === "" ||
      uewasteQty === ""
    ) {
      swal.fire("All fields are required");
    } else if (
      uaddress.search(/^[/#.0-9a-zA-Z\s,-]+$/) < 0 ||
      uaddress.length < 10
    ) {
      document.getElementById("address").classList.add("is-invalid");
      setEaddress("Enter a valid address");
    } else if (uplasticQty.search(/(?=.*[0-9])(?=.*[a-zA-Z]).{6,100}/) < 0) {
      document.getElementById("plasticQty").classList.add("is-invalid");
      setEplasticQty(
        "Enter description having atleast one digit, one character with minimum length of 6 and maximum of 100"
      );
    } else if (uewasteQty.search(/(?=.*[0-9])(?=.*[a-zA-Z]).{6,100}/) < 0) {
      document.getElementById("ewasteQty").classList.add("is-invalid");
      setEewasteQty(
        "Enter description having atleast one digit, one character with minimum length of 6 and maximum of 100"
      );
    } else {
      insertRequest(udata);
      clearError();
      clearFields();
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #019904, #00971d, #00942a, #009235, #008f3e)",
      }}
      className="mt-5 min-vh-100 pb-5"
    >
      <div id="now" className="mt-5 p-2">
        <h5 className="text-center text-white display-4 fw-bold mt-5 mb-5 pt-5">
          Donate Plastic and E-waste
        </h5>

        <form className="row g-3 w-50 m-auto bg-light p-5 fs-5">
          <div className="col-md-12 mb-3">
            <label for="name" className="form-label fs-4">
              Name :-
            </label>
            <input
              style={{ border: "0px none" }}
              type="text"
              className=" bg-light fs-3 fw-bold "
              id="name"
              name="name"
              value={uname}
              disabled
            />
          </div>

          <div className="col-md-12 mb-3">
            <label for="email" className="form-label fs-4">
              Email :-
            </label>
            <input
              type="email"
              style={{ border: "0px none" }}
              className="bg-light fs-3 fw-bold "
              id="email"
              name="email"
              value={uemail}
              disabled
            />
          </div>

          <div className="col-12 mb-3">
            <label for="address" className="form-label">
              Address*
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Building no or Bunglow no./Apartment/Locality/Road or Landmark-Zipcode"
              name="address"
              value={uaddress}
              onFocus={clearError}
              onChange={addressinp}
            />
            <div className="invalid-feedback fs-6 fw-bold">{eaddress}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label for="city" className="form-label">
              City*
            </label>
            <div className="col-md-6 "></div>
            <select
              type="text"
              className="form-select"
              id="city"
              name="city"
              value={ucity}
              onFocus={clearError}
              onChange={cityinp}
            >
              <option selected>Choose City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banglore">Banglore</option>
              {/* <option value="Banglore">Nashik</option>
              <option value="Banglore">Jalgaon</option>
              <option value="Banglore">A.Nagar</option>
              <option value="Banglore">Kopargaon</option> */}
            </select>
            <div class="invalid-feedback fs-6 fw-bold">{ecity}</div>
          </div>

          <div className="col-md-12 mb-1">
            <label for="plasticQty" className="form-label">
              Mention description of Plastic*
            </label>
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              id="plasticQty"
              name="plasticQty"
              placeholder="Eg:-50 plastic bottles,20 kgs of plastic waste etc....."
              value={uplasticQty}
              onFocus={clearError}
              onChange={plasticinp}
            />
            <div className="invalid-feedback fs-6 fw-bold">{eplasticQty}</div>
          </div>

          <div className="col-md-8 mb-1">
            <label for="ewasteQty" className="form-label">
              Mention description of E-Waste*
            </label>
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              id="ewasteQty"
              name="ewasteQty"
              placeholder="Eg:-2 mobiles, 1 Televsion etc......"
              value={uewasteQty}
              onFocus={clearError}
              onChange={ewasteinp}
            />
            <div className="invalid-feedback fs-6 fw-bold">{eewasteQty}</div>
          </div>

          <div className="col-12 text-center mt-5 mb-5  ">
            <input
              type="button"
              value="Donate"
              className="btn btn-primary btn-lg ps-5 pe-5 p-3"
              onClick={validate}
            />
          </div>

          <label for="city" className="form-label">
              fields marked with * are required.
            </label>
        </form>
      </div>
    </div>
  );
};

export default Insert;
