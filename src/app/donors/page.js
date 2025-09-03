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
    <div className="max-w-[1500px] mx-auto px-4 pt-20 mb-20">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Title */}
      <Title title="Available Donors"></Title>

      {/* Filter and Sort */}
      <div className="flex justify-between mb-10 items-center">
        {/* Filter */}
        <select className="border w-50 rounded-sm p-2" defaultValue="">
          <option value="" disabled>
            Filter By Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* Sort */}
        <select className="border w-50 rounded-sm p-2" defaultValue="">
          <option value="" disabled>
            Sort By
          </option>
          <option value="newst">newst</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {donorsInfo.map((donor) => (
          <DonorCard key={donor.id} donor={donor}></DonorCard>
        ))}
      </div>
    </div>
  );
};

export default donors;
