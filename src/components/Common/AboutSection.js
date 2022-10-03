// Init
import React from 'react';
// images
import About from '../../assets/Images/about_section_home.svg';
import Arrow from '../../assets/Images/about_section_arrow.svg';
import VisionBg from '../../assets/Images/about_vision_bg.svg';
// Component
export default function AboutSection(props) {
  return (
    <>
      <div className='aboutSectionContainer' style={{ background: props.bgColor && props.bgColor }}>
        <div className='aboutSectionLeftDiv'>
          <div className='aboutSectionImageDiv'>
            <img src={props.src || About} />
          </div>
        </div>
        <div
          className='aboutSectionRightDiv'
          style={{ background: props.RightbgColor && props.RightbgColor }}
        >
          <div className='aboutSectionTextDiv'>
            <div className='aboutSectionTitleDiv'>
              <div
                className='aboutSectionTitleDivider'
                style={{
                  background: props.titleColor ? props.titleColor : '#fbfbfb',
                }}
              ></div>
              <h2
                className='aboutSectionTitle'
                style={{
                  color: props.titleColor ? props.titleColor : '#fbfbfb',
                }}
              >
                About us
              </h2>
            </div>
            <h2
              className='aboutSectionSubTitle'
              style={{
                color: props.subTitleColor ? props.subTitleColor : '#fbfbfb',
              }}
            >
              {props.title || 'Our Vission'}
            </h2>
            <p
              className='aboutSectionDesp'
              style={{
                color: props.despColor ? props.despColor : '#fbfbfb',
              }}
            >
              {props.desp ||
                'Engaged its was evident pleased husband. Ye goodness felicity do the best disposal dwelling no. First am plate jokes to began of cause an scale. Subjects he prospect elegance followed no overcame possible it on best circle.'}
            </p>
            {props.btn && (
              <div className='aboutSectionButtonDiv'>
                <button className='aboutSectionButton'>Know More</button>
                <img src={Arrow} />
              </div>
            )}
          </div>
          <div className='aboutSectionBgTitle'>
            <img src={props.bgSrc || VisionBg} />
          </div>
        </div>
      </div>
    </>
  );
}
