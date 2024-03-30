import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import '../../index.css';

export const Footer = () => {
  const logo = `${process.env.PUBLIC_URL}/images/RFLogo.png`; // Import the 'logo' image
  const year = new Date().getFullYear();
  return (
    <footer>
      <nav
        className="d-flex justify-content-between align-items-center"
        role="navigation"
      >
        <div>
          <a className="logo" href="index.html">
            <img src={logo} width="170" height="50" alt="Logo" />
          </a>
        </div>
        <p>&copy; {year} Reformation Pilates</p>
        <div>
          <div className="me-3 mb-2">
            <a
              className="social-media"
              href="https://www.facebook.com/ReformationPilatesStudio/"
            >
              <FaFacebookF />
            </a>
            <a
              className="social-media"
              href="https://www.instagram.com/katrinaroelle/"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};
