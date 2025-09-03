"use client";
import React, { useEffect, useState } from "react";
import Title from "../Components/Title/Title";
import DonorCard from "../Components/Donors/DonorCard";
import Navbar from "../Components/Navbar/Navbar";

const donors = () => {
  const [donorsInfo, setDonorsInfo] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [selectedBlood, setSelectedBlood] = useState("");

  // Handle Filter
  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSelectedBlood(value);

    // Filter
    if (value === "") {
      setFilteredDonors(donorsInfo);
    } else {
      const filtered = donorsInfo.filter(
        (singleDonor) => singleDonor.blood_group === value
      );
      setFilteredDonors(filtered);
    }
  };

  // All Donors Info
  useEffect(() => {
    fetch("/DonorsData.json")
      .then((res) => res.json())
      .then((data) => {
        setDonorsInfo(data);
        setFilteredDonors(data);
      });
  }, []);
  return (
    <div className="max-w-[1500px] mx-auto px-4 pt-20 mb-20">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Title */}
      <Title title="Available Donors"></Title>

      {/* Filter and Sort */}
      <div className="flex justify-between mb-10 items-center">
        {/* Searchbar */}
        <form className="">
          <input
            type="search"
            name="Search"
            placeholder="Search By Location"
            className="border w-50 rounded-sm p-2"
          />
        </form>

        {/* Filter */}
        <select
          className="border w-50 rounded-sm p-2"
          value={selectedBlood}
          onChange={handleFilter}
        >
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
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredDonors.map((donor) => (
          <DonorCard key={donor.id} donor={donor}></DonorCard>
        ))}
      </div>
    </div>
  );
};

export default donors;
