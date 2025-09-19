"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import DonorCard2 from "./DonorCard2";

const TopAvailableDonors = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/topAvailableDonors")
      .then((res) => res.json())
      .then((data) => setDonors(data.donors));
  });

  return (
    <div className="bg-[url(/assets/bg5.jpg)] bg-center bg-cover">
      <div className="max-w-[1500px] mx-auto px-4 pt-10 pb-10">
        <Title title="Top Available Donors" color="black"></Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {donors.map((donor) => (
            <DonorCard2 key={donor._id} donor={donor}></DonorCard2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAvailableDonors;
