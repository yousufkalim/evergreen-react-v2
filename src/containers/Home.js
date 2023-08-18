// Init
import React from "react";

// Importing Components
import Navbar from "../components/Common/Navbar";
import Header from "../components/Home/Header";
import ServiceProvided from "../components/Common/ServiceProvided";
import PartnerSection from "../components/Common/PartnersSection";
import AboutSection from "../components/Common/AboutSection";
import ContactSection from "../components/Common/ContactSection";
import Footer from "../components/Common/Footer";
// Home Component
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header floating />
      <ServiceProvided />
      <AboutSection centerImg btn RightbgColor="#83FD9E" to="/about" />
      <PartnerSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
