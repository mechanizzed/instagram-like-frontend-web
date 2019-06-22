import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

export default function Header() {
  return (
    <header id="header-main">
      <div className="header-content">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </header>
  );
}
