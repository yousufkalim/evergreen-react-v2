// Init
import React from 'react';
// images
import HeaderBG from '../../assets/Images/values_header_bg.svg';
// Component
export default function ValuesHeader(props) {
  return (
    <>
      <div className='OurValuesContainer'>
        <img className='OurValuesBgImage' src={HeaderBG} />
        <div className='OurValuesTitleDiv'>
          <h2>
            <span>Our</span> Values
          </h2>
        </div>
      </div>
    </>
  );
}
