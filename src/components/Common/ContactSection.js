// Init
import React from 'react';
// images
import BgTitle from '../../assets/Images/contact_section_bg_title.svg';
import { ReactComponent as Arrow } from '../../assets/Images/about_section_arrow.svg';

import Call from '../../assets/Images/contact_callus.svg';
import Email from '../../assets/Images/contact_mail.svg';
import { Grid } from '@mui/material';
// Component
export default function ContactSection() {
  return (
    <>
      <div className='contactSectionContainer'>
        <div className='contactSectionBgTitleDiv'>
          <img src={BgTitle} />
        </div>
        <div className='contactSectionMainDiv'>
          <div className='contactSectionHeaderDiv'>
            <h2>Contact us</h2>
            <p>
              Please send us a detailed message about your needs and we will get back to you shortly
            </p>
          </div>
          <div className='contactSectionContentDiv'>
            <div className='contactSectionLeftContent'>
              <div className='contactSectionLinksHeadingDiv'>
                <h2>Get in Touch</h2>
                <p>Tell us More about you and we’ll contact you soon</p>
              </div>
              <div className='contactSectionLinksDiv'>
                <div className='contactSectionLink'>
                  <img src={Call} />
                  <div className='contactSectionLinkText'>
                    <p>Call us</p>
                    <span>+1234567887654</span>
                  </div>
                </div>
                <div className='contactSectionLink'>
                  <img src={Email} />
                  <div className='contactSectionLinkText'>
                    <p>Gmail</p>
                    <span>ABCD@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='contactSectionRightContent'>
              <form className='contactSectionFormDiv'>
                <Grid className='contactSectionFormContainer' container spacing={1}>
                  <Grid className='contactSectionFormGrid' xs={12} md={5.8}>
                    <div className='contactSectionFormInputDiv'>
                      <label>Name</label>
                      <input placeholder='Your Name' />
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12} md={5.8}>
                    <div className='contactSectionFormInputDiv'>
                      <label>Company</label>
                      <input placeholder='Your Company' />
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12} md={5.8}>
                    <div className='contactSectionFormInputDiv'>
                      <label>Email</label>
                      <input placeholder='acb@xyz.com' />
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12} md={5.8}>
                    <div className='contactSectionFormInputDiv'>
                      <label>Phone</label>
                      <input placeholder='Enter Number' />
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12}>
                    <div className='contactSectionFormInputDiv'>
                      <label>Message</label>
                      <input placeholder='Type something...' />
                    </div>
                  </Grid>
                </Grid>
                <div className='contactSectionBtnContainer'>
                  <div className='contactSectionBtnDiv'>
                    <button className='contactSectionBtn'>Submit</button>
                    <Arrow className='contactSectionBtnImg' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
