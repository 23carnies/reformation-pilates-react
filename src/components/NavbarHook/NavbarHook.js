import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";
const logo = `${process.env.PUBLIC_URL}/images/RFLogo.png`; // Import the 'logo' image


const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    // const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/benefits"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Benefits
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructors"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Instructors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/price-schedule"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Price & Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/get-started"
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Get Started
          </NavLink>
        </li> */}
      </ul>
    );
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={logo} alt="Reformation Pilates Logo" width={200}/>
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};
export default NavbarHook;
