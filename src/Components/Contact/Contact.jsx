import React from "react";
import "./contact.css";
import { BsMailbox2, BsWhatsapp } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <BsMailbox2 className="contact_option-icon" />
            <h4>Email</h4>
            <h5>davsh47@hotmail.com</h5>
            <a href="mailto:davsh47@hotmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <SiMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>davsh47</h5>
            <a href="https://m.me/davsh47" target={"_blank"}>
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+79375764627</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+79375764627"
              target={"_blank"}
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}
        <form action="">
          <input
            type={"text"}
            name="name"
            placeholder="Your full name"
            required
          />
          <input
            type={"email"}
            name="email"
            placeholder="Your Email "
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message "
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
