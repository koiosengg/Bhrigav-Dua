import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    // <section className="home-contact">
    //   <div className="home-contact-heading">
    //     <h2 className="h2-bold">Want to go big? Let’s have a talk.</h2>
    //     <p className="xl-regular">
    //       Because powerful stories deserve cinematic beauty, intentional detail,
    //       and a little bit of magic.
    //     </p>
    //   </div>
    //   <div className="home-contact-buttons">
    //     <Link to="/contact" className="primary-button">
    //       <p className="m-bold">Contact Us</p>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //       >
    //         <mask
    //           id="mask0_515_497"
    //           style={{ maskType: "alpha" }}
    //           maskUnits="userSpaceOnUse"
    //           x="0"
    //           y="0"
    //           width="24"
    //           height="24"
    //         >
    //           <rect
    //             width="24"
    //             height="24"
    //             transform="matrix(-1 0 0 1 24 0)"
    //             fill="#D9D9D9"
    //           />
    //         </mask>
    //         <g mask="url(#mask0_515_497)">
    //           <path
    //             d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
    //             fill="#1B1B1B"
    //           />
    //         </g>
    //       </svg>
    //     </Link>
    //     <a href="#" target="_blank" className="secondary-button">
    //       <p className="m-bold">Founder</p>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //       >
    //         <mask
    //           id="mask0_515_502"
    //           style={{ maskType: "alpha" }}
    //           maskUnits="userSpaceOnUse"
    //           x="0"
    //           y="0"
    //           width="24"
    //           height="24"
    //         >
    //           <rect
    //             width="24"
    //             height="24"
    //             transform="matrix(-1 0 0 1 24 0)"
    //             fill="#D9D9D9"
    //           />
    //         </mask>
    //         <g mask="url(#mask0_515_502)">
    //           <path
    //             d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
    //             fill="white"
    //           />
    //         </g>
    //       </svg>
    //     </a>
    //   </div>
    //   <img src={Logo} className="home-contact-logo" alt="Manbhavan Productions Logo" />
    // </section>
    <section className="home-contact" id="contact">
      <div className="home-contact-heading">
        <h2 className="h2-bold">
          Have a Project Idea? <br className="desktop" /> Let’s discuss it
          Together.
        </h2>
        <p className="xl-regular">
          Because powerful stories deserve cinematic beauty,{" "}
          <br className="desktop" /> intentional detail, and a little bit of
          magic.
        </p>
      </div>
      <form
        className="home-contact-form"
        action="https://formspree.io/f/xeevqyag"
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
