import axios from "axios";
import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import Donationcard from "./Donationcard";

const Donations = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "View Donations";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
    viewDonations(userdata);
  }, []);

  const viewDonations = (data) => {
    axios.post(`${base_url}/viewdonations`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: "There are no donations",
            icon: "error",
            button: "Ok",
          });
        }
        setRequests(response.data);
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
  const [requests, setRequests] = useState([]);

  return (
    <div
      className="p-5 "
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <h1 className="text-center text-white display-3 pt-5 mt-5 fw-bold ">
        Donations
      </h1>
      <table className="table table-striped table-dark  m-auto mt-5 mb-5">
        <thead>
          <tr className="fs-4">
            <th scope="col">Donation ID</th>
            <th scope="col">Plastic Donated</th>
            <th scope="col">E-waste Donated</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((item) => <Donationcard request={item} />)
          ) : (
            <h2 className="text-center m-5 p-5">No donations done yet</h2>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Donations;
