import React from 'react';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHook from './components/NavbarHook/NavbarHook';
import Content from './components/Content/Content';

const App = () => {
  return (
    <>
    <Router>
      {/* <Navigation /> */}
      <NavbarHook />
      <main>
        <Routes>
          <Route path="*" element={<Content />} />
        </Routes>
      </main>
      <Footer />
      </Router>
    </>
  );
};

export default App;
