"use client";
import React, { useEffect, useState } from "react";
import Title from "../Components/Title/Title";
import DonorCard from "../Components/Donors/DonorCard";
import Navbar from "../Components/Navbar/Navbar";

const donors = () => {
  const [donorsInfo, setDonorsInfo] = useState([]);

  useEffect(() => {
    fetch("/DonorsData.json")
      .then((res) => res.json())
      .then((data) => setDonorsInfo(data));
  }, []);
  return (
    <div className="max-w-[1500px] mx-auto px-4 pt-20">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Title */}
      <Title title="Available Donors"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {donorsInfo.map((donor) => (
          <DonorCard key={donor.id} donor={donor}></DonorCard>
        ))}
      </div>
    </div>
  );
};

export default donors;
