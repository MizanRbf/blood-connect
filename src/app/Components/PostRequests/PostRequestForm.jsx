"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const PostRequestForm = () => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const requestData = Object.fromEntries(formData.entries());
    requestData.email = session?.user?.email;
    requestData.createdAt = new Date();

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data inserted successfully!",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: data.error || "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 border-base-300 rounded-box w-lg border p-4 space-y-5 mx-auto "
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          className="bg-white px-3 text-black py-2 rounded-sm w-full "
          placeholder="Your Name"
        />

        {/* Blood Group */}
        <input
          type="text"
          name="blood_group"
          className="bg-white px-3 text-black py-2 rounded-sm w-full "
          placeholder="Your Blood Group"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          className="bg-white px-3 text-black py-2 rounded-sm w-full "
          placeholder="Your Current Location"
        />

        {/* Contact Number */}
        <input
          type="text"
          name="contact_number"
          className="bg-white px-3 text-black py-2 rounded-sm w-full "
          placeholder="Your Contact Number"
        />
        {/* Age */}
        <input
          type="text"
          name="age"
          className="bg-white px-3 text-black py-2 rounded-sm w-full "
          placeholder="Your Age"
        />

        {/* Gender */}
        <input
          type="text"
          name="gender"
          className="bg-white px-3 text-black py-2 rounded-sm w-full "
          placeholder="Your Gender"
        />
        <button
          type="submit"
          className="bg-secondary text-white w-full rounded-sm py-2 font-bold cursor-pointer"
        >
          Post Now
        </button>
      </form>
    </div>
  );
};

export default PostRequestForm;
