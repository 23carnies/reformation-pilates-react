import React, {useRef} from 'react';
import {Footer} from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
// import { Cards } from './pages/Cards/Cards';
import {Beginning} from './components/Beginning/Beginning';
import { Coupon } from './components/Coupon/Coupon';
import { Benefits } from './pages/Benefits/Benefits';
import { Instructors } from './pages/Instructors/Instructors';
import { Cost } from './components/Cost/Cost';
import { Contact } from './components/Contact/Contact';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Location } from './components/Location/Location';
import { SimpleNavbar } from './components/SimpleNavbar/SimpleNavbar';
import { Route, Routes } from 'react-router-dom'; // Import Outlet, Route, BrowserRouter, and Routes



const App = () => {
  const ref = useRef(null);
  const options = {
    smooth: true,
    multiplier: 1,
    smartphone: {
      smooth: true,
    },
  };
  return (
     <>
      <SimpleNavbar />
      <LocomotiveScrollProvider options={options} watch={[]} containerRef={ref}>
        <div data-scroll-container ref={ref}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Beginning />
                  <Cost />
                  <Coupon />
                  <Location />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/benefits" element={<Benefits />} />
          </Routes>
        </div>
      </LocomotiveScrollProvider>
    </>
  );
};

export default App;
