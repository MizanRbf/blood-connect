import React from "react";

const RegisterForm = () => {
  return (
    <form className="space-y-3">
      <p className="text-3xl font-bold bg-[#003b3d] text-white py-3 text-center rounded-sm">
        Register Your Account
      </p>

      {/* Name */}
      <input
        type="text"
        className="bg-white p-3 rounded-sm w-full"
        placeholder="Your Name"
      />
      <input
        type="email"
        className="bg-white p-3 rounded-sm w-full"
        placeholder="Your Email"
      />

      <input
        type="password"
        className="bg-white p-3 rounded-sm w-full"
        placeholder="Password"
      />

      <button className="text-white font-bold rounded-sm px-3 py-2 bg-[#003b3d] w-full">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
