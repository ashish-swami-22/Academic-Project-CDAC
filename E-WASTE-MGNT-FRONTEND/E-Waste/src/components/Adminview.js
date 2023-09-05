import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Admincolcard from "./Admincolcard";
import swal from "sweetalert2";

function Adminview() {
  useEffect(() => {
    document.title = "View Collections";
    if (sessionStorage.getItem("admin") !== "admin") {
      window.location = "/";
    }
    viewCollection();
  }, []);

  const viewCollection = () => {
    axios.get(`${base_url}/viewcollections`).then(
      (response) => {
        console.log(response);
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
  console.log(requests);
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <div className="container-fluid pt-5 ">
        <h1 className="text-center text-white mt-5 pt-5">
          View Collected Donations
        </h1>
        <table
          className="table table-striped table-light  m-auto mt-5 "
          style={{ width: "90%" }}
        >
          <thead>
            <tr className="fs-4">
              <th scope="col">Donation ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Plastic Donated</th>
              <th scope="col">E-waste Donated</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((item) => <Admincolcard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No request cards</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminview;
