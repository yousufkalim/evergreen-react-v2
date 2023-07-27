// Init
import React from "react";
// images
import ValueImage1 from "../assets/Images/values_section_1.svg";
import ValueImage2 from "../assets/Images/values_section_2.svg";
import ValueImage3 from "../assets/Images/values_section_3.svg";
import ValueImage4 from "../assets/Images/values_section_4.svg";

// Component
import Navbar from "../components/Common/Navbar";
import Header from "../components/OurValues/ValuesHeader";
import ValuesSection from "../components/OurValues/ValueSection";
import Footer from "../components/Common/Footer";
export default function OurValues() {
  return (
    <div>
      <Navbar />
      <Header />
      <ValuesSection
        src={ValueImage1}
        darkTheme="#1E1E1E"
        p1="At Evergreen soft, we firmly believe in the transformative potential of technology. By integrating artificial intelligence capabilities, we unlock a new level of innovation and efficiency.With AI-driven development, we can automate tasks, optimize workflows, and enhance the overall user experience. "
        // p2="'This is our way of spreading greatness towards a positive and a brighter tomorrow based on innovation'"
      />
      <div className="webDev_first_two_section">
        <ValuesSection
          src={ValueImage2}
          reverse
          // darkTheme="#1E1E1E"
          title="DIVERSITY & INCLUSION"
          p1="We believe that in unity there is strength, this is why we thrive on diverse voices. We leverage our staff’s diverse background, and experiences to open more doors to our approach."
        />
        <ValuesSection
          src={ValueImage3}
          title="CUSTOMER FOCUSED"
          p1="We work closely in partnership with our clients, advising them on how to use information technology in order to meet their business objectives or overcome problems. We provide strategic guidance to clients with regards to these solutions."
          p2=" ​We strive for excellence!"
        />
      </div>

      <ValuesSection
        src={ValueImage4}
        reverse
        darkTheme="#1E1E1E"
        title="TRUST WORTHY COMPUTING"
        p1="We deliver secure, private, and reliable computing experiences based on sound business practices while strongly paying attention to data integrity. The integrity of data is kept with extreme confidentiality so that our customers can focus on their passion, not their data!"
      />
      <Footer />
    </div>
  );
}
