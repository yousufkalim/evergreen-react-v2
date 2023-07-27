// Init
import React from "react";
// images
import AboutServiceApp from "../../assets/Images/about_service_app.svg";
// Component
import Navbar from "../../components/Common/Navbar";
import ServiceHeader from "../../components/Service/ServiceHeader";
import AboutService from "../../components/Service/AboutService";
import OurProcess from "../../components/Service/OurProcess";
import ServiceProvided from "../../components/Common/ServiceProvided";
import Footer from "../../components/Common/Footer";
export default function AppDev() {
  return (
    <div>
      <Navbar />
      <div className="webDev_first_two_section">
        <ServiceHeader path="Service > App Development & design" title="App Development & design" />
        <AboutService
          btntxt="Let's Talk"
          src={AboutServiceApp}
          title="We are Best App Development company"
          to="/contactus"
          servicetitle="About Service"
          disc="Custom design & development for web, mobile, and SaaS apps. Leveraging MEAN, MERN, LAMP, and Django stacks for web apps. Expertise in iOS (Swift, Objective-C), Android (Flutter, Kotlin), and React Native stacks for mobile apps. Building scalable SaaS apps using serverless, microservices, and Blockchain stacks. Innovate with us."
        />
      </div>
      <OurProcess />
      <ServiceProvided spantxt=" " h2="More Services" divider />
      <Footer />
    </div>
  );
}
