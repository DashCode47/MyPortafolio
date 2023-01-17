import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import "animate.css";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="animate__animated animate__slideInLeft">David Lozada</h1>
        <h5 className="h5 text-light">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Mobile Developer",
              1500,
              "Web Developer",
              1500,
              "React JS",
              1500,
              "React Native",
              1500,
            ]}
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
    </header>
  );
};
export default Header;
