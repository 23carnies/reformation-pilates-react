import React from 'react';
import '../../index.css';
import { Container } from 'react-bootstrap';
const hero = `${process.env.PUBLIC_URL}/images/warrior.jpg`;
const logo = `${process.env.PUBLIC_URL}/images/rfLogo.png`;

export const Hero = () => {
  return (
    <Container
      fluid
      className="bg-pink "
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right 45%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container fluid id="home">
        <div className="p-5 hero">
          {/* <h1 className="text-center title">Reformation Pilates</h1> */}
          <img
            src={logo}
            alt="Reformation Pilates Studio Logo"
            height="200"
            width="300"
            id="topLogo"
          />

          <h2 className="text-center subTitle">
            Elevate your fitness journey where expertise meets innovation for
            tailored programs, whether you are an athlete, expectant mother, or
            seeking rehabilitation.
          </h2>
        </div>
      </Container>
    </Container>
  );
};
