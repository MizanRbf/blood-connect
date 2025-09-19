"use client";
import MyDonorTable from "@/app/Components/MyDonorPosts/MyDonorTable";
import Title from "@/app/Components/Title/Title";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyDonorPosts = () => {
  const { data: session } = useSession();
  const [donors, setDonors] = useState([]);

  // Handle Delete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:3000/api/donors/${id}`, {
          method: "DELETE",
        });

        let data = {};
        if (res.ok) {
          try {
            data = await res.json();
          } catch (err) {
            console.error(err);
          }
        } else {
          console.error("Responsive not OK:", res.status);
        }

        if (data.success) {
          setDonors((prev) => prev.filter((donor) => donor._id !== id));

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Failed to delete!",
            text: "Your file has not been deleted.",
            icon: "error",
          });
        }
      }
    });
  };

  // Fetch Donors
  useEffect(() => {
    if (!session?.user?.email) return;
    fetch(`http://localhost:3000/api/donors/${session?.user?.email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setDonors(data.donors || []));
  }, [session]);

  return (
    <div className="px-6">
      <div className="text-black">
        <Title title="My Donors Posts" color="primary"></Title>
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
                  handleDelete={handleDelete}
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
