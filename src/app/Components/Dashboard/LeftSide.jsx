import React from "react";
import Logo from "../Logo/Logo";
import RedirectLinks from "./RedirectLinks";

const LeftSide = () => {
  return (
    <div className="p-6">
      <div className="mb-20">
        <Logo></Logo>
      </div>

      {/* Redirect Links */}
      <RedirectLinks></RedirectLinks>
    </div>
  );
};

export default LeftSide;
