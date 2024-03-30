import React from "react";
import { NavLink as useLocation, useNavigate } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

const Navigation = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true,
    });
  };

  return (
    <header id="navigation">
      <nav>
        <ul>
          {location !== "test" ? (
            <>
              <li>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
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
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={() => goToPageAndScroll("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("benefits")}>
                  Benefits
                </button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("instructors")}>
                  Instructors
                </button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("price-schedule")}>
                  Price & Schedule
                </button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("contact")}>
                  Contact
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
