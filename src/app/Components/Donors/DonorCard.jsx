import React from "react";

const DonorCard = ({ donor }) => {
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
  } = donor;
  return (
    <div className="border rounded-sm p-4">
      <h3>{name}</h3>
      <p className="">
        <span className="font-bold">Age: </span>
        {age}
      </p>
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

      <p className="">
        <span className="font-bold">Gender: </span>
        {gender}
      </p>
      <p className="">
        <span className="font-bold">Email: </span>
        {email}
      </p>
      <p className="">
        <span className="font-bold">Last Donation Date: </span>
        {last_donation_date}
      </p>
      <p className="">
        <span className="font-bold">Created at: </span>
        {createdAt}
      </p>
      <p className="">
        <span className="font-bold">isAvailable: </span>
        {available}
      </p>
    </div>
  );
};

export default DonorCard;
