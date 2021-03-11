import React from "react";
import "./button.css";

function Button(props) {
  const { label, onclick } = props;

  return (
    <button onClick={onclick} className="button">
      {label}
    </button>
  );
}

export default Button;
