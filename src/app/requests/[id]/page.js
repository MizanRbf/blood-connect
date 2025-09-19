import Navbar from "@/app/Components/Navbar/Navbar";
import Title from "@/app/Components/Title/Title";
import React from "react";

const RequestDetails = () => {
  return (
    <div className="pt-20">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* title */}
      <Title title="Request Details" color="primary"></Title>
    </div>
  );
};

export default RequestDetails;
