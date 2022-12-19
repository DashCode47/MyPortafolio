import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
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
          <a href="#porfolio">Porfolio</a>
        </li>
        <li>
          <a href="#testimonials ">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Сontact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterCircle />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; DavCode.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
