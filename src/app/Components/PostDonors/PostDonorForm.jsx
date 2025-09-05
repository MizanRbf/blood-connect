import React from "react";

const PostDonorForm = () => {
  return (
    <div>
      <form className="bg-gray-100 border-base-300 rounded-box w-lg border p-4 space-y-5 mx-auto">
        {/* Name */}
        <input
          type="text"
          className="bg-white px-3 py-2 rounded-sm w-full "
          placeholder="Your Name"
        />

        {/* Blood Group */}
        <input
          type="text"
          className="bg-white px-3 py-2 rounded-sm w-full "
          placeholder="Your Blood Group"
        />

        {/* Location */}
        <input
          type="text"
          className="bg-white px-3 py-2 rounded-sm w-full "
          placeholder="Your Current Location"
        />

        {/* Contact Number */}
        <input
          type="text"
          className="bg-white px-3 py-2 rounded-sm w-full "
          placeholder="Your Contact Number"
        />
        {/* Age */}
        <input
          type="text"
          className="bg-white px-3 py-2 rounded-sm w-full "
          placeholder="Your Age"
        />

        {/* Gender */}
        <input
          type="text"
          className="bg-white px-3 py-2 rounded-sm w-full "
          placeholder="Your Gender"
        />
      </form>
    </div>
  );
};

export default PostDonorForm;
