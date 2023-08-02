// Init
import React from "react";

// Component
import Navbar from "../../components/Common/Navbar";
import ServiceHeader from "../../components/Service/ServiceHeader";
import AboutService from "../../components/Service/AboutService";
import OurProcess from "../../components/Service/OurProcess";
import ServiceProvided from "../../components/Common/ServiceProvided";
import Footer from "../../components/Common/Footer";
export default function WebDev() {
  return (
    <div>
      <Navbar />
      <div className="webDev_first_two_section">
        <ServiceHeader path="Service > Web Development & design" title="Web Development & design" />
        <AboutService
          btnCssChange
          servicetitle="About Service"
          btntxt="Let's Talk"
          to="/contactus"
        />
      </div>
      <OurProcess />
      <ServiceProvided spantxt=" " h2="More Services" divider />
      <Footer />
    </div>
  );
}
