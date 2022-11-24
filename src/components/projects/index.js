import React, { useState } from "react";
import { Element } from "react-scroll";
import Card from "../UI/card";
import MediamHeading from "../UI/MediamHeading";
import SmallHeading from "../UI/SmallHeading";
import { ProjectData } from "../data/ProjectData";
import pro1 from "../../assets/images/pro2.jpg";
import Button from "../UI/Button";
import "./style.css";

function Projects() {
  const [projectShow, setProjectShow] = useState(false);
  const handlemouseenter = () => {
    setProjectShow(true);
  };
  const handlemouseleave = () => {
    setProjectShow(false);
  };

  return (
    <div
      className="container section-spacing project-container"
      id="projects"
      name="project"
    >
      <Card className="project-card">
        <div>
          <MediamHeading text="Portfolio" className="" />
        </div>
        <div
          className="project-container-row mtb-10"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {ProjectData.map((project, index) => (
            <div className="project-container-item" key={index}>
              <div className="porfolio-cards">
                <div className="portfolio-img">
                  <MediamHeading text={project.title} />
                  <img src={project.img} className="project-img" />
                </div>
                <div className="portfolio-content">
                  <h5>{project.title}</h5>
                  <p>{project.tech}</p>
                  <div className="project-btn">
                    <a href={project.lurl} target="_blank">
                      Live Demo
                    </a>
                    <a href={project.surl} target="_blank">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Projects;
