"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between py-4 max-w-[1500px] mx-auto px-4">
        <h1 className="text-white">BloodConnect</h1>
        {session ? (
          <button className="button mr-4" onClick={() => signOut()}>
            Logout
          </button>
        ) : (
          <Link className="button mr-4" href="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
