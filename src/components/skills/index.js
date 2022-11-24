import React from "react";
import Card from "../UI/card";
import { Element } from "react-scroll";
import MediamHeading from "../UI/MediamHeading";
import SmallHeading from "../UI/SmallHeading";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style.css";
import { SkillData } from "../data/SkillData";

function Skills(props) {
  return (
    <div className="container" id="skills">
      <Card className="cardstyling">
        <div className="skill-content">
          <SmallHeading text="What I do" />
          <MediamHeading text="Specializing in" />
        </div>
        <div
          className="skill-blog"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          {SkillData.map((skill, i) => {
            const { skillName, desc, textColor, value, pathColor } = skill;
            return (
              <div className="skill-content-blog" key={i}>
                <div className="skill-container">
                  <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    styles={buildStyles({
                      textColor: textColor,
                      pathColor: pathColor,
                    })}
                  />
                </div>
                <div>
                  <p className="skill-name">{skillName}</p>
                  <p className="font-14 textlight skill-desc">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
export default Skills;
