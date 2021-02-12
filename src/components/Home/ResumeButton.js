import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Resume from "../../assets/Chun-Nixon-Pang-Resume.pdf";
import "./ResumeButton.css";

function ResumeButton() {
  const [active, toggle] = useState(false);

  const slide = useSpring({
    width: active ? 150 : 0,
    height: 35,
    backgroundColor: "#cc5150",
    config: { duration: 600 },
  });

  return (
    <a href={Resume} target="_blank" rel="noopener noreferrer">
      <div
        className="resumeButton"
        onMouseEnter={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
      >
        <a.div className="fill" style={slide}>
          <a.div className="content">
            <CloudDownloadIcon fontSize="small" className="icon" />
            Read Resumé
          </a.div>
        </a.div>
      </div>
    </a>
  );
}

export default ResumeButton;
