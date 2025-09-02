import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#3f3f3f] p-6 rounded-xl">
      <h2 className="mb-6">Newsletter</h2>
      <p className="font-semibold mb-4">
        Subscribe to Our Newsletter to receive the newest updates and
        information.
      </p>
      <form>
        <input
          type="email"
          className="bg-white rounded-md text-black py-4 px-3"
          placeholder="Email"
        />
        <br className="md:hidden" />
        <button className="bg-primary font-bold py-4 px-6 rounded-md md:ml-2 mt-2">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
