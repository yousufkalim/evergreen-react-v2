// Init
// import { Divider } from '@mui/material';
import React from 'react';
// images
import Web from '../../assets/Images/service_provided_web.png';
import Arrow from '../../assets/Images/service_hover_arrow.svg';
// Component
export default function ServiceProvidedCard(props) {
  return (
    <>
      <div className='serviceProvidedCardContainer'>
        <div className='serviceProvidedCardHoverDiv'></div>
        <img className='serviceProvidedCardImg' src={props.src || Web} />
        <div className='serviceProvidedCardTextDiv'>
          <div className='serviceProvidedCardDividerDiv'></div>
          <p>{props.title || 'Web Development & design'}</p>
          <div className='serviceProvidedCardArrow'>
            <img src={Arrow} />
          </div>
        </div>
      </div>
    </>
  );
}
