// Init
import React from "react";
// images
import AboutServiceCustom from "../../assets/Images/about_service_custom.svg";
import AboutServiceCustom2 from "../../assets/Images/about_service_custom 2.svg";
import AboutServiceCustom3 from "../../assets/Images/about_service_custom 3.svg";
import AboutServiceCustom4 from "../../assets/Images/about_service_custom 4.svg";
import AboutServiceCustom5 from "../../assets/Images/about_service_custom 5.svg";

// Component
import Navbar from "../../components/Common/Navbar";
import ServiceHeader from "../../components/Service/ServiceHeader";
import AboutService from "../../components/Service/AboutService";
import OurProcess from "../../components/Service/OurProcess";
import ServiceProvided from "../../components/Common/ServiceProvided";
import Footer from "../../components/Common/Footer";
export default function CustomSolution() {
  const dataCustomSolution = () => {
    return (
      <ul className="About_ul_data">
        <li>Scale Your Success</li>
        <li>Tailored for Expansion</li>
        <li>Fuel Your Growth</li>
        <li>Effortless Expansion</li>
        <li>Empower Your Business</li>
      </ul>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="webDev_first_two_section">
        <ServiceHeader
          path="Service > Sales and Marketing Solution"
          title="Sales & Marketing Solution"
          desp="maximizing sales performance is essential for success. Are you looking to boost your sales and exceed targets? Let's connect with our Business Development Team and discuss how we can collaborate to develop a winning sales strategy.
          "
        />
        <AboutService
          src={AboutServiceCustom}
          title="We are Best in Sales & Marketing Solution"
          servicetitle="About Service"
          btntxt="Get This Service"
          to="/contactus"
          disc="Custom Development Services for Sales, Social Media Marketing, Customer Lead Generation, and Custom LinkedIn Outreach. Experience the power of targeted campaigns with free demos of leads. Unlock opportunities on platforms like Upwork, Freelancing, LinkedIn and Clutch. Drive business development and leverage our expertise in web app development for custom Sales solutions"
          reverse
          fontCssChange
        />
      </div>
      <div className="custom_extra_section">
        <AboutService
          src={AboutServiceCustom2}
          title="Paid Advertising that actually Converts."
          servicetitle="Our Values"
          btntxt="Let's Talk"
          to="/contactus"
          disc="Discover the incredible potential of conversion-driven paid advertising as our expert Ever Green Soft Sales Whiz Team leverages their expertise to drive results. Experience a seamless journey from clicks to conversions, unlocking new levels of success for your business.
          "
        />{" "}
        <AboutService
          src={AboutServiceCustom3}
          title="We help you accelerate Growth with LinkedIn Marketing & automate"
          servicetitle="Our Values"
          btntxt="Let's Talk"
          to="/contactus"
          reverse
          disc="With Grab Automation, you can take your LinkedIn strategy to the next level, ensuring seamless business growth. Experience the power of streamlining your success on LinkedIn and unlock its full potential for enhanced networking and lead generation. Let Grab Automation revolutionize your business effortlessly, automating your LinkedIn journey and delivering unmatched results.
          "
        />{" "}
        <AboutService
          src={AboutServiceCustom4}
          title="Business Growth with our Scalable Client Work Solutions"
          servicetitle="Our Values"
          btntxt="Let's Talk"
          to="/contactus"
          disc={dataCustomSolution()}
        />{" "}
        <AboutService
          src={AboutServiceCustom5}
          title="Email Marketing Automation"
          servicetitle="Our Values"
          btntxt="Let's Talk"
          to="/contactus"
          reverse
          disc="Email marketing automation is a powerful digital marketing strategy that streamlines and automates various aspects of the email marketing process. It involves using specialized software or tools to create, send, and manage personalized and targeted email campaigns, all while minimizing manual effort and maximizing efficiency"
        />
        <div />
        {/* <OurProcess /> */}
        <ServiceProvided spantxt=" " h2="More Services" divider />
        <Footer />
      </div>
    </div>
  );
}
