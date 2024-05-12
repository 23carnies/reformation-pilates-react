import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export const GoToTopButton = () => {
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={`go-to-top-button`}
      onClick={scrollToTop}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 'hidden' : 'visible' }} // Animate opacity based on visibility
      transition={{ ease: [1, 1, 0.3, 1], duration: 0.6 }}
      exit={{ opacity: 0 }}
    >
      <FaArrowUp className="mb-1" /> Top
    </motion.button>
  );
};
