import Navbar from "@/app/Components/Navbar/Navbar";
import Title from "@/app/Components/Title/Title";
import React from "react";

const DonorDetails = () => {
  return (
    <div className="pt-20">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Title */}
      <Title title="Donor Details"></Title>
    </div>
  );
};

export default DonorDetails;
