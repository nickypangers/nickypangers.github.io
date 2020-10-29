import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
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
    <a href={Resume}>
      <div
        className="resumeButton"
        onMouseEnter={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
      >
        <animated.div className="fill" style={slide}>
          <animated.div className="content">
            <CloudDownloadIcon fontSize="small" className="icon" />
            Read Resumé
          </animated.div>
        </animated.div>
      </div>
    </a>
  );
}

export default ResumeButton;
