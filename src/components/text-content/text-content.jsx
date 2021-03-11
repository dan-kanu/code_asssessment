import React from "react";
import "./text-content.css";

function TextContent(props) {
  const {
    primaryHeading,
    primaryHeadingColor,
    secondaryHeading,
    textColor,
    isHero,
    textAlignment,
    content,
  } = props;

  const primaryHeadingstyle = { color: primaryHeadingColor || "#01FDAB" };
  const containerStyle = {
    color: textColor || "#081523",
    textAlign: textAlignment,
  };

  return (
    <div style={containerStyle} className="text-container">
      <p style={primaryHeadingstyle} className="primary-heading">
        {primaryHeading}
      </p>
      {isHero ? (
        <h1 className="secondary-heading hero-text">{secondaryHeading}</h1>
      ) : (
        <h2 className="secondary-heading section-text">{secondaryHeading}</h2>
      )}
      <p className="content">{content}</p>
    </div>
  );
}

export default TextContent;
