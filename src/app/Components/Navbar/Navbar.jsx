"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Logo from "../Logo/Logo";
import LargeDevice from "./LargeDevice";
import SmallDevice from "./SmallDevice";
import ResponsiveIcon from "./ResponsiveIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  return (
    <div className="bg-white fixed right-0 left-0 top-0 border-2 border-t-0 border-x-0 border-b-primary z-10 ">
      <div className="flex items-center justify-between py-3 max-w-[1800px] mx-auto px-4 ">
        {/* Logo */}
        <Logo></Logo>

        {/* Menu Items For Large Device */}
        <div className="lg:flex hidden">
          <LargeDevice></LargeDevice>
        </div>

        {/* Login Button */}
        <div className="hidden lg:block">
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

        {/* Responsive Icon */}

        <ResponsiveIcon setOpen={setOpen} open={open}></ResponsiveIcon>

        {/* Menu Items For Small Device */}
        <SmallDevice
          open={open}
          setOpen={setOpen}
          signOut={signOut}
          session={session}
        ></SmallDevice>
      </div>
    </div>
  );
};

export default Navbar;
