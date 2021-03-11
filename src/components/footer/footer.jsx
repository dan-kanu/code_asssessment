import React from "react"
import footerLogo from '../../images/10up_Logo.svg';
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <img  alt="10up Logo" src={footerLogo} />
    </div>
  );
}
export default Footer;
