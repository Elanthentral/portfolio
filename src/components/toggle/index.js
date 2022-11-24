import React from "react";
import "./style.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Toggle() {
  return (
    <div className="toggle">
      <BsFillSunFill />
      <BsFillMoonFill />
      <div className="t-button"></div>
    </div>
  );
}

export default Toggle;
