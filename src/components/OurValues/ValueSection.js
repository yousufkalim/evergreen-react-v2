// Init
import React from "react";
// images
import ValueImage1 from "../../assets/Images/values_section_1.svg";
import { motion } from "framer-motion";

// Component

export default function ValuesSection(props) {
  return (
    <>
      <div
        className={props.reverse ? "valuesSectionContainerReverse" : "valuesSectionContainer"}
        style={{ background: props.darkTheme }}
      >
        <div className={props.reverse ? "valuesSectionImgDivReverse" : "valuesSectionImgDiv"}>
          <img src={props.src || ValueImage1} />
        </div>
        <div
          className={
            props.reverse ? "valuesSectionTextContainerReverse" : "valuesSectionTextContainer"
          }
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={props.reverse ? "valuesSectionTextDivReverse" : "valuesSectionTextDiv"}
          >
            <div
              className={
                props.reverse ? "valuesSectionSubTitleDivReverse" : "valuesSectionSubTitleDiv"
              }
            >
              <div
                className={
                  props.reverse
                    ? "valuesSectionSubTitleDividerReverse"
                    : "valuesSectionSubTitleDivider"
                }
              ></div>
              <p className="valuesSectionSubTitle">Our Values</p>
            </div>
            <h2
              className="valuesSectionTitle"
              style={{ color: props.darkTheme ? "#FBFBFB" : "#FBFBFB" }}
            >
              {props.title || "Need help in AI"}
            </h2>
            <div className={props.reverse ? "valuesSectionDespDivReverse" : "valuesSectionDespDiv"}>
              <p>{props.p1}</p>
              <br />
              <p>{props.p2}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
