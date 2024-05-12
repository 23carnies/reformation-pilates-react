import React from 'react';
import { Container } from 'react-bootstrap';
import { Elfsight } from '../../components/Elfsight/Elfsight';
import { GoToTopButton } from '../GoToTopButton/GoToTopButton';
import { Footer } from '../Footer/Footer';

export const Contact = () => {
  return (
    <>
      <Container fluid className="bg-mint p-2" id="contact">
        <h2 className="section-header">Contact</h2>
        <h3>Reformation Pilates Studio</h3>

        <h4 className="text-center mt-5">Have questions? Send us a note!</h4>
        <Elfsight />
        <GoToTopButton />
      </Container>
      <Footer />
    </>
  );
};
