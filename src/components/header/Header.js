import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

import { NavData } from "../data/NavData";
import Toggle from "../toggle";

function Header() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("href");
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="">
      <nav className={color ? "navbar navbar-bg" : "navbar"}>
        <div className="navbar__left">
          <Link to="home">
            <h1>
              Elan <span>thentral</span>
            </h1>
          </Link>
        </div>
        <div className="navbar__right">
          {/* <ul className={toggleIcon ? "navbar-menu active" : "navbar-menu "}> */}
          <ul className="navbar-menu ">
            {NavData.map((item, i) => (
              <li className="navmenu-item" key={i}>
                <Link
                  to={item.url}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  // isDynamic={true}
                >
                  <a
                    href=""
                    className={activeNav === item.url ? "active" : " "}
                    onClick={() => {
                      setActiveNav(item.url);
                      setToggleIcon(false);
                    }}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
