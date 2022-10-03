// Init
import React from 'react';

// Component
export default function ServiceHeader(props) {
  return (
    <div className='serviceHeaderContainer'>
      {props.path && (
        <p className='serviceHeaderPath'>{props.path || 'Home - service - Website'}</p>
      )}
      {props.title && (
        <h2 className='serviceHeaderTitle'>{props.title || 'Web Development & design'}</h2>
      )}
      {props.desp && (
        <p className='serviceHeaderDesp'>
          {props.desp ||
            'We have completed many projects form various companies in the world . we have made many of our clients feel happy and satisfied with the result we have provided'}
        </p>
      )}
    </div>
  );
}
