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
    <div className="border border-gray-200 shadow-lg rounded-lg p-4">
      <div className="space-y-1 mb-3">
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
      </div>
      <Link href={`/requests/${request._id}`} className="flex justify-end">
        <button className="button">See Details</button>
      </Link>
    </div>
  );
};

export default RequestCard;
