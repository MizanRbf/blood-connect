"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";

const RightSide = () => {
  const [user, setUser] = useState({});
  const { data: session } = useSession();
  useEffect(() => {
    if (!session?.user?.email) return;
    fetch(`http://localhost:3000/api/users/${session?.user?.email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch((err) => {
        console.log(err);
      });
  }, [session]);
  return (
    <div>
      <Title title="My Profile"></Title>
      <div className="text-black">
        <h2 className="">{user.name}</h2>
        <h2 className="">{user.location}</h2>
        <h2 className="">{user.age}</h2>
      </div>
    </div>
  );
};

export default RightSide;
