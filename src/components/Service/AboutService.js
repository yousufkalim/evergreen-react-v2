// Init
import React from 'react';
// images
import AboutServiceWeb from '../../assets/Images/about_service_web.svg';
import { ReactComponent as Arrow } from '../../assets/Images/about_section_arrow.svg';
import { Link } from 'react-router-dom';
// Component
export default function AboutService(props) {
  return (
    <>
      <div className='aboutServiceContainer'>
        <div className='aboutServiceLeftDiv'>
          <div className='aboutServiceImageDiv'>
            <img src={props.src || AboutServiceWeb} />
          </div>
        </div>
        <div className='aboutServiceRightDiv'>
          <div className='aboutServiceTextDiv'>
            <div className='aboutServiceTitleDiv'>
              <div className='aboutServiceTitleDivider'></div>
              <h2 className='aboutServiceTitle'>About Service</h2>
            </div>
            <h2 className='aboutServiceSubTitle'>
              {props.title || 'We are Best Web Development company'}
            </h2>
            <p className='aboutServiceDesp'>
              rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
            <Link to={props.to} className='aboutServiceButtonDiv'>
              <button className='aboutServiceButton'>Get This Service</button>
              <Arrow color='#fff' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
