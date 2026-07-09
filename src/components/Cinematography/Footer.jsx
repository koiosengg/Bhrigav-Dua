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
          <h2>BHRIGAV DUA</h2>
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
          <a href="https://www.instagram.com/bhrigavdua" target="_blank" aria-label="Instagram">
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
              <circle cx="17.5" cy="6.5" r="1.5" fill="#C3262B" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/bhrigav-dua" target="_blank" aria-label="LinkedIn">
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
          <a href="mailto:info@bhrigavdua.com" target="_blank" aria-label="Email">
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
          Made with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#c3262b"
            width="16"
            height="16"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              margin: "0 2px 3px 2px",
            }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>{" "}
          by{" "}
          <a href="https://www.koiostudio.com/" target="_blank">
            Koiostudio
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
