"use client";
import React, { useEffect, useState } from "react";
import Title from "../Components/Title/Title";
import Navbar from "../Components/Navbar/Navbar";
import RequestCard from "../Components/Requests/RequestCard";

const Requests = () => {
  const [requestInfo, setRequestInfo] = useState([]);

  useEffect(() => {
    fetch("/RequestsData.json")
      .then((res) => res.json())
      .then((data) => setRequestInfo(data));
  }, []);
  return (
    <div className="max-w-[1500px] mx-auto px-4 pt-20 mb-20">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Title */}
      <Title title="Requests"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {requestInfo.map((request) => (
          <RequestCard key={request.id} request={request}></RequestCard>
        ))}
      </div>
    </div>
  );
};

export default Requests;
