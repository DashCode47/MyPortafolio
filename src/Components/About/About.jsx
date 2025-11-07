import React from "react";
import "./about.css";
import me from "../../assets/me2.jpg";
import { BsAwardFill, BsFillFolderFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="me2" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>5+ Years working</small>
            </article>

            <article className="about_card">
              <BsFillFolderFill className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            <Typewriter
              options={{
                strings: [
                  "Hello, my name is David Lozada and I am a mobile and web developer. I              thoroughly enjoy creating new things and never shy away from a              challenge. Seeing ideas and concepts come to life is one of my              favorite parts of the development process. I look forward to              continue growing and developing the skills I already have, as well              as learning new ones!",
                ],
                autoStart: true,
                loop: false,
                delay: 60,
                deleteSpeed: 20,
              }}
            />
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
