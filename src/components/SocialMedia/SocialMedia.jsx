import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { InstagramEmbed } from 'react-social-media-embed';
import { Container } from 'react-bootstrap';

export const SocialMedia = () => {
  return (
    <Container fluid className="bg-mint p-2" id="cost">
      <h2 className="section-header">Social Media</h2>
      <div className="mb-2 d-flex justify-content-center align-items-center">
        <p className="social-text">Find us on Facebook and Instagram!</p>
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
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/CpT-vUvO0xu/"
          width={425}
          captioned
          className="mx-3"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CxijsyfOM-v/"
          width={425}
          captioned
          className="mx-3"
        />
      </div>
    </Container>
  );
};
