import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p> App designed from scratch</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Upgrade for an existing interface.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Design of existing digital products.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Custom iOS and Android app development.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>
                Progressive Web App development and Cross-platform development.
              </p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Consulting and prototyping.</p>
            </li>
          </ul>
        </article>
        {/* END OF web dev */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Web Portals</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Ecommerce-Pages.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Websites-WebAPPS.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content creation */}
      </div>
    </section>
  );
};

export default Services;
