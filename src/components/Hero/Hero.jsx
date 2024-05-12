import React from 'react';
import '../../index.css';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

export const Hero = () => {
  const hero = `${process.env.PUBLIC_URL}/images/warrior.jpg`;
  const logo = `${process.env.PUBLIC_URL}/images/RFLogo.png`;
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
          <motion.div
            className="image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.2 }}
          >
            <img
              src={logo}
              alt="Reformation Pilates Studio Logo"
              height="200"
              width="300"
              id="topLogo"
            />
          </motion.div>

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
