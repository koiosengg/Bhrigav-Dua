import React from "react";

function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="cinematography-footer">
      <div className="footer-top">
        <div className="footer-top-heading">
          <h2>
            BHRIGAV
            <br />
            DUA
          </h2>
          <p className="xl-regular">Cinematographer</p>
        </div>
        <nav className="footer-top-links">
          <a
            href="#home"
            className="m-semibold"
            onClick={(e) => handleNavClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="m-semibold"
            onClick={(e) => handleNavClick(e, "about")}
          >
            About Us
          </a>
          <a
            href="#work"
            className="m-semibold"
            onClick={(e) => handleNavClick(e, "work")}
          >
            Work
          </a>
          <a
            href="#industries"
            className="m-semibold"
            onClick={(e) => handleNavClick(e, "industries")}
          >
            Industry
          </a>
          <a
            href="#contact"
            className="m-semibold"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
          <a href="/cinematography/privacy" className="m-semibold">
            Privacy
          </a>
          <a href="/cinematography/TandC" className="m-semibold">
            T&C
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="m-regular">© All Rights Reserved</p>
        <div className="footer-bottom-socials">
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="17.5"
                cy="6.5"
                r="1.5"
                fill="#C3262B"
              />
            </svg>
          </a>
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2"
                y="9"
                width="4"
                height="12"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="4"
                cy="4"
                r="2"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 7l-10 7L2 7"
                stroke="#C3262B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <p className="m-regular">
          Made with Love by{" "}
          <a href="https://www.koiostudio.com/" target="_blank">
            Koiostudio
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
