"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import Title from "@/app/Components/Title/Title";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DonorDetails = () => {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);
  useEffect(() => {
    if (id) {
      fetch(`/api/donors/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.donor) {
            setDonor(data.donor);
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [id]);

  return (
    <div className="pt-25">
      <Navbar></Navbar>
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex justify-center">
          <Title title="Donors Details" color="primary"></Title>
        </div>
        <div className="border border-gray-200 rounded-xl shadow-lg p-4">
          <div className="space-y-1 mb-3 ">
            <h1>{donor?.name}</h1>

            <p className="">
              <span className="font-bold">Blood Group: </span>
              {donor?.blood_group}
            </p>
            <p className="">
              <span className="font-bold">Contact Number: </span>
              {donor?.contact_number}
            </p>
            <p className="">
              <span className="font-bold">Location: </span>
              {donor?.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDetails;
