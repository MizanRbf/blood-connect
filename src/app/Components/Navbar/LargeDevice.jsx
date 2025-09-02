import Link from "next/link";
import React from "react";

const LargeDevice = () => {
  return (
    <div>
      <ul className="space-x-4">
        <Link className="font-bold" href="/donors">
          Donors
        </Link>
        <Link className="font-bold" href="/dashboard">
          Dashboard
        </Link>
      </ul>
    </div>
  );
};

export default LargeDevice;
