"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SmallDevice = ({ setOpen, open, signOut, session }) => {
  return (
    <nav
      className={`top-18 lg:hidden right-0 left-0 absolute py-6 shadow bg-[rgba(0,0,0,0.81)]  text-lg font-bold text-white transform transition-all ease-in-out duration-300 z-50 ${
        open
          ? "opacity-100 translate-y-2 visible"
          : "opacity-0 -translate-y-5 invisible"
      }`}
    >
      <ul className="px-10 *:hover:bg-white *:hover:text-black  *:hover:duration-300 space-y-2">
        <li>
          <Link
            href="/"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Home</button>
          </Link>
        </li>
        <li>
          <Link
            href="/donors"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Donors</button>
          </Link>
        </li>
        <li>
          <Link
            href="/requests"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Requests</button>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Dashboard</button>
          </Link>
        </li>
        <li>
          <div>
            {session ? (
              <button
                className="w-full bg-primary py-2 cursor-pointer mr-4"
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <Link className=" mr-4 " href="/login">
                <button className="w-full bg-primary hover:bg-white py-2 cursor-pointer">
                  Login
                </button>
              </Link>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SmallDevice;
