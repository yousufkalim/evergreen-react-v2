// Init
import React from "react";
// images
// Component
export default function SectionHeader(props) {
  return (
    <>
      <div className="sectionHeaderContainer">
        <div className="sectionHeaderTitleDiv">
          {props.divider && <div className="sectionHeaderTitleDivider"></div>}
          <p>{props.h1 || "15 YEARS OF EXPERIENCE"}</p>
        </div>
        <h2>
          {props.h2 || "Trust us to take your business presence to new heights with our"}{" "}
          <span>{props.spantxt || " Sales Whiz"}</span>
        </h2>
      </div>
    </>
  );
}
