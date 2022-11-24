import React from "react";
import foot1 from "../../assets/images/foot4.jpg";
import "./style.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <img
        src={foot1}
        className="foot-img"
        style={{ height: "100px", width: "100%" }}
      />
      <div className="footer-content">
        <span>ethentral@gmail.com</span>
        <div className="f-icon">
          <a href="www.linkedin.com/in/elan-thentral-532907229" target="_blank">
            <AiFillLinkedin size={30} className="textlight" />
          </a>
          <a href="https://github.com/Elanthentral" target="_blank">
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
