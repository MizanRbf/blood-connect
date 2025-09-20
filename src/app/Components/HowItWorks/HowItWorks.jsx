import React from "react";
import Title from "../Title/Title";
import { Phone, User, Heart, Search, Edit3 } from "lucide-react";
import HowItWorksCard from "./HowItWorksCard";
import { FaArrowDown } from "react-icons/fa";
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      desc: "Sign up with email and password. Complete your profile with name, age, blood group, contact number, and location.",
      icon: User,
    },
    {
      id: 2,
      title: "Post Availability (Donor)",
      desc: "Donors can share availability by posting blood group, date, and location. Edit or remove anytime.",
      icon: Heart,
    },
    {
      id: 3,
      title: "Create a Request (Receiver)",
      desc: "Receivers can post a request with blood group, urgency, hospital/location, and contact info.",
      icon: Edit3,
    },
    {
      id: 4,
      title: "Search & Browse",
      desc: "Easily search by blood group and filter by location to find matches quickly.",
      icon: Search,
    },
    {
      id: 5,
      title: "Direct Contact",
      desc: "Each donor/request card shows name, blood group, contact, and location so people can connect directly.",
      icon: Phone,
    },
  ];
  return (
    <div className="bg-[url(/assets/bg6.jpg)] bg-center bg-cover pb-20">
      <div className="max-w-[1500px] mx-auto px-4 pt-20 pb-10 ">
        <Title title="How It Works" color="primary"></Title>

        <div className="flex justify-center">
          <div className="relative grid grid-cols-2 gap-8">
            {/* Vertical Line */}
            <div className="absolute  left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 rounded-full">
              <FaArrowDown className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-green-500 text-xl" />
            </div>

            {/* Mapping */}
            {steps.map((step, index) => (
              <HowItWorksCard
                step={step}
                index={index}
                key={index}
              ></HowItWorksCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
