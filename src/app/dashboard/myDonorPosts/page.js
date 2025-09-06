"use client";
import MyDonorTable from "@/app/Components/MyDonorPosts/MyDonorTable";
import Title from "@/app/Components/Title/Title";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const MyDonorPosts = () => {
  const { data: session } = useSession();
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/donors/${session?.user?.email}`)
      .then((res) => res.json())
      .then((data) => setDonors(data.donors));
  }, [session]);

  return (
    <div className="px-6">
      <div className="text-black">
        <Title title="My Donors Posts"></Title>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-xl p-4">
          <table className="w-full">
            {/* head */}
            <thead>
              <tr className="text-left border-b">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Blood Group</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {donors.map((donor, index) => (
                <MyDonorTable
                  key={donor._id}
                  donor={donor}
                  index={index}
                ></MyDonorTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDonorPosts;
