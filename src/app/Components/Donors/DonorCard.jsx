import React from "react";

const DonorCard = ({ donor }) => {
  const { name } = donor;
  return (
    <div className="border rounded-sm p-4">
      <h1>{name}</h1>
    </div>
  );
};

export default DonorCard;
