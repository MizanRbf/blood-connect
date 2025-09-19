"use client";
import React, { useEffect, useState } from "react";
import Title from "../Components/Title/Title";
import Navbar from "../Components/Navbar/Navbar";
import RequestCard from "../Components/Requests/RequestCard";

const Requests = () => {
  const [requestInfo, setRequestInfo] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [selectedBlood, setSelectedBlood] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Filter
  const handleFilter = (e) => {
    e.preventDefault();
    setSelectedBlood(e.target.value);
  };

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter
  useEffect(() => {
    let filtered = requestInfo;
    if (selectedBlood !== "") {
      filtered = filtered.filter(
        (singleBlood) => singleBlood.blood_group === selectedBlood
      );
      setFilteredRequests(filtered);
    }

    if (searchTerm !== "") {
      filtered = filtered.filter((value) =>
        value.location.toLowerCase().includes(searchTerm)
      );
      setFilteredRequests(filtered);
    }
  }, [selectedBlood, searchTerm, requestInfo]);

  useEffect(() => {
    fetch("/api/requests")
      .then((res) => res.json())
      .then((data) => {
        setRequestInfo(data.requests);
        setFilteredRequests(data.requests);
      });
  }, []);
  return (
    <div className="max-w-[1500px] mx-auto px-4 pt-20 mb-20">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Title */}
      <Title title="Requests" color="primary"></Title>

      {/* Filter and Sort */}
      <div className="flex justify-between mb-10 items-center">
        {/* Searchbar */}
        <form className="">
          <input
            type="search"
            name="Search"
            placeholder="Search By Location"
            className="border border-gray-200 w-50 rounded-sm p-2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>

        {/* Filter */}
        <select
          className="border w-50 rounded-sm p-2 border-gray-200"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredRequests.map((request) => (
          <RequestCard key={request._id} request={request}></RequestCard>
        ))}
      </div>
    </div>
  );
};

export default Requests;
