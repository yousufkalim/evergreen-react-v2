// Init
import React from 'react';
// images
import ValueImage1 from '../../assets/Images/values_section_1.svg';
// Component

export default function ValuesSection(props) {
  return (
    <>
      <div
        className={props.reverse ? 'valuesSectionContainerReverse' : 'valuesSectionContainer'}
        style={{ background: props.darkTheme ? '#1E1E1E' : '#FBFBFB' }}
      >
        <div className={props.reverse ? 'valuesSectionImgDivReverse' : 'valuesSectionImgDiv'}>
          <img src={props.src || ValueImage1} />
        </div>
        <div
          className={
            props.reverse ? 'valuesSectionTextContainerReverse' : 'valuesSectionTextContainer'
          }
        >
          <div className={props.reverse ? 'valuesSectionTextDivReverse' : 'valuesSectionTextDiv'}>
            <div
              className={
                props.reverse ? 'valuesSectionSubTitleDivReverse' : 'valuesSectionSubTitleDiv'
              }
            >
              <div
                className={
                  props.reverse
                    ? 'valuesSectionSubTitleDividerReverse'
                    : 'valuesSectionSubTitleDivider'
                }
              ></div>
              <p className='valuesSectionSubTitle'>Our Values</p>
            </div>
            <h2
              className='valuesSectionTitle'
              style={{ color: props.darkTheme ? '#FBFBFB' : '#1E1E1E' }}
            >
              {props.title || 'INNOVATION'}
            </h2>
            <div className={props.reverse ? 'valuesSectionDespDivReverse' : 'valuesSectionDespDiv'}>
              <p>{props.p1}</p>
              <br />
              <p>{props.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
