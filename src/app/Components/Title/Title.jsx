import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-center pt-20 mb-10 justify-center">
      <hr className="w-20 h-1.5 bg-primary" />
      <h1 className="text-2xl md:text-4xl font-bold  text-primary text-center   mx-3">
        {title}
      </h1>
      <hr className="w-20  h-1.5 bg-primary" />
    </div>
  );
};

export default Title;
