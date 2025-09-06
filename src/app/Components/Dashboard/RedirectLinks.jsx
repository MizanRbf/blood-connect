"use client";
import Link from "next/link";
import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

const RedirectLinks = () => {
  return (
    <div className="flex flex-col justify-between h-[calc(100vh-200px)]">
      <ul className="flex flex-col *:hover:bg-white *:hover:text-black *:pl-4">
        <Link className="font-bold text-xl" href="/dashboard/postDonors">
          Post Donor
        </Link>
        <Link className="font-bold text-xl" href="/dashboard/postRequests">
          Post Request
        </Link>
        <Link className="font-bold text-xl" href="/dashboard/myDonorPosts">
          My Donor Posts
        </Link>
        <Link className="font-bold text-xl" href="/dashboard/myRequestPosts">
          My Request Posts
        </Link>
      </ul>
      <div className="">
        <Link href="/">
          <button className="font-bold bg-white text-black text-xl text-center py-4 w-full mb-3 flex items-center justify-center gap-3 cursor-pointer">
            <TiArrowBackOutline /> Back to Home
          </button>
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="font-bold bg-white text-black text-xl text-center py-4 w-full flex items-center justify-center gap-3 cursor-pointer"
        >
          <BiLogOut />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default RedirectLinks;
