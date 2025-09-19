import React from "react";

const Title = ({ title, color }) => {
  return (
    <div className="mb-10 justify-center bg-white inline-block rounded-r-full pr-10 py-4">
      <h1
        className={`text-2xl md:text-4xl font-bold  text-primary text-center   mx-3 `}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
