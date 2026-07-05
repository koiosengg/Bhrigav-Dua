import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="home-contact" id="contact">
      <div className="home-contact-heading">
        <h2 className="h2-bold">
          Got a Brief? <br className="desktop" />
          Let's Talk.
        </h2>
        <p className="xl-regular">
          Easy to work with, hard to forget, and visuals that feel worth every
          second.
        </p>
      </div>
      <form
        className="home-contact-form"
        action="https://formspree.io/f/xbdvwlgv"
        method="POST"
      >
        <div className="home-contact-form-inputs">
          <div className="home-contact-form-inputs-container">
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              required
              autoComplete="given-name"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              required
              autoComplete="family-name"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
          />

          <textarea
            name="message"
            placeholder="Type your message"
            required
            rows="4"
          />
        </div>

        <button type="submit" className="primary-button">
          <p className="m-bold">Contact Us</p>
        </button>
      </form>
      {/* <img
        src={Logo}
        className="home-contact-logo"
        alt="Manbhavan Productions Logo"
      /> */}
    </section>
  );
}

export default Contact;
