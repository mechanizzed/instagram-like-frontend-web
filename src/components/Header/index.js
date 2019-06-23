import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoInstagram from "../../assets/images/logo-instagram-256.png";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Header() {
  return (
    <header id="header-main">
      <div className="header-content">
        <Link to="/">
          <img src={LogoInstagram} alt="Instagram" width="150" />
        </Link>
        <Link to="/new">
          <FontAwesomeIcon icon={faCamera} size="2x" />
        </Link>
      </div>
    </header>
  );
}
