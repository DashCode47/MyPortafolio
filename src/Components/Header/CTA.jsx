import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-secondary animate__animated animate__zoomIn">
        Download CV
      </a>
      <a
        href="#portafolio"
        className="btn btn-primary animate__animated animate__zoomIn"
      >
        My Work
      </a>
    </div>
  );
};

export default CTA;
