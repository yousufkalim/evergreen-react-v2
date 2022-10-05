// Init
import React from 'react';

// Component
import Navbar from '../../components/Common/Navbar';
import ServiceHeader from '../../components/Service/ServiceHeader';
import AboutService from '../../components/Service/AboutService';
import OurProcess from '../../components/Service/OurProcess';
import ServiceProvided from '../../components/Common/ServiceProvided';
import Footer from '../../components/Common/Footer';
export default function WebDev() {
  return (
    <div>
      <Navbar />
      <ServiceHeader path='Home > Service > Website' title='Web Development & design' />
      <AboutService to='/contactus' />
      <OurProcess />
      <ServiceProvided h2='More Services' divider />
      <Footer />
    </div>
  );
}
