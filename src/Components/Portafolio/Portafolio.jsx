import React from "react";
import "./portafolio.css";
import data from "./items";
import Carousel from "react-bootstrap/Carousel";

const Portafolio = () => {
  return (
    <section id="portafolio" className="portfolio-container">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <Carousel className="container portfolio_container">
        {data.map(({ id, image, title, githube, demo }) => {
          return (
            <Carousel.Item key={id} className="portfolio_items">
              <div className="portfolio_item-cta">
                <view className="btn-container">
                  <a href={githube} className="btn" target={"_blank"}>
                    GitHub
                  </a>
                  <a href={demo} className="btn btn-primary" target={"_blank"}>
                    Live Demo
                  </a>
                </view>

                <h3>{title}</h3>
              </div>

              <img src={image} alt={title} className="img-in" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Portafolio;
