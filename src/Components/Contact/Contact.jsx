import React, { useRef } from "react";
import "./contact.css";
import { BsMailbox2, BsWhatsapp } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { Alert } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const notify = () => toast("Your email was sent");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3mycum6",
        "template_uslkgko",
        form.current,
        "_0mPb_vrN2a9SwkiZ"
      )
      .then(
        (result) => {
          e.target.reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <BsMailbox2 className="contact_option-icon" />
            <h4>Email</h4>
            <h5>daviddev47@hotmail.com</h5>
            <a href="mailto:daviddev47@hotmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <SiMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>davsh47</h5>
            <a href="mailto:daviddev47@hotmail.com" target={"_blank"}>
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />

            <h4>WhatsApp</h4>
            <h5>+593 978724619</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+593 978724619"
              target={"_blank"}
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type={"text"}
            name="use_name"
            placeholder="Your full name"
            required
          />
          <input
            type={"email"}
            name="user_email"
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
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
