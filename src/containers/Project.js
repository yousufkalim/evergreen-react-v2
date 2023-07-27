// Init
import React from "react";
// images
import ProjectImg1 from "../assets/Images/project_card_1.png";
import ProjectImg2 from "../assets/Images/project_card_2.png";
import ProjectImg3 from "../assets/Images/project_card_3.png";
// Component
import Navbar from "../components/Common/Navbar";
import ServiceHeader from "../components/Service/ServiceHeader";
import ProjectCard from "../components/Project/ProjectsCards";
import Footer from "../components/Common/Footer";
export default function Project() {
  return (
    <div>
      <Navbar />
      <ServiceHeader
        title="Talent Acquisition & Staff Augmentation Experts"
        changeCss
        bgColor="#1e1e1e"
        desp="Contact us today and obtain resumes and cover letters from the experienced staff you require."
        desp2="Our sourcing and interview services are completely FREE."
        desp3="  Elevate your business to unprecedented heights and maximize your potential with our expert resources, ensuring exponential growth."
      />
      <ProjectCard RightTextBox bgSrc={ProjectImg1} />
      <ProjectCard
        bgSrc={ProjectImg2}
        projectID="#02"
        title="You name it. We have it"
        desp="Our service provides a cost-effective and advantageous alternative to traditional hiring methods. Finding the most suitable talent for your company can be time-consuming and challenging. EverGreenSoft, a leading Full Stack company, offers a Staff Augmentation (Hire Talent Scheme) Service that enables you to access the best industry professionals who perfectly match your business requirements."
      />
      <ProjectCard
        RightTextBox
        bgSrc={ProjectImg3}
        projectID="#03"
        title="Hire Virtual Assistance"
        desp="Hire Web Developer and Designer as Virtual Assistant send your requirement to our Sales Whiz Team, We got your back and give your Candidates resumes that fit for the position that you are looking for right now..."
      />
      <Footer />
    </div>
  );
}
