// Init
import React from 'react';
// images
import Logo from '../../assets/Images/navbar_logo.svg';
import FacebookIcon from '../../assets/Images/footer_facebook_icon.svg';
import TwitterIcon from '../../assets/Images/footer_twitter_icon.svg';
import LinkedinIcon from '../../assets/Images/footer_linkedin_icon.svg';
import WhatsappIcon from '../../assets/Images/footer_whatsapp_icon.svg';

// Component
export default function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <div className='footerUpperDiv'>
          <div className='footerLeftSection'>
            <img src={Logo} />
            <h2>
              Creating a better <br />
              <span>IT solutions</span>
            </h2>
            <p>if You can Dream it, we can build it</p>
          </div>
          <div className='footerRightSection'>
            <div className='footerMenuDiv'>
              <h2>Pages</h2>
              <p>About</p>
              <p>Our Projects</p>
              <p>Contact</p>
            </div>
            <div className='footerMenuDiv'>
              <h2>Focus</h2>
              <p>Web Development</p>
              <p>App Development</p>
              <p>Custom Solutions</p>
            </div>
          </div>
        </div>
        <div className='footerLowerDiv'>
          <div className='footerCopyRightDiv'>
            <p>
              © 2015-{new Date().getFullYear()} <span>Parsec Tech</span> All Rights Reserved.
            </p>
          </div>
          <div className='footerDivider'></div>
          <div className='footerSocialDiv'>
            <img src={FacebookIcon} />
            <img src={TwitterIcon} />
            <img src={LinkedinIcon} />
            <img src={WhatsappIcon} />
          </div>
        </div>
      </div>
    </>
  );
}
