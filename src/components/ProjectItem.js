import React from "react";
import "./ProjectItem.css";

function ProjectItem({ projectName, desc, image }) {
  return (
    <div className="projectItem">
      <img src={image} alt="logo" />
      <div className="projectItem__content">
        <h2>{projectName}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
