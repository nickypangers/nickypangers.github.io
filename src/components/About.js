import React from "react";
import "./About.css";
import Typical from "react-typical";

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Nixon. I am currently a Hardware Engineer in Hong Kong but am
        going to start my masters degree in Embedded Systems Engineering at my
        alma mater &ndash; University of Leeds in Jan 2021.
        <br />
        <br />
        After studying abroad in the UK for 8 years, I graduated from the
        University of Leeds with a 2:1 classification in{" "}
        <strong>BEng Electronic and Electrical Engineering</strong> in Jul 2019.
        <br />
        <br />
        {/* To implement typing animation for skills */}
        My skills include:{" "}
        <Typical
          loop={Infinity}
          wrapper={"b"}
          steps={[
            "Embedded C",
            1500,
            "Dart/Flutter",
            1500,
            "Golang",
            1500,
            "React JS",
            1500,
            "HTML/CSS",
            1500,
          ]}
        />
      </p>
    </div>
  );
}

export default About;
