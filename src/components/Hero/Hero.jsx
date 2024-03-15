import React from "react";
import "./Hero.css";

import { Container } from "react-bootstrap";
const hero = `${process.env.PUBLIC_URL}/images/SuperBack.jpg`;

const Hero = () => {
  return (
    <Container fluid id="home">
      <div className="bg-pink d-flex justify-content-center align-items-center">
        <img src={hero} alt="Students on reformers" className="bw" />
        <div className="p-5">
          <h1 className="text-center">Reformation Pilates</h1>
          <h3 className="text-center">
            Specializing in individual and small group programming on the
            Pilates apparatus.
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
