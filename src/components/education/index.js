import React from "react";
import { EducationData, ExperienceData } from "../data/EducationData";
import Card from "../UI/card";
import MediamHeading from "../UI/MediamHeading";
import "./style.css";

function Education() {
  return (
    <div className="container section-spacing" id="experience">
      <Card>
        <div
          className="edu-container "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="edu-left">
            <MediamHeading text="My Education" />
            {EducationData.map((edu, index) => {
              const { year, degree, university, deg, colg } = edu;
              return (
                <div className="edu-detail">
                  <p className="year-badge">{year}</p>
                  <h4>{degree}</h4>
                  <h6>{university}</h6>
                  <p className="textlight font-12">{deg}</p>
                  <p className="textlight font-12">{colg}</p>
                </div>
              );
            })}
          </div>

          <div className="exp-right">
            <MediamHeading text="My Experience" />
            {ExperienceData.map((exp, index) => {
              const { year, designation, companyname, desc } = exp;
              return (
                <div className="edu-detail" key={index}>
                  <p className="year-badge">{year}</p>
                  <h4>{designation}</h4>
                  <h6>{companyname}</h6>
                  <p className="textlight font-12">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Education;
