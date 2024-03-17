import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav
        className="bg-color-foot d-flex flex-column flex-md-row pt-3 px-md-auto align-items-center"
        role="navigation"
      >
        <a className="logo" href="index.html">
          <img
            src="resources/images/RFLogo.png"
            width="170"
            height="50"
            alt="Logo"
          />
        </a>
        <p>&copy 2022 Reformation Pilates</p>
        <p>
          <a href="https://www.facebook.com/ReformationPilatesStudio/">
            <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/katrinaroelle/">
            <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
