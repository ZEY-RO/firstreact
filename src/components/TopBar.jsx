import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream,faUser, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import "./TopBar.css"

const TopBar = () => {
  return (
    <div style={{paddingTop:"1%", textAlign: "center"}}>
      <div style={{paddingBottom:"1%"}}>
      <a
        href="index.html"
        
      >
        <img
          className="logo"
          style={{ width: "70px" }}
          src="https://www.baskinrobbins.com/etc/designs/br/images/branding/br-logo-stamp.svg"
          alt="Baskin' Robbins Logo"
        />{" "}
      </a>
      </div>
      <div className="menu" style={{paddingBottom:"0%"}}>
          <a href="index.html" class="tile"
            >Flavours <FontAwesomeIcon icon={faIceCream} /></a>
          <a href="index.html" class="tile"
            >Log In <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="index.html" class="tile"
            >Sign Up <FontAwesomeIcon icon={faSignInAlt} />
          </a>
        </div>
    </div>
  );
};

export default TopBar;
