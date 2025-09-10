"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";

const UrgentRequests = () => {
  const [request, setRequest] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api/urgentRequests")
      .then((res) => res.json())
      .then((data) => setRequest(data));
  });
  return (
    <div className="max-w-[1500px] mx-auto px-4 pt-10 pb-10">
      <Title title="Urgent Requests"></Title>
    </div>
  );
};

export default UrgentRequests;
