// Init
import React from "react";
// images
import AboutUs from "../assets/Images/aboutus_about.svg";
import AboutBG from "../assets/Images/aboutus_aboutbg.svg";
// Component
import Navbar from "../components/Common/Navbar";
import Header from "../components/About/AboutHeader";
import AboutSection from "../components/Common/AboutSection";
import PartnerSection from "../components/Common/PartnersSection";
import Footer from "../components/Common/Footer";
export default function About() {
  const data = () => {
    return (
      <ul className="About_ul_data">
        <li>Sales and Marketing Strategy</li>
        <li>LinkedIn outreach</li>
        <li>Custom web development</li>
        <li>PPC (Pay-Per-Click) advertising Google Ads/Facebook Ads</li>
        <li>LinkedIn outreach / Cold calling</li>
        <li>Web application development / API development</li>
        <li>Blockchain integration / Server management</li>
        <li>Software, React Native, iOS app development</li>
        <li>Android, Flutter, Python - Django development</li>
        <li>Experienced staff sourcing</li>
      </ul>
    );
  };
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection
        fullImg
        bgColor="#1E1E1E"
        titleColor="#C1FE00"
        subTitleColor="#FBFBFB"
        despColor="#B7B7B7"
        src={AboutUs}
        bgSrc={AboutBG}
        title="What we do"
        desp={data()}
        ulDataCss
        desp2=" "
      />

      <PartnerSection />
      <Footer />
    </div>
  );
}
