import React from "react";
import CV from "../../assets/cvDL.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Dowload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
