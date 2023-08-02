// Init
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// images
import HeaderBG from "../../assets/Images/about_header_bg.svg";
import HeaderMobBG from "../../assets/Images/about_mob_header_bg.svg";
import { ReactComponent as Arrow } from "../../assets/Images/about_section_arrow.svg";
// Component
export default function AboutHeader() {
  return (
    <>
      <div>
        <Grid className="aboutHeaderGridContainer" container spacing={1}>
          <Grid className="aboutHeaderTextGrid" md={6}>
            <div className="aboutHeaderTextDiv">
              <h2>
                Why Choose <br />
                <span> Ever Green Soft?</span>
              </h2>
              <p>
                We provide entrepreneurs and businesses with creative &
                innovative tools that improves the way they do business.
              </p>
              {/* <Link to="/contactus" className="aboutHeaderBtnDiv">
                <button className="aboutHeaderBtn">Get Started</button>
                <Arrow className="aboutHeaderBtnArrow" />
              </Link> */}
            </div>
          </Grid>
          <Grid className="aboutHeaderImgGrid" md={6}>
            <img
              className="aboutHeaderWebImg"
              src={HeaderBG}
              alt="background"
            />
            <img
              className="aboutHeaderMobImg"
              src={HeaderMobBG}
              alt="mobileBG"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
