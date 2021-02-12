import React from "react";
import "./About.css";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { useSpring, animated as a } from "react-spring";
import ProfilePicture from "../../assets/profile-pic-bg.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

function About() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });

  return (
    <div className="about w-100 h-50" id="about">
      <a.div
        className="about__content d-flex flex-lg-row flex-column mt-5"
        style={fade}
      >
        <div className="about__left col-lg-4 col-12">
          <div className="about__image">
            <img src={ProfilePicture} alt="Profile" />
          </div>
          {/* <h1>MUCH WOW</h1> */}
        </div>
        <div className="about__right col-lg-8 col-12">
          <p className="subh1 mt-4">About Me</p>
          <h2>Independent and Self-Motivated</h2>
          <div className="about__quote">
            <div className="about__indent"></div>
            <p className="m-0 py-2">
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
            <a
              href="https://www.linkedin.com/in/nixon-pang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="about__linkedIn about__icon">
                <LinkedInIcon fontSize="medium" />
              </div>
            </a>
            <a
              href="http://github.com/nickypangers"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="about__github about__icon">
                <GitHubIcon fontSize="medium" />
              </div>
            </a>
            <a
              href="http://instagram.com/nickypangers"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="about__instagram about__icon">
                <InstagramIcon fontSize="medium" />
              </div>
            </a>
            <a href="mailto:nixonpang98@gmail.com">
              <div className="about__emailIcon about__icon">
                <AlternateEmailIcon fontSize="medium" />
              </div>
            </a>
          </div>
        </div>
      </a.div>
    </div>
  );
}

export default About;
