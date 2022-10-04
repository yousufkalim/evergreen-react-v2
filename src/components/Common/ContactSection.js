// Init
import React, { useState } from 'react';
// images
import BgTitle from '../../assets/Images/contact_section_bg_title.svg';
import { ReactComponent as Arrow } from '../../assets/Images/about_section_arrow.svg';

import Call from '../../assets/Images/contact_callus.svg';
import Email from '../../assets/Images/contact_mail.svg';
import { Grid } from '@mui/material';
import validate from 'validate.js';

// Component
export default function ContactSection() {
  const [activeName, setActiveName] = useState('');

  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      name: '',
      phone: '',
      company: '',
      email: '',
      message: '',
    },
    touched: {},
    errors: {},
  });
  const schema = {
    name: {
      presence: { allowEmpty: false, message: 'is required' },
      // message: 'must start with 0',
      length: {
        minimum: 3,
        // message: 'must be atleast 3 characters long',
        // maximum: 40,
      },
    },

    phone: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        minimum: 10,

        message: 'number must be atleast 10 digits long',
      },
    },
    company: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 60,
      },
    },
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: {
        attribute: 'true',
        message: 'must be in this format (name@domain.com)',
      },

      length: {
        maximum: 60,
      },
    },
    message: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 1000,
      },
    },
  };
  const handleChange = (event) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const blurHandler = (e) => {
    e.preventDefault();
    setActiveName('');
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
      errors: errors || {},
    }));
  };
  const hasError = (field) => (formState.touched[field] && formState.errors[field] ? true : false);

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
                      <label
                        style={{
                          color:
                            activeName === 'name'
                              ? '#f7c844'
                              : !hasError('name') && formState.values.name === ''
                              ? '#f8f8f8'
                              : hasError('name')
                              ? '#FF603D'
                              : '#b7b7b740',
                        }}
                      >
                        Name
                      </label>
                      <input
                        maxLength='64'
                        name='name'
                        onChange={handleChange}
                        onBlur={(e) => blurHandler(e)}
                        onFocus={(e) => setActiveName(e.target.name)}
                        // className='New_ContactSection_Input'
                        value={formState.values.name}
                        style={{
                          borderBottom:
                            activeName === 'name'
                              ? '1px solid #f7c844'
                              : hasError('name')
                              ? '1px solid #FF603D'
                              : '1px solid #b7b7b740',
                        }}
                        placeholder='Your Name'
                      />
                      {hasError('name') && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            color: '#FF603D',
                          }}
                        >
                          {formState.errors.name[0]}
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12} md={5.8}>
                    <div className='contactSectionFormInputDiv'>
                      <label
                        style={{
                          color:
                            activeName === 'company'
                              ? '#f7c844'
                              : !hasError('company') && formState.values.company === ''
                              ? '#f8f8f8'
                              : hasError('company')
                              ? '#FF603D'
                              : '#b7b7b740',
                        }}
                      >
                        Company
                      </label>
                      <input
                        name='company'
                        maxLength='60'
                        value={formState.values.company}
                        onChange={handleChange}
                        onBlur={(e) => blurHandler(e)}
                        onFocus={(e) => setActiveName(e.target.name)}
                        style={{
                          borderBottom:
                            activeName === 'company'
                              ? '1px solid #f7c844'
                              : hasError('company')
                              ? '1px solid #FF603D'
                              : '1px solid #b7b7b740',
                        }}
                        placeholder='Your Company'
                      />
                      {hasError('company') && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            color: '#FF603D',
                          }}
                        >
                          {formState.errors.company[0]}
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12} md={5.8}>
                    <div className='contactSectionFormInputDiv'>
                      <label
                        style={{
                          color:
                            activeName === 'email'
                              ? '#f7c844'
                              : !hasError('email') && formState.values.email === ''
                              ? '#f8f8f8'
                              : hasError('email')
                              ? '#FF603D'
                              : '#b7b7b740',
                        }}
                      >
                        Email
                      </label>
                      <input
                        maxLength='60'
                        name='email'
                        value={formState.values.email}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => blurHandler(e)}
                        onFocus={(e) => setActiveName(e.target.name)}
                        style={{
                          borderBottom:
                            activeName === 'email'
                              ? '1px solid #f7c844'
                              : hasError('email')
                              ? '1px solid #FF603D'
                              : '1px solid #b7b7b740',
                        }}
                        placeholder='acb@xyz.com'
                      />
                      {hasError('email') && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            color: '#FF603D',
                          }}
                        >
                          {formState.errors.email[0]}
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12} md={5.8}>
                    <div className='contactSectionFormInputDiv'>
                      <label
                        style={{
                          color:
                            activeName === 'phone'
                              ? '#f7c844'
                              : !hasError('phone') && formState.values.phone === ''
                              ? '#f8f8f8'
                              : hasError('phone')
                              ? '#FF603D'
                              : '#b7b7b740',
                        }}
                      >
                        Phone
                      </label>
                      <input
                        name='phone'
                        value={formState.values.phone}
                        maxLength='13'
                        onChange={(e) => {
                          // check input using regex
                          var regex = RegExp(/^\d+$/);
                          const test_Result = regex.test(e.target.value);
                          if (test_Result || e.target.value == '') {
                            handleChange(e);
                          }
                        }}
                        onBlur={(e) => blurHandler(e)}
                        onFocus={(e) => setActiveName(e.target.name)}
                        style={{
                          borderBottom:
                            activeName === 'phone'
                              ? '1px solid #f7c844'
                              : hasError('phone')
                              ? '1px solid #FF603D'
                              : '1px solid #b7b7b740',
                        }}
                        placeholder='Enter Number'
                      />
                      {hasError('phone') && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            color: '#FF603D',
                          }}
                        >
                          {formState.errors.phone[0]}
                        </div>
                      )}
                    </div>
                  </Grid>
                  <Grid className='contactSectionFormGrid' xs={12}>
                    <div className='contactSectionFormInputDiv'>
                      <label
                        style={{
                          color:
                            activeName === 'message'
                              ? '#f7c844'
                              : !hasError('message') && formState.values.message === ''
                              ? '#f8f8f8'
                              : hasError('message')
                              ? '#FF603D'
                              : '#b7b7b740',
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        autoComplete='off'
                        name='message'
                        maxLength='1000'
                        value={formState.values.message}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => blurHandler(e)}
                        onFocus={(e) => setActiveName(e.target.name)}
                        style={{
                          borderBottom:
                            activeName === 'message'
                              ? '1px solid #f7c844'
                              : hasError('message')
                              ? '1px solid #FF603D'
                              : '1px solid #b7b7b740',
                        }}
                        rows={1}
                        placeholder='Type something...'
                      />
                      {hasError('message') && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            color: '#FF603D',
                          }}
                        >
                          {formState.errors.message[0]}
                        </div>
                      )}
                    </div>
                  </Grid>
                </Grid>
                <div className='contactSectionBtnContainer'>
                  <div
                    className={
                      !formState.isValid ? 'contactSectionBtnDiv_Disable' : 'contactSectionBtnDiv'
                    }
                  >
                    <button
                      disabled={formState.isValid ? false : true}
                      className={
                        !formState.isValid ? 'contactSectionBtn_Disable ' : 'contactSectionBtn'
                      }
                    >
                      Submit
                    </button>
                    <Arrow
                      className={
                        !formState.isValid ? 'contactSectionBtnImg_Disable' : 'contactSectionBtnImg'
                      }
                    />
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
