import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="animate__animated animate__zoomIn btn">
        Dowload CV
      </a>
      <a
        href="#contact"
        className="animate__animated animate__zoomIn btn btn-primary"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
