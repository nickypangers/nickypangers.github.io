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
          <ProjectItem
            projectName="Testing"
            desc="App"
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <ProjectItem
            projectName="Testing"
            desc="Go"
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <ProjectItem
            projectName="Testing"
            desc="Go"
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <ProjectItem
            projectName="Testing"
            desc="Go"
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
