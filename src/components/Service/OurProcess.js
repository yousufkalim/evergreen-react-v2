// Init
import React from 'react';
// images
import WebProcess from '../../assets/Images/service_process_web.svg';
import BgTitle from '../../assets/Images/process_bg_title.svg';
// Component
export default function OurProcess() {
  return (
    <>
      <div className='OurProcessContainer'>
        <div className='OurProcessLeftDiv'>
          <div>
            <div className='OurProcessTitleDiv'>
              <div className='OurProcessTitleDivider'></div>
              <p className='OurProcessTitle'>
                We solve clients' projects in a simple & efficient way
              </p>
            </div>
            <h2 className='OurProcessSubTitle'>We always follow the standard work process</h2>
          </div>
          <div className='OurProcessImageDiv'>
            <img src={WebProcess} />
          </div>
        </div>
        <div className='OurProcessRightDiv'>
          <img src={BgTitle} />
        </div>
      </div>
    </>
  );
}
