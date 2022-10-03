// Init
import React from 'react';
// images
import ValueImage1 from '../assets/Images/values_section_1.svg';
import ValueImage2 from '../assets/Images/values_section_2.svg';
import ValueImage3 from '../assets/Images/values_section_3.svg';
import ValueImage4 from '../assets/Images/values_section_4.svg';

// Component
import Navbar from '../components/Common/Navbar';
import Header from '../components/OurValues/ValuesHeader';
import ValuesSection from '../components/OurValues/ValueSection';
import Footer from '../components/Common/Footer';
export default function OurValues() {
  return (
    <div>
      <Navbar />
      <Header />
      <ValuesSection
        src={ValueImage1}
        p1="'We believe that technology is a powerful tool which if used with precision can reap the impossible bounties! This is why our research and development team attempts rigorous testing of every service we provide so that you do not have to worry about things going south on you!'"
        p2="'This is our way of spreading greatness towards a positive and a brighter tomorrow based on innovation'"
      />
      <ValuesSection
        src={ValueImage2}
        reverse
        darkTheme
        title='DIVERSITY & INCLUSION'
        p1='We believe that in unity there is strength, this is why we thrive on diverse voices. We leverage our staff’s diverse background, and experiences to open more doors to our approach.'
      />
      <ValuesSection
        src={ValueImage3}
        darkTheme
        title='CUSTOMER FOCUSED'
        p1='We work closely in partnership with our clients, advising them on how to use information technology in order to meet their business objectives or overcome problems. We provide strategic guidance to clients with regards to these solutions.'
        p2=' ​We strive for excellence!'
      />
      <ValuesSection
        src={ValueImage4}
        reverse
        title='TRUST WORTHY COMPUTING'
        p1='We deliver secure, private, and reliable computing experiences based on sound business practices while strongly paying attention to data integrity. The integrity of data is kept with extreme confidentiality so that our customers can focus on their passion, not their data!'
      />
      <Footer />
    </div>
  );
}
