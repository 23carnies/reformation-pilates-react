import Benefits from '../../pages/Benefits/Benefits';
import Contact from '../../pages/Contact/Contact';
import Cards from '../../pages/Cards/Cards';
import Instructors from '../../pages/Instructors/Instructors';
import PriceSchedule from '../../pages/PriceSchedule/PriceSchedule';
import Hero from '../Hero/Hero';
import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export const Content = () => {
  const ref = useRef(null);
  const options = {
    smooth: true,
    multiplier: 1,
    smartphone: {
      smooth: true,
    },
  };
  return (
    <LocomotiveScrollProvider options={options} watch={[]} containerRef={ref}>
      <div data-scroll-container ref={ref}>
        <Hero />
        <Cards />
        <Benefits />
        <Instructors />
        <PriceSchedule />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};
