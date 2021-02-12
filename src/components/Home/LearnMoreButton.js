import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./LearnMoreButton.css";

function LearnMoreButton() {
  const [active, toggle] = useState(false);

  const slide = useSpring({
    width: active ? 150 : 0,
    height: 35,
    backgroundColor: "#00a79a",
    config: { duration: 600 },
  });

  return (
    <div
      className="learnMoreButton"
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
    >
      <a.div className="fill" style={slide}>
        <a.div className="content">
          <ArrowForwardIcon fontSize="small" className="icon" />
          Learn More
        </a.div>
      </a.div>
    </div>
  );
}

export default LearnMoreButton;
