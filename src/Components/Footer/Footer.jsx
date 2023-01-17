import React from "react";
import "./footer.css";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        DavCode
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portafolio">Porfolio</a>
        </li>
        <li>
          <a href="#contact">Сontact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/david-lozada471/"
          target={"_blank"}
        >
          <AiFillLinkedin />
        </a>
        <a href="https://instagram.com/davsh47" target={"_blank"}>
          <AiFillInstagram />
        </a>
        <a href="https://github.com/DashCode47" target={"_blank"}>
          <AiFillGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; DavCode.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
