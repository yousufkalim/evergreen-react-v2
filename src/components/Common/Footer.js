// Init
import React from "react";
// images
import Logo from "../../assets/Images/navbar_logoV2.svg";
import FacebookIcon from "../../assets/Images/footer_facebook_icon.svg";
import TwitterIcon from "../../assets/Images/footer_twitter_icon.svg";
import LinkedinIcon from "../../assets/Images/footer_linkedin_icon.svg";
import WhatsappIcon from "../../assets/Images/footer_whatsapp_icon.svg";
import { Link } from "react-router-dom";

// Component
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerUpperDiv">
          <div className="footerLeftSection">
            <img src={Logo} />
            <h2>
              Amplify Your <br />
              <span>business's potential</span>
            </h2>
            <p>Connect with EverGreenSoft's Sales Whiz for customized business solutions.</p>
          </div>
          <div className="footerRightSection">
            <div className="footerMenuDiv">
              <h2>Navigate</h2>
              <Link className="footerLinks" to="/project">
                Projects
              </Link>
              <Link className="footerLinks" to="/about">
                About
              </Link>
              <Link className="footerLinks" to="/ourvalues">
                Our Values
              </Link>
              <Link className="footerLinks" to="/contactus">
                Contact
              </Link>
            </div>
            <div className="footerMenuDiv">
              <h2>Focus</h2>
              <Link className="footerLinks" to="/appdevelopment">
                App Design
              </Link>
              <Link className="footerLinks" to="/appdevelopment">
                App Development
              </Link>
              <Link className="footerLinks" to="/webdevelopment">
                Web Development
              </Link>
              <Link className="footerLinks" to="/webdevelopment">
                Website Design
              </Link>
            </div>
          </div>
        </div>
        <div className="footerLowerDiv">
          <div className="footerCopyRightDiv">
            <p>
              © {new Date().getFullYear()} <span>Ever Green Soft</span> All Rights Reserved.
            </p>
          </div>
          <div className="footerDivider"></div>
          <div className="footerSocialDiv">
            <img src={FacebookIcon} />
            <img src={TwitterIcon} />
            <img src={LinkedinIcon} />
            <img src={WhatsappIcon} />
          </div>
        </div>
      </div>
    </>
  );
}
