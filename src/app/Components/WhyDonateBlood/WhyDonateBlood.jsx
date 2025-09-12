import React from "react";
import Title from "../Title/Title";
import { HeartHandshake, Users, Activity, Shield } from "lucide-react";

const WhyDonateBlood = () => {
  const reasons = [
    {
      id: 1,
      title: "Save Lives",
      desc: "Every donation can help save up to three lives in critical situations such as accidents, surgeries, and childbirth emergencies.",
      icon: HeartHandshake,
    },
    {
      id: 2,
      title: "Support Community",
      desc: "By donating blood, you directly support patients in your community who urgently need transfusions.",
      icon: Users,
    },
    {
      id: 3,
      title: "Health Benefits",
      desc: "Regular donation helps improve blood flow and may reduce harmful iron stores in your body, keeping you healthier.",
      icon: Activity,
    },
    {
      id: 4,
      title: "Be a Hero",
      desc: "Donating blood is a simple, selfless act that makes you a hero in someone’s story of survival.",
      icon: Shield,
    },
  ];
  return (
    <div className="max-w-[1500px] mx-auto px-4 pt-20 pb-10">
      <Title title="Why Donate Blood?"></Title>
      <section className=" p-6 md:p-12 bg-red-50 rounded-2xl shadow-md mt-12">
        <header className="text-center mb-10"></header>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.id}
                className="flex flex-col bg-white rounded-xl p-6 ring-1 ring-red-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100 text-red-600 mb-4">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-red-700">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{r.desc}</p>
              </div>
            );
          })}
        </div>

        <footer className="mt-10 text-center">
          <p className="text-sm text-gray-700 font-medium">
            Your single donation can bring hope, health, and happiness to
            someone in need.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default WhyDonateBlood;
