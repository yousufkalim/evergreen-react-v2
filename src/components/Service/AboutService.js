// Init
import React from "react";
// images
import AboutServiceWeb from "../../assets/Images/about_service_web.svg";
import { ReactComponent as Arrow } from "../../assets/Images/about_section_arrow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Component
export default function AboutService(props) {
  return (
    <>
      <div
        //  className="aboutServiceContainer"
        className={props.reverse ? "aboutServiceContainerReverse" : "aboutServiceContainer"}
      >
        <div className="aboutServiceLeftDiv">
          <div className="aboutServiceImageDiv">
            <img src={props.src || AboutServiceWeb} />
          </div>
        </div>
        <div className="aboutServiceRightDiv">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="aboutServiceTextDiv"
          >
            <div className="aboutServiceTitleDiv">
              <div className="aboutServiceTitleDivider"></div>
              <h2 className="aboutServiceTitle">
                {/* About Service */}
                {props.servicetitle}
              </h2>
            </div>
            <h2
              // className="aboutServiceSubTitle aboutServiceCustomSubTitle"
              className={
                props.fontCssChange ? "aboutServiceSubTitle_fontchange" : "aboutServiceSubTitle"
              }
            >
              {props.title || "We are Best Web Development company"}
            </h2>
            <p className="aboutServiceDesp">
              {props.disc ||
                "Unlock your online potential with our custom development expertise.Get a complimentary consultation with our EverGreen Sales Whiz.Optimize Shopify, WordPress, Woo Commerce, React, Node.js, Vue.js, and Next.js for Custom Website Development.Elevate your digital presence with our exceptional team of experts"}

              {/* Unlock your online potential with our custom development expertise.Get a complimentary
              consultation with our EverGreen Sales Whiz.Optimize Shopify, WordPress, Woo Commerce,
              React, Node.js, Vue.js, and Next.js for Custom Website Development.Elevate your
              digital presence with our exceptional team of experts */}
            </p>
            <Link to={props.to} className="aboutServiceButtonDiv">
              <button className="aboutServiceButton">{props.btntxt}</button>
              <Arrow color="#1e1e1e" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
