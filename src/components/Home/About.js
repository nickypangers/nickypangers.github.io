import React from "react";
import "./About.css";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { useSpring, animated } from "react-spring";
import ProfilePicture from "../../assets/profile-pic.png";

function About() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });
  return (
    <div className="about" id="about">
      <animated.div className="about__content" style={fade}>
        <div className="about__left">
          {/* <img src={ProfilePicture} alt="Profile"/> */}
          <h1>MUCH WOW
            
          </h1>
        </div>
        <div className="about__right">
          <p className="subh1">About Me</p>
          <h2>Independent and Self-Motivated</h2>
          <div className="about__quote">
            <div className="about__indent"></div>
            <p>
              BEng Electronic and Electrical Engineering graduate from the
              University of Leeds
            </p>
          </div>
          <p>
            Independent and self-motivated engineer with proven and tested in
            engineering and programming skills, specializing in RF engineering
            and embedded systems. A keen programmer passionate about software
            and full-stack development, proficient in a range of modern
            technologies such as C, HTML, CSS, Javascript and more.
          </p>
          <div className="about__details">
            <div className="about__name">
              <div className="about__nameIcon">
                <PersonIcon fontSize="medium" />
              </div>
              <h3>Chun Nixon Pang</h3>
            </div>
            <div className="about__phone">
              <div className="about__phoneIcon">
                <PhoneIcon fontSize="medium" />
              </div>
              <h3>+852 9150 5123</h3>
            </div>
          </div>
          <div className="about__email">
            <div className="about__emailIcon">
              <AlternateEmailIcon fontSize="medium" />
            </div>
            <h3>nixonpang98@gmail.com</h3>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default About;
