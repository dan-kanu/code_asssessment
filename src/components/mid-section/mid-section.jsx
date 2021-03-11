import React from "react";
import TextContent from "../text-content/text-content";
import image from "../../images/Device_Mobile.png";
import "./mid-section.css";

function MidSection() {
  return (
    <section className="mid-section-container">
      <div className="mid-section-content-wrapper">
        <div className="mid-section-column">
          <img src={image} width="100%" alt="Device Mobile" />
        </div>
        <div className="mid-section-column">
          <TextContent
            content="Nom diam phasellus vestibulum lorem sed. Massa enim nec dui nunc mattis enim. Quisque egestas diam in arcu cursus euismod quis viverra. Eget arcu dictum varius duis at consectetur lorem donec massa."
            primaryHeading="Eyebrow"
            primaryHeadingColor="#0262F0"
            secondaryHeading="Generating relevant &amp; engaging content"
            textAlignment="left"
          />
        </div>
      </div>
    </section>
  );
}

export default MidSection;
