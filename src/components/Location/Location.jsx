import React from 'react';
import { Container } from 'react-bootstrap';
import '../../index.css';

export const Location = () => {
  const logo = `${process.env.PUBLIC_URL}/images/RFLogo.png`;

  return (
    <Container fluid className="bg-pink p-2" id="location">
      <h2 className="section-header">Where to Find Us</h2>
      <Container fluid className="text-center">
        <img src={logo} alt="Logo" height="200" width="350" className="pb-4" />
        <p className="headingText mt-2">
          Convenient to East Cobb, Roswell, Sandy Springs, and Woodstock, our
          studio has something for everyone. We offer beginner and advanced
          classes, as well as private sessions. We are located in the heart of
          East Cobb, just off Johnson Ferry Road.
        </p>
        <div>
          <pre className="text-center">
            1511 Johnson Ferry Road, Suite 115, Marietta, GA 30062
            <br />
            {/* </pre>
          <pre className="text-center"> */}
            <a href="tel:+17704010203" className="text-dark link">
              770-401-0203
            </a>
          </pre>
        </div>
        <div className="my-3 d-md-flex justify-content-center align-items-center">
          <a
            href="https://maps.google.com/?q=1511JohnsonFerryRd,+Marietta,+GA+30062"
            target="_blank"
            rel="noreferrer"
            className="btn callToAction me-md-2 my-2"
          >
            Open in Google Maps
          </a>
          <a
            href="https://maps.apple.com/?q=1511JohnsonFerryRd,+Marietta,+GA+30062"
            target="_blank"
            rel="noreferrer"
            className="btn callToAction ms-md-2 my-2"
          >
            Open in Apple Maps
          </a>
        </div>
      </Container>
    </Container>
  );
};
