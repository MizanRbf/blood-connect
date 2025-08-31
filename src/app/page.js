import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero */}
      <Hero></Hero>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
