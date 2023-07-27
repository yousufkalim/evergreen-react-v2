// Init
import { Grid } from "@mui/material";
import React from "react";
// images
import Airbnb from "../../assets/Images/partner_bnb.svg";
import HubSpot from "../../assets/Images/partner_hub.svg";
import Google from "../../assets/Images/partner_google.svg";
import Microsoft from "../../assets/Images/partner_microsoft.svg";
import Walmart from "../../assets/Images/partner_walmart.svg";
import FedEx from "../../assets/Images/partner_fedex.svg";
// Component
import SectionHeader from "./SectionHeader";
export default function PartnerSection() {
  return (
    <>
      <div className="partnerSectionContainer">
        <div>
          <SectionHeader spantxt=" " h1="With yours trust" h2="Amazing Partners" />
        </div>
        <div style={{ marginTop: "3%" }}>
          <Grid className="partnerSectionGridContainer" container spacing={1}>
            <Grid className="partnerSectionGrid" xs={12} sm={4} md={2}>
              <img src={Airbnb} />
            </Grid>
            <Grid className="partnerSectionGrid" xs={12} sm={4} md={2}>
              <img src={HubSpot} />
            </Grid>
            <Grid className="partnerSectionGrid" xs={12} sm={4} md={2}>
              <img src={Google} />
            </Grid>
            <Grid className="partnerSectionGrid" xs={12} sm={4} md={2}>
              <img src={Microsoft} />
            </Grid>
            <Grid className="partnerSectionGrid" xs={12} sm={4} md={2}>
              <img src={Walmart} />
            </Grid>
            <Grid className="partnerSectionGrid" xs={12} sm={4} md={2}>
              <img src={FedEx} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
