// Init
import React from 'react';
// images
import AboutServiceCustom from '../../assets/Images/about_service_custom.svg';
// Component
import Navbar from '../../components/Common/Navbar';
import ServiceHeader from '../../components/Service/ServiceHeader';
import AboutService from '../../components/Service/AboutService';
import OurProcess from '../../components/Service/OurProcess';
import ServiceProvided from '../../components/Common/ServiceProvided';
import Footer from '../../components/Common/Footer';
export default function CustomSolution() {
  return (
    <div>
      <Navbar />
      <ServiceHeader path='Home > Service > Custom solutions' title='Custom solutions' />
      <AboutService
        src={AboutServiceCustom}
        title='We are Best in Custom solutions'
        to='/contactus'
      />
      <OurProcess />
      <ServiceProvided h2='More Services' divider />
      <Footer />
    </div>
  );
}
