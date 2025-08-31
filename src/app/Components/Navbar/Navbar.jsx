import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 max-w-[1500px] mx-auto px-4 bg-black">
      <h1 className="text-white">BloodConnect</h1>
      <div className="">
        <Link className="button mr-4" href="/login">
          Login
        </Link>
        <Link className="button " href="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
