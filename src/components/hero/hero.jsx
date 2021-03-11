import React from "react";
import Button from "../button/button";
import TextContent from "../text-content/text-content";
import image from "../../images/Device_Ipad.png";
import "./hero.css";
import Header from "../header/header";

function Hero() {
  return (
    <div className="hero-container">
      <Header />
      <div className="hero-content-wrapper">
        <div className="hero-column">
          <TextContent
            content="Elementum sagisttis vitea et leo duis ut. Eu Fegiat pretium nibh ipsum
            consequat."
            isHero
            primaryHeading="Who we are"
            textAlignment="left"
            textColor="#fff"
            secondaryHeading="Engage brand and increase viewability."
          />
          <div className="hero-ctas">
            <Button
              onclick={() =>
                alert("Another reason I should be hired? Attention to details")
              }
              label="Download Now"
            />
            <a className="hero-link" href="/#">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-column hero-image">
          <img alt="Device Ipad" src={image} width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
