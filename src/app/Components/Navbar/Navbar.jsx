"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-white fixed right-0 left-0 top-0 border-2 border-t-0 border-x-0 border-b-primary">
      <div className="flex items-center justify-between py-3 max-w-[1800px] mx-auto px-4 ">
        {/* Logo */}
        <Logo></Logo>
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
