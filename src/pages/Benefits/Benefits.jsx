import React, { useState, useMemo} from 'react';
import { Container } from 'react-bootstrap';
import '../../index.css';
import { motion } from 'framer-motion';


export const Benefits = () => {
  // const studio = `${process.env.PUBLIC_URL}/images/Studio3.jpeg`;
    const [data, setData] = useState([]);

    useMemo(() => {
      fetch(`${process.env.PUBLIC_URL}/text/data.json`)
        .then((response) => response.json())
        .then((data) => setData(data.benefits));
    }, []);
  const textVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
  };

  return (
    <>
      <Container fluid className="bg-mint m-2 p-2" id="benefits">
        <h2 className="section-header">Benefits</h2>
        <section className="container text-center d-xl-flex">
          {/* <img
            src={studio}
            className=""
            alt="Pilates Studio"
            width="450"
            height="600"
          /> */}
          <motion.div
            className="text-left mx-4 my-xl-auto"
            variants={textVariants}
            whileInView={textVariants.visible}
          >
            <h3 className="p-2">
              Regular Pilates clients taught by an experienced instructor,
              notice the following benefits:
            </h3>
            {data.map((text) => (
              <motion.li key={text.id} className="benefit-texts p-2">
                {text.text}
                </motion.li>
            ))}
          </motion.div>
        </section>
      </Container>
    </>
  );
};
