import React from "react";
import Button from "../button/button";
import TextContent from "../text-content/text-content";
import "./bottom-section.css";

function BottomSection() {
  return (
    <section className="bottom-section-container">
      <div className="bottom-section-content-wrapper">
        <div className="bottom-section-column">
          <TextContent
            content="create custom solutions with the aim to improve overall outcomes"
            primaryHeading="Eyebrow"
            secondaryHeading="Integrated tech"
            textAlignment="center"
            textColor="#fff"
          />
          <Button label=" Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default BottomSection;
