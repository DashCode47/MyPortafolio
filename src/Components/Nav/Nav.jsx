import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageRounded } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setactiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#services"
        onClick={() => setactiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>

      <a
        href="#portafolio"
        onClick={() => setactiveNav("#portafolio")}
        className={activeNav === "#portafolio" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#contact"
        onClick={() => setactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageRounded />
      </a>
    </nav>
  );
};

export default Nav;
