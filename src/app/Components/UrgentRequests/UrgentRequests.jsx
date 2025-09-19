"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import ReqCard from "./ReqCard";

const UrgentRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/urgentRequests")
      .then((res) => res.json())
      .then((data) => setRequests(data.requests));
  });

  return (
    <div className="bg-[url(/assets/bg4.jpg)] bg-center bg-cover">
      <div className="max-w-[1500px] mx-auto px-4 pt-10 pb-10">
        <Title title="Urgent Requests" color="primary"></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {requests.map((req) => (
            <ReqCard key={req._id} req={req}></ReqCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrgentRequests;
