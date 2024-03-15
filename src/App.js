import React from 'react';
import  Navbar  from './components/Navbar/Navbar';
import NavbarHook from './components/NavbarHook/NavbarHook';
import Benefits from './pages/Benefits';
import Instructors from './pages/Instructors';
import PriceSchedule from './pages/PriceSchedule';
import Contact from './pages/Contact';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
 return (
  <>
  <NavbarHook />
   <Home />
   <Benefits />
   <Instructors />
   <PriceSchedule />
   <Contact />
  </>
 );
};

export default App;
