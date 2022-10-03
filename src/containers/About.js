// Init
import React from 'react';
// images
import AboutUs from '../assets/Images/aboutus_about.svg';
import AboutBG from '../assets/Images/aboutus_aboutbg.svg';
// Component
import Navbar from '../components/Common/Navbar';
import Header from '../components/About/AboutHeader';
import AboutSection from '../components/Common/AboutSection';
import PartnerSection from '../components/Common/PartnersSection';
import Footer from '../components/Common/Footer';
export default function About() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection
        bgColor='#FBF6E9'
        titleColor='#f7c844'
        subTitleColor='#1E1E1E'
        despColor='#B7B7B7'
        src={AboutUs}
        bgSrc={AboutBG}
        title='What we do'
        desp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, rud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      />
      <PartnerSection />
      <Footer />
    </div>
  );
}
