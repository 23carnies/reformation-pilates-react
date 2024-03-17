import React from "react";
import { Container } from "react-bootstrap";
import "./Benefits.css";
import Beginning from "../../components/Beginning/Beginning";

const Benefits = () => {
  const studio = `${process.env.PUBLIC_URL}/images/Studio3.jpeg`;
  return (
    <>
      <Beginning />
      <Container fluid className="bg-warning fullHeight m-2 p-2" id="benefits">
        <h2 className="benefits">Benefits</h2>
        <section className="container text-center d-xl-flex">
          <img
            src={studio}
            className=""
            alt="Pilates Studio"
            width="450"
            height="600"
          />
          <div className="text-left mx-4 my-xl-auto">
            <h3 className="p-2">
              Regular Pilates clients taught by an experienced instructor,
              notice the following benefits:
            </h3>
            <ul className="p-2">
              <dl>Longer, leaner, toned muscles</dl>
              <dl>Improved posture and Balance</dl>
              <dl>
                Increased core strength, granting an new, more integrated
                physical power
              </dl>
              <dl>Increased range of motion and flexibility</dl>
              <dl>Increased energy level and improved circulation</dl>
              <dl>Greater stability in hyper-mobile joints</dl>
              <dl>
                Improved sports performance (tennis, golf, running, skiing,
                swimming, etc.)
              </dl>
              <dl>More balanced body (most people have a stronger side)</dl>
              <dl>
                Adaptive method, able to suit the injured, pregnant, dancers,
                athletes, seniors, and beginners
              </dl>
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Benefits;
