import React from "react";
import { Container } from "react-bootstrap";
import "./Beginning.css";

const Beginning = () => {
  return (
    <Container fluid className="bg-green fullHeight m-2 p-2" id="beginning">
      <h2 className="mat">Pilates exercise began with mat.</h2>
      <p className="headingText">
        Some clients prefer learning mat first or, in addition to equipment
        exercise. Mat classes are mostly performed on the floor, sometimes
        utilizing Pilates props, such as the magic circles, foam roller, balls,
        and therabands.
      </p>
      <p className="headingText">
        For those unfamiliar with Pilates equipment, a fitness/postural
        evaluation is necessary. Private lessons offer the entire range of
        equipment including the cadillac, reformer, wunda chair, and props.{" "}
      </p>
      <p className="headingText">
        Duets and Trios are done on the reformer. Flexible and comfortable
        clothing should be worn.
      </p>

      {/* <!-- NEED VIDEO OR PICTURE HERE --> */}
    </Container>
  );
};

export default Beginning;
