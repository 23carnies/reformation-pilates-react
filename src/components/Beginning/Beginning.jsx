import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap'; // Import Col and Row from react-bootstrap
import '../../index.css';
import { Link } from 'react-router-dom';

export const Beginning = () => {
  const isDesktop = window.innerWidth > 992;

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
              className="img-fluid img-shadow m-4"
            />
          </Col>
        ) : null}
        <Col lg={6}>
          {' '}
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
          </div>
        </Col>
      </Row>
      <div className="text-center mb-2 m-lg-4">
        <Link to="/benefits">
          <Button className="callToAction">LEARN MORE!</Button>
        </Link>
      </div>
    </Container>
  );
};
