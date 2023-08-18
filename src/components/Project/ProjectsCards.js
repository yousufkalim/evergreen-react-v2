// Init
import React from "react";
// images
import Arrow from "../../assets/Images/about_section_arrow.svg";

import ProjectImg1 from "../../assets/Images/project_card_1.png";
import { motion } from "framer-motion";
// Component
export default function ProjectCard(props) {
  return (
    <>
      <div className={props.RightTextBox ? "projectCardContainer" : "projectCardContainerLeft"}>
        <div className="projectCardHoverDiv">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="projectCardTextDiv"
          >
            <div className="projectCardNumberDiv">
              <div className="projectCardDivider"></div>
              <p className="projectCardNumber">{props.projectID || "#01"}</p>
            </div>
            <h2 className="projectCardTitle">{props.title || "Hire Talent Scheme"}</h2>
            <p className="projectCardDesp">
              {props.desp ||
                "Acquisition & Staff Augmentation Experts provides new possibilities with our team of skilled developers and designers. We are excited to offer you an incredible opportunity: choose from our extensive pool of 700 experts in Sales & Marketing, Website Development & Design. Take full advantage of our complimentary initial interview sourcing and hire them to effectively tackle your tasks."}
            </p>
          </motion.div>

          <div className="projectCardBtnDiv">
            <a href="tel:313-509-8197" className="projectCardBtn">
              Hire Now
            </a>
            <img src={Arrow} />
          </div>
        </div>
        <img className="projectCardBgImage" src={props.bgSrc || ProjectImg1} />
      </div>
    </>
  );
}
