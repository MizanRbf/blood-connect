import React from "react";
import LeftSide from "../Components/Dashboard/LeftSide";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-center text-white">
      {/* Left Side */}
      <div className="w-[500px] h-screen bg-[#202020] hidden md:block">
        <LeftSide></LeftSide>
      </div>

      {/* Right Side */}
      <div className="w-full h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;
