import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import "animate.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <section id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="animate__animated animate__slideInLeft">David Lozada</h1>
        <h5 className="h5 text-light">
          <Typewriter
            options={{
              strings: [
                "Mobile Developer",
                "Web Developer",
                "React JS",
                "React Native",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        <div className="me">
          <img src={me} alt="me" />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
