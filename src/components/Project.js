import React from "react";
import "./Project.css";
import ProjectItem from "./ProjectItem";

function Project() {
  return (
    <div className="project">
      <h2>Projects</h2>
      <p>
        I spend most of my free time learning new technologies and working on my
        personal projects.
        <br />
        <br />
        This allows me to develop my personal career portfolio and showcase my
        experience and skills.
        <br />
        <br />
        Below are a list of projects that I have been or am working on at the
        moment.
      </p>
      <div className="project__content">
        <div className="project__row">
          <a
            href="https://amaoz-9dee4.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              projectName="Amazon Clone"
              desc="React"
              image={require("../assets/images/amazon_clone_bg.png")}
            />
          </a>
          <ProjectItem
            projectName="Testing"
            desc="Go"
            image={require("../assets/images/imageedit_1_9208243330.png")}
          />
          <ProjectItem
            projectName="Testing"
            desc="Go"
            image={require("../assets/images/imageedit_1_9208243330.png")}
          />
          <ProjectItem
            projectName="Testing"
            desc="Go"
            image={require("../assets/images/imageedit_1_9208243330.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
