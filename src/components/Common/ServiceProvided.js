// Init
import React from "react";
// images
import App from "../../assets/Images/service_provided_app.png";
import Custom from "../../assets/Images/service_provided_custom.png";
// Component
import SectionHeader from "../Common/SectionHeader";
import ServiceProvidedCard from "../Common/ServiceProvidedCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function ServiceProvided(props) {
  return (
    <>
      <div className="serviceProvidedSection">
        <SectionHeader spantxt={props.spantxt} h2={props.h2} divider={props.divider} />
        <div className="serviceProvidedDiv">
          <Grid className="serviceProvidedGridContainer" container spacing={1}>
            <Grid className="serviceProvidedGrid" xs={9} sm={8} md={3.5}>
              <Link to="/webdevelopment">
                <ServiceProvidedCard />
              </Link>
            </Grid>
            <Grid className="serviceProvidedGrid" xs={9} sm={8} md={3.5}>
              <Link to="/appdevelopment">
                <ServiceProvidedCard title="App Development & design" src={App} />
              </Link>
            </Grid>
            <Grid className="serviceProvidedGrid" xs={9} sm={8} md={3.5}>
              <Link to="/customsolutions">
                <ServiceProvidedCard title="Sales & Marketing Solutions" src={Custom} />
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
