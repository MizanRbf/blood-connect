import Link from "next/link";
import React from "react";

const RequestCard = ({ request }) => {
  const {
    name,
    blood_group,
    contact_number,
    location,
    age,
    gender,
    email,
    last_donation_date,
    available,
    createdAt,
  } = request;
  return (
    <div className="border rounded-sm p-4">
      <h3>{name}</h3>
      <p className="">
        <span className="font-bold">Blood Group: </span>
        {blood_group}
      </p>
      <p className="">
        <span className="font-bold">Contact Number: </span>
        {contact_number}
      </p>
      <p className="">
        <span className="font-bold">Location: </span>
        {location}
      </p>

      <Link href={`/requests/${request.id}`}>
        <button className="button">See Details</button>
      </Link>
    </div>
  );
};

export default RequestCard;
