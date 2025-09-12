"use client";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1tl7k8c",
        "template_88eueta",
        form.current,
        "eE11Jr1RKLDjHi_0W"
      )
      .then(
        () => {
          Swal.fire({
            title: "Subscribed Successfully!",
            icon: "success",
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Error: " + error.text);
        }
      );
  };
  return (
    <div className="bg-[#3f3f3f] p-6 rounded-xl">
      <h2 className="mb-6">Newsletter</h2>
      <p className="font-semibold mb-4">
        Subscribe to Our Newsletter to receive the newest updates and
        information.
      </p>
      <form onSubmit={handleSubmit} ref={form}>
        <input
          type="email"
          name="email"
          className="bg-white rounded-md text-black py-4 px-3"
          placeholder="Your Email"
        />
        <br className="md:hidden" />
        <button className="bg-primary font-bold py-4 px-6 rounded-md md:ml-2 mt-2 cursor-pointer">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
