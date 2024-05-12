import React, { useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import '../../index.css';
// import { motion } from 'framer-motion';
// import { GoToTopButton } from '../GoToTopButton/GoToTopButton';

export const Benefits = () => {
  // const isMobile = window.innerWidth < 576;

  const [data, setData] = useState([]);

  useMemo(() => {
    fetch(`${process.env.PUBLIC_URL}/text/data.json`)
      .then((response) => response.json())
      .then((data) => setData(data.benefits));
  }, []);
  console.log(data, 'taco');

  return (
    <Container fluid className="bg-pink p-2" id="benefits">
      <h2 className="section-header">Benefits</h2>
      <section className="container-fluid text-center ">
        <h3 className="h3 p-2 mx-lg-5">
          Regular Pilates clients taught by an experienced instructor, notice
          the following benefits:
        </h3>

        {data.map(
          (text) => (
            // isMobile ? (
            <div key={text.id} className="benefits">
              <p
                className={
                  text.text.length > 30
                    ? 'benefits-text small-font'
                    : 'benefits-text'
                }
              >
                {text.text}
              </p>
            </div>
          )
          // ) : (
          //   <motion.div
          //     key={text.id}
          //     className="benefits"
          //     initial={{ opacity: 0, x: text.id % 2 === 0 ? 200 : -200 }}
          //     whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          //     viewport={{ once: false }}
          //   >
          //     <p className="benefits-text">{text.text}</p>
          //   </motion.div>
          // )
        )}
      </section>
    </Container>
  );
};
