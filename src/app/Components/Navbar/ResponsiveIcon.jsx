import React from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ResponsiveIcon = ({ setOpen, open }) => {
  return (
    <div className="py-1 px-3 rounded-sm lg:hidden bg-slate-200 shadow-2xl">
      <span onClick={() => setOpen(!open)}>
        {open ? (
          <RxCross2 className="cursor-pointer   text-2xl" />
        ) : (
          <MdMenu className="cursor-pointer text-2xl" />
        )}
      </span>
    </div>
  );
};

export default ResponsiveIcon;
