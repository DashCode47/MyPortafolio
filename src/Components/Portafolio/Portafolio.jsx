import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/portfolio.png";
import IMG2 from "../../assets/portfolio2.jpg";
import data from "./items";

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, githube, demo }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_items-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={githube} className="btn" target={"_blank"}>
                  GitHube
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
