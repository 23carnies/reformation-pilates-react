import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import '../../index.css';

export const Footer = () => {
  const logo = `${process.env.PUBLIC_URL}/images/RFLogo.png`;
  const year = new Date().getFullYear();
  return (
    <Container
      fluid
      className="d-flex justify-content-between align-items-center footer-container p-4"
      role="navigation"
    >
      <div>
        <a className="logo" href="index.html">
          <img src={logo} width="170" height="50" alt="Logo" />
        </a>
        <p>&copy; {year} Reformation Pilates</p>
      </div>
      <div>
        <div className="me-3 mb-2 d-flex">
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
    </Container>
  );
};
