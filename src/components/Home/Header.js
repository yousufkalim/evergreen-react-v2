// Init
import React from "react";
import { Link } from "react-router-dom";
// images
import { ReactComponent as Arrow } from "../../assets/Images/about_section_arrow.svg";
import HeaderBG from "../../assets/Images/home_header_bg.svg";
import Mouse from "../../assets/Images/Mouse.gif";
// Component
export default function Header() {
  return (
    <div className="homeHeaderContainer">
      {/* <div className='homeHeaderBgImageDiv'>
        <img className='homeHeaderBgImage' src={HeaderBG} />
      </div> */}
      <div className="homeHeaderTextDiv">
        <h2 className="homeHeaderTitle">
          {/* Creating a better <br /> <span> IT solutions</span> */}
          Amplify Your <br /> business's potential with <br /> Staff
          augmentation
        </h2>
        <p className="homeHeaderDesp">
          Connect with EverGreenSoft's Sales Whiz for customized business
          solutions.
        </p>
        <Link to="/contactus" className="homeHeaderBtnDiv">
          <button className="homeHeaderBtn">Hire Talent free for 1 day </button>
          <div className="homeHeaderBtnArrow">
            <Arrow color="#1e1e1e" />
          </div>
        </Link>
        <div className="homeHeaderMouseDiv">
          <img className="homeHeaderMouseGif" src={Mouse} />
        </div>
      </div>
    </div>
  );
}
