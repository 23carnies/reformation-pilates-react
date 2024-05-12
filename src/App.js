// import React, { useRef } from 'react';
import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Beginning } from './components/Beginning/Beginning';
import { Coupon } from './components/Coupon/Coupon';
import { Benefits } from './components/Benefits/Benefits';
import { Instructors } from './pages/Instructors/Instructors';
import { Cost } from './components/Cost/Cost';
import { Contact } from './components/Contact/Contact';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Location } from './components/Location/Location';
import { SimpleNavbar } from './components/SimpleNavbar/SimpleNavbar';
import { Route, Routes } from 'react-router-dom'; 
import { Katy } from './pages/Katy/Katy';
import { SocialMedia } from './components/SocialMedia/SocialMedia';



const App = () => {
  // const ref = useRef(null);
  // const options = {
  //   smooth: true,
  //   multiplier: 1,
  //   smartphone: {
  //     smooth: true,
  //   },
  // };
  return (
     <>
      <SimpleNavbar />
      {/* <LocomotiveScrollProvider options={options} watch={[]} containerRef={ref}>
        <div data-scroll-container ref={ref}> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Beginning />
                  <Cost />
                  <SocialMedia />
                  <Benefits />
                  <Coupon />
                  <Location />
                  <Contact />
                </>
              }
            />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/katy" element={<Katy />} />
            {/* <Route path="/benefits" element={<Benefits />} /> */}
          </Routes>
        {/* </div>
      </LocomotiveScrollProvider> */}
    </>
  );
};

export default App;
