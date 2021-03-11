import React from "react";
import closeIcon from "../../images/Icon_Close.svg";
import "./nav.css";

function Nav(props) {
  const { onclose } = props;
  return (
    <div className="nav-container">
      <img
        className="close-icon"
        src={closeIcon}
        onClick={onclose}
        width="40px"
        alt="Menu Close"
      />
    
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">News</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Product</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
