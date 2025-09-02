import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  return (
    <div>
      <h2 className="mb-4">Quick Links</h2>
      <ul className="flex flex-col">
        <Link className="font-bold" href="/">
          Home
        </Link>
        <Link className="font-bold" href="/">
          About
        </Link>
        <Link className="font-bold" href="/">
          Donors
        </Link>
        <Link className="font-bold" href="/">
          Contact
        </Link>
        <Link className="font-bold" href="/">
          FAQs
        </Link>
      </ul>
    </div>
  );
};

export default QuickLinks;
