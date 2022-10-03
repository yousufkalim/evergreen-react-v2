// Init
import React from 'react';
// images
import App from '../../assets/Images/service_provided_app.png';
import Custom from '../../assets/Images/service_provided_custom.png';
// Component
import SectionHeader from '../Common/SectionHeader';
import ServiceProvidedCard from '../Common/ServiceProvidedCard';
import { Grid } from '@mui/material';
export default function ServiceProvided(props) {
  return (
    <>
      <div className='serviceProvidedSection'>
        <SectionHeader h2={props.h2} divider={props.divider} />
        <div className='serviceProvidedDiv'>
          <Grid className='serviceProvidedGridContainer' container spacing={1}>
            <Grid className='serviceProvidedGrid' xs={9} sm={8} md={3.5}>
              <ServiceProvidedCard />
            </Grid>
            <Grid className='serviceProvidedGrid' xs={9} sm={8} md={3.5}>
              <ServiceProvidedCard title='App Development & design' src={App} />
            </Grid>
            <Grid className='serviceProvidedGrid' xs={9} sm={8} md={3.5}>
              <ServiceProvidedCard title='Custom Solutions' src={Custom} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
