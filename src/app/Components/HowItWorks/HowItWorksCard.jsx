import React from "react";

const HowItWorksCard = ({ step, index }) => {
  return (
    <div>
      <div className="relative flex flex-col z-0">
        {/* Step Content */}
        <div
          className={`flex mb-2 ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <span
            className={`bg-green-500 self-start inline-block px-6  text-white ${
              index % 2 === 0 ? "mt-0" : "mt-20"
            }`}
          >
            Step {index + 1}
          </span>
        </div>

        <div
          className={`flex-1 border border-gray-200 p-6 shadow-xl ${
            index % 2 === 0 ? "rounded-l-full" : "rounded-r-full"
          }`}
        >
          <div className="flex items-center space-x-4">
            {/* Icon for the step */}
            <div className="flex-shrink-0">
              <step.icon className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-black text-lg">{step.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
