import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'animate.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Cost = () => {
  const isMobile = window.innerWidth < 768;

  const textVariantDiv = {
    hidden: {
      x: -1000,
    },
    visible: {
      x: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
  };
  const textVariants = {
    hidden: {
      x: -1000,
      // opacity: 0,
    },
    visible: {
      x: 1,
      // opacity: 1,
      backgroundColor: '#079781',
      color: '#fff',
      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };
  return (
    <Container fluid className="bg-pink p-2" id="cost">
      <h2 className="section-header">Cost</h2>
      <Row className="justify-content-center mx-lg-5">
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={
              isMobile
                ? `${process.env.PUBLIC_URL || ''}/images/duoUp.jpg`
                : `${process.env.PUBLIC_URL || ''}/images/doubleWheel.jpg`
            }
            alt="Pilates trio class"
            className="img-fluid img-shadow"
            width={isMobile ? 400 : 600}
            height={isMobile ? 600 : 400}
          />
        </Col>
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="text-center">
            <h2 className="pt-2 headingText">
              Beginner, Intermediate, Advanced and Pilates Fusion
            </h2>
            <p className="px-2 secondaryText">
              Modifications are given based on individual needs. Small apparatus
              such as exercise bands, magic circles, foam rollers and light hand
              weights may be utilized. Exercise mats are provided for all mat
              classes but you may bring your own.
            </p>
            <div className="text-center mb-2 m-lg-4">
              <Link to="/benefits">
                <motion.button
                  className="btn callToAction"
                  initial={{
                    opacity: 0.5,
                    x: -100,
                    scale: 1.1,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    // rotate: 360,
                  }}
                  transition={{ type: 'spring', stiffness: 80 }}
                >
                  REGISTER
                </motion.button>
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3 className="cost-title py-2 animate__animated animate__pulse">
                Apparatus Fees
              </h3>
              <motion.div
                variants={textVariantDiv}
                // whileInView={textVariants.visible}
              >
                <motion.p
                  whileInView={textVariants.visible}
                  className="mb-2 fees"
                >
                  Private lessons $95
                </motion.p>
                <motion.p
                  whileInView={textVariants.visible}
                  className="mb-2 fees"
                >
                  Semi-Private $52
                </motion.p>
                <motion.p
                  whileInView={textVariants.visible}
                  className="mb-2 fees"
                >
                  Groups: Trio or Quad $35
                </motion.p>
              </motion.div>
              <h3 className="cost-title pt-4 animate__animated animate__pulse">
                Mat Classes
              </h3>
              <p className="secondaryText">
                Call for current schedule and pricing. <br />
                New classes forming.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
