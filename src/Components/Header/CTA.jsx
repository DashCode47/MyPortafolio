import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="animate__animated animate__zoomIn btn">
        Dowload CV
      </a>
      <a
        href="#portafolio"
        className="animate__animated animate__zoomIn btn btn-primary"
      >
        My Work
      </a>
    </div>
  );
};

export default CTA;
