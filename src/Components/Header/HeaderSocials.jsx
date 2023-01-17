import React from "react";
import { BsLinkedin, BsGithub, BsDribbble, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/david-lozada471/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/dashcode47" target="_blank">
        <BsGithub />
      </a>
      <a href="https://instagram.com/davsh47" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
