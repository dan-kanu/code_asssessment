import React, { useState } from "react";
import Nav from "../nav/nav";
import logo from "../../images/site_logo.svg";
import menuIcon from "../../images/Icon_Menu.svg";
import "./header.css";

function Header() {
  const [displayMenu, setDisplMenu] = useState(false);

  return (
    <div className="header-wrapper">
      <img src={logo} alt="Logo" />
      {!displayMenu && (
        <img
        className="menu-icon"
          src={menuIcon}
          alt="menu icon"
          onClick={() => setDisplMenu(true)}
     
        />
      )}
      {displayMenu && <Nav onclose={() => setDisplMenu(false)} />}
    </div>
  );
}

export default Header;
