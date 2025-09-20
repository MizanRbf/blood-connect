"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LargeDevice = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/donors", label: "Donors" },
    { href: "/requests", label: "Requests" },
    { href: "/dashboard", label: "Dashboard" },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`mr-5 font-bold ${
            pathname === link.href ? "underline text-primary" : "text-black "
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default LargeDevice;
