import React, { useState } from "react";
import "./HeroContent.css";
import { Link } from "react-scroll";
import { HerosecData } from "../../data/HerosecData";
import { NavData } from "../../data/NavData";
import Button from "../../UI/Button";
import comp from "../../../assets/images/comp.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

function HeroContent() {
  const { name, title, desciption, resumePdf } = HerosecData;

  return (
    <div className=" container hero-content" id="home">
      <div className="herocontent__container " data-aos="fade-right">
        <div class="lhero--content">
          <p className="uppercase ls-1">
            <span className="primaryColor">Hello </span>
            {name}
          </p>
          <h1>{title}</h1>

          <p className="hero-desc">{desciption}</p>
          <div className="social-container">
            <a
              href="www.linkedin.com/in/elan-thentral-532907229"
              target="_blank"
            >
              <AiFillLinkedin size={30} className="textlight" />
            </a>
            <a href="https://github.com/Elanthentral" target="_blank">
              <FaGithubSquare size={30} />
            </a>
          </div>

          <div className="herocontent-btn-container">
            <Link to="contact" smooth={true} duration={1000} offset={-50}>
              <Button label="Hire me" type="hire" />
            </Link>
            <Button
              label="Download CV"
              inverse={true}
              type="download"
              pdfs={resumePdf}
            />
          </div>
        </div>

        <div className="rhero-content">
          <img src={comp} className="" />
        </div>
      </div>
    </div>
  );
}
export default HeroContent;
