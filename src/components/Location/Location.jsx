import React from 'react';
import { Container } from 'react-bootstrap';
import '../../index.css';

export const Location = () => {
  const logo = `${process.env.PUBLIC_URL}/images/RFLogo.png`;

  return (
    <Container fluid className="bg-pink p-2" id="location">
      <h2 className="section-header">Where to Find Us</h2>
      <Container fluid className="d-flex flex-wrap justify-content-around">
        <img src={logo} alt="Logo" height="300" width="200" className="pb-2" />
        <p className="secondaryText">
          Conveniently to East Cobb, Roswell, Sandy Springs, and Woodstock, our
          studio has something for everyone. We offer beginner and advanced
          classes, as well as private sessions. We are located in the heart of
          East Cobb, just off Johnson Ferry Road.
        </p>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.238327012947!2d-84.43087852337466!3d33.98641167318163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50d79daf00001%3A0xf86754ec7dc215ec!2s1511%20Johnson%20Ferry%20Rd%20suite%20115%2C%20Marietta%2C%20GA%2030062!5e0!3m2!1sen!2sus!4v1711145062843!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Container className="address">
          <div className="p-2" id="formText">
            <a
              href="https://maps.google.com/?q=1511JohnsonFerryRd,+Marietta,+GA+30062"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <a
                href="https://maps.apple.com/?q=1511JohnsonFerryRd,+Marietta,+GA+30062"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                1511 Johnson Ferry Road, Suite 115, Marietta, GA 30062
              </a>
            </a>
          </div>
          <div className="p-2">
            <i className="fa fa-phone m-0"></i>
            <a href="tel:+17704010203" className="link">
              770-401-0203
            </a>
          </div>
        </Container>
      </Container>
    </Container>
  );
};
