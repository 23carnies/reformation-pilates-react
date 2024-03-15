import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHook from './components/NavbarHook/NavbarHook';
import Benefits from './pages/Benefits';
import Instructors from './pages/Instructors';
import PriceSchedule from './pages/PriceSchedule';
import Contact from './pages/Contact';
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <NavbarHook/>
        <Routes>
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/priceSchedule" element={<PriceSchedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    <App />

   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
