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
    <div className="">
      <Title title="My Profile"></Title>
      <div className="flex justify-center mt-20">
        <div className="border border-gray-300 text-black p-10 rounded-xl shadow-2xl">
          <div className="flex items-center flex-col">
            {/* user photo */}
            <div className="rounded-full border w-fit ring-2 ring-secondary">
              <img
                className="w-40 h-40 rounded-full "
                src={user.photo}
                alt="User Image"
              />
            </div>
            <h2 className="">{user.name}</h2>
            <p>{user.email}</p>
          </div>

          <hr className="my-3 text-gray-300" />

          {/* Info */}
          <div className="mt-10">
            <p className="">
              <span className="font-bold">Blood Group: </span>
              {user.bloodGroup}
            </p>
            <p className="">
              <span className="font-bold">Age: </span>
              {user.age}
            </p>
            <p className="">
              <span className="font-bold">Current Location: </span>
              {user.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
