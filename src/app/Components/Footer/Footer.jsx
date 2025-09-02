import React from "react";
import FooterTitle from "./FooterTitle";
import QuickLinks from "./QuickLinks";
import ContactInfo from "./ContactInfo";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-[#202020]">
      <footer className=" text-white py-10 max-w-[1800px] mx-auto px-4">
        <div className="flex items-start gap-10 justify-between flex-col lg:flex-row">
          {/* Footer Title */}
          <FooterTitle></FooterTitle>

          {/* Quick Links */}
          <QuickLinks></QuickLinks>
          {/* Contact Info */}
          <ContactInfo></ContactInfo>
          {/* Newsletter */}
          <Newsletter></Newsletter>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
