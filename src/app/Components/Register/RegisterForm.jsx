"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const result = await registerUser({ name, email, password });

    if (result.success) {
      alert("success");
    } else {
      alert("something wrong");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-3xl font-bold bg-[#003b3d] text-white py-3 text-center rounded-sm">
        Register Your Account
      </p>

      {/* Name */}
      <input
        type="text"
        name="name"
        className="bg-white p-3 rounded-sm w-full"
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        className="bg-white p-3 rounded-sm w-full"
        placeholder="Your Email"
      />

      <input
        type="password"
        name="password"
        className="bg-white p-3 rounded-sm w-full"
        placeholder="Password"
      />

      <button
        type="submit"
        className="text-white font-bold rounded-sm px-3 py-2 bg-[#003b3d] w-full"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
