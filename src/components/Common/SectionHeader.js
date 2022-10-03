// Init
import React from 'react';
// images
// Component
export default function SectionHeader(props) {
  return (
    <>
      <div className='sectionHeaderContainer'>
        <div className='sectionHeaderTitleDiv'>
          {props.divider && <div className='sectionHeaderTitleDivider'></div>}
          <p>{props.h1 || '15 YEARS OF EXPERIENCE'}</p>
        </div>
        <h2>{props.h2 || 'Offer The Latest Software And Solutions To Our customers!'}</h2>
      </div>
    </>
  );
}
