"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const result = await registerUser({ name, email, password });

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You can now login",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/login");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: result.message || "Something went wrong",
        confirmButtonText: "OK",
      });
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
