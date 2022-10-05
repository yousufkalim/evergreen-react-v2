// Init
import React from 'react';
// images
import AboutServiceApp from '../../assets/Images/about_service_app.svg';
// Component
import Navbar from '../../components/Common/Navbar';
import ServiceHeader from '../../components/Service/ServiceHeader';
import AboutService from '../../components/Service/AboutService';
import OurProcess from '../../components/Service/OurProcess';
import ServiceProvided from '../../components/Common/ServiceProvided';
import Footer from '../../components/Common/Footer';
export default function AppDev() {
  return (
    <div>
      <Navbar />
      <ServiceHeader path='Home > Service > App' title='App Development & design' />
      <AboutService
        src={AboutServiceApp}
        title='We are Best App Development company'
        to='/contactus'
      />
      <OurProcess />
      <ServiceProvided h2='More Services' divider />
      <Footer />
    </div>
  );
}
