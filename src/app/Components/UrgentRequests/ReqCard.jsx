import Link from "next/link";
import React from "react";

const reqCard = ({ req }) => {
  const {
    id,
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
  } = req;
  return (
    <div className="shadow-sm rounded-xl p-4 space-y-1 bg-[#d8d8d842] border border-gray-100 text-black">
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
      <div className="flex justify-end mt-6">
        <Link href={`/requests/${req.id}`}>
          <button className="button">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default reqCard;
