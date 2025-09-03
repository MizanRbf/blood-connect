import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  return (
    <div>
      <h2 className="mb-4">Quick Links</h2>
      <ul className="flex flex-col *:hover:underline">
        <Link className="font-bold" href="/">
          Home
        </Link>
        <Link className="font-bold" href="/donors">
          Donors
        </Link>
        <Link className="font-bold" href="/requests">
          Requests
        </Link>
        <Link className="font-bold" href="/dashboard">
          Dashboard
        </Link>
      </ul>
    </div>
  );
};

export default QuickLinks;
