import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import UrgentRequests from "./Components/UrgentRequests/UrgentRequests";
import TopAvailableDonors from "./Components/TopAvailableDonors/TopAvailableDonors";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import WhyDonateBlood from "./Components/WhyDonateBlood/WhyDonateBlood";
import Testimonials from "./Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <header>
        {/* Navbar */}
        <Navbar></Navbar>

        {/* Hero */}
        <Hero></Hero>
      </header>

      <main>
        {/* Urgent Requests */}
        <UrgentRequests></UrgentRequests>

        {/* Top Available Donors */}
        <TopAvailableDonors></TopAvailableDonors>

        {/* How It Works */}
        <HowItWorks></HowItWorks>

        {/* Why Donate Blood? */}
        <WhyDonateBlood></WhyDonateBlood>

        {/* Testimonials */}
        <Testimonials></Testimonials>
      </main>

      <footer>
        {/* Footer */}
        <Footer></Footer>
      </footer>
    </div>
  );
}
