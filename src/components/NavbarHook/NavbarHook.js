import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";
import { Link as ScrollLink } from "react-scroll";

const NavbarHook = () => {
  const logo = `${process.env.PUBLIC_URL}/images/RFLogo.png`; // Import the 'logo' image
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
    const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="benefits"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Benefits
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="instructors"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Instructors
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="price-schedule"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Price & Schedule
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    );
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={logo} alt="Reformation Pilates Logo" width={200} />
        </NavLink>
        {isMobile && !isMenuOpen && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menud  ${isMenuOpen ? "show-menu" : "d-none"}`}
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
