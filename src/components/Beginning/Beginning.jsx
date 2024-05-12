import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'; // Import Col and Row from react-bootstrap
import '../../index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Beginning = () => {
  const isDesktop = window.innerWidth > 992;
  // console.log(isDesktop);
  // console.log(window.innerWidth);

  return (
    <Container fluid className="bg-mint p-2" id="beginning">
      <h2 className="section-header">Pilates exercise began with mat.</h2>
      <Row className="d-lg-flex">
        {isDesktop ? (
          <Col lg={6}>
            {/* Use Col with lg={6} to create a column that takes half of the width on large screens */}
            <img
              src={`${process.env.PUBLIC_URL || ''}/images/hangingBackBend.jpg`}
              alt="Pilates mat class"
              className="img-shadow m-4 ml-lg-5"
              id="beginningImg"
            />
          </Col>
        ) : null}
        <Col lg={6}>
          {/* Another column to hold the text content */}
          <div>
            <p className="headingText py-lg-5">
              Clients have the option to start with or add mat exercises to
              their routine, which often include props like magic circles and
              therabands.
            </p>
            <hr />
            <p className="secondaryText py-lg-5">
              Private lessons cater to those new to Pilates equipment, offering
              evaluations and access to a range of apparatus, including the
              cadillac and reformer.
            </p>
            <hr />
            <p className="headingText py-lg-5">
              Duets and Trios are done on the reformer. Flexible and comfortable
              clothing should be worn.
            </p>
            <hr />
            <p className="secondaryText py-lg-5">
              Modifications are given based on individual needs.
            </p>
          </div>
          <div className="text-center my-5 m-lg-4">
            <Link to="https://calendly.com/krnzique/new-client-consultation" target="_blank">
              <motion.button
                className="btn callToAction"
                initial={{
                  opacity: 0.5,
                  x: -100,
                  scale: 0.8,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  // rotate: 360,
                  scale: 1.4,
                }}
                transition={{ type: 'spring', stiffness: 80 }}
              >
                Book a Free Consultation
              </motion.button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
