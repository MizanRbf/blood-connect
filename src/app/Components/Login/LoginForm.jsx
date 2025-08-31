import React from "react";

const LoginForm = () => {
  return (
    <form className="space-y-3">
      <p className="text-3xl font-bold bg-[#003b3d] text-white py-3 text-center rounded-sm">
        Login Your Account
      </p>

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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
