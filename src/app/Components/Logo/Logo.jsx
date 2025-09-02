import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="w-13" src="/assets/logo.png" alt="logo" />
      <p className="md:text-4xl text-2xl font-bold">
        <span className="text-primary">Blood</span>Connect
      </p>
    </div>
  );
};

export default Logo;
