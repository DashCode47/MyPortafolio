import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>HEllo I'm</h5>
        <h1>David Lozada</h1>
        <h5 className="h5 text-light">React-Native and React Developer</h5>
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
