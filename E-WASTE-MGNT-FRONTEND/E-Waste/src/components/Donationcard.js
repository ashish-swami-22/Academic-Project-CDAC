import React from "react";

const Donationcard = ({ request }) => {
  return (
    <tr>
      <td className="fs-4">donation{request.reqid}</td>
      <td className="fs-4">{request.plasticQty}</td>
      <td className="fs-4">{request.ewasteQty}</td>
      <td className="fs-6">{request.address}</td>
    </tr>
  );
};

export default Donationcard;
