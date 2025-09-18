import React from "react";
import Title from "../Title/Title";
import { Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Rahman",
      role: "Blood Receiver",
      feedback:
        "I urgently needed blood during surgery. Through Blood Connect, I found a donor within minutes. This platform truly saves lives!",
    },
    {
      id: 2,
      name: "Shahidul Islam",
      role: "Blood Donor",
      feedback:
        "Donating blood has always been important to me. Blood Connect made it easy to share my availability and help someone in need.",
    },
    {
      id: 3,
      name: "Dr. Nasrin Ahmed",
      role: "Doctor",
      feedback:
        "This platform bridges the gap between donors and patients. It makes my work easier by connecting patients with life-saving donors quickly.",
    },
  ];
  return (
    <div className="bg-[url(/assets/bg1.jpg)] bg-center bg-cover">
      <div className="max-w-[1500px] mx-auto px-4 pt-10 pb-10 ">
        <Title title="Testimonials"></Title>
        <section className=" p-6 md:p-12 bg-[#00000041] rounded-2xl shadow-md mt-12">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col bg-[#ff505075] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Quote className="w-8 h-8 text-white mb-3" />
                <p className="text-sm text-white italic mb-4">“{t.feedback}”</p>
                <div className="mt-auto">
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
