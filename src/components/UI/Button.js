import React, { useState } from "react";
import { colors } from "../../Style";
import { NavData } from "../data/NavData";

function Button(props) {
  // const [hover, setIsHover] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  return (
    <a
      href={props.pdfs}
      download={props.type === "download" ? "resume" : null}
      target="_blank"
      className="primary-btn"
      // onMouseEnter={handleMouseEnter}
      // onMouseOut={handleMouseLeave}
      style={{
        background: props.inverse ? "transparent" : colors.primaryColor,
        boxSizing: "border-box",
        padding: "10px 20px",
        color: props.inverse ? colors.primaryColor : "white",
        display: "inline-block",
        borderRadius: "20px",
        boxShadow: props.inverse ? "none" : "#6dba6d 0px 0px 10px 0px",
        border: "2px solid",
        borderColor: props.inverse ? colors.primaryColor : "transparent",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        letterSpacing: "1px",
        marginTop: "20px",
        // backgroundColor: hover ? colors.darkColor : "null",
        // color: hover ? "white" : "null",
        // boxShadow: hover ? "none" : "null",
      }}
    >
      {props.label}
    </a>
  );
}
export default Button;
