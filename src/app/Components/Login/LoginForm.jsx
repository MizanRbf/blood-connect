"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result.error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-3xl font-bold bg-[#003b3d] text-white py-3 text-center rounded-sm">
        Login Your Account
      </p>

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
        className="text-white font-bold rounded-sm px-3 py-2 bg-[#003b3d] w-full cursor-pointer"
      >
        {loading ? "Processing..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
