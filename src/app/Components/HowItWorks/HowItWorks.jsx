import React from "react";
import Title from "../Title/Title";
import { Phone, User, Heart, Search, Edit3 } from "lucide-react";
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
    <div className="max-w-[1500px] mx-auto px-4 pt-20 pb-10 ">
      <section className=" bg-white rounded-2xl shadow-md p-5">
        <Title title="How It Works" color="primary"></Title>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="flex flex-col bg-slate-50 rounded-xl p-6 ring-1 ring-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center bg-white ring-1 ring-slate-200">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{s.title}</h3>
                    <p className="text-xs text-slate-600">Step {s.id}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-700 flex-1">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <footer className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            No transactions — just verified availability and direct contact.
            Stay safe: verify identity before sharing sensitive info.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default HowItWorks;
