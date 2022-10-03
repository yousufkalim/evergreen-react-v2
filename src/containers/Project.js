// Init
import React from 'react';
// images
import ProjectImg1 from '../assets/Images/project_card_1.png';
import ProjectImg2 from '../assets/Images/project_card_2.png';
import ProjectImg3 from '../assets/Images/project_card_3.png';
// Component
import Navbar from '../components/Common/Navbar';
import ServiceHeader from '../components/Service/ServiceHeader';
import ProjectCard from '../components/Project/ProjectsCards';
import Footer from '../components/Common/Footer';
export default function Project() {
  return (
    <div>
      <Navbar />
      <ServiceHeader
        title='How we do Parsec Projects'
        desp='We have completed many projects form various companies in the world . we have made many of our clients feel happy and satisfied with the result we have provided'
      />
      <ProjectCard RightTextBox bgSrc={ProjectImg1} />
      <ProjectCard
        bgSrc={ProjectImg2}
        projectID='Project #02'
        title='TECHNOLOGY ACQUISITION AND TRAINING'
        desp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      />
      <ProjectCard
        RightTextBox
        bgSrc={ProjectImg3}
        projectID='Project #03'
        title='NEW PRODUCT INTRODUCTION'
        desp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit'
      />
      <Footer />
    </div>
  );
}
