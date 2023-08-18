// Init
import React from "react";
// images
import HeaderWebBG from "../../assets/Images/values_header_bg.svg";
import HeaderMobBG from "../../assets/Images/values_header_Mobbg.svg";
import Mouse from "../../assets/Images/Mouse.gif";

// Component
export default function ValuesHeader(props) {
  return (
    <>
      <div className="OurValuesContainer">
        <img
          className="OurValuesWebBgImage"
          src={HeaderWebBG}
          alt="background"
        />
        <img className="OurValuesMobBgImage" src={HeaderMobBG} alt="mobileBG" />
        <div className="OurValuesTitleDiv">
          <h2>
            <span>Our</span> Values
          </h2>
        </div>
        <div className="OurValuesMouseGif">
          <img src={Mouse} alt="gif" />
        </div>
      </div>
    </>
  );
}
