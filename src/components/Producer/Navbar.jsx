import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "/menu.svg";
import MenuCancel from "/menu cancel.svg";

function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (isMobileNavOpen) setIsMobileNavOpen(false);
  };

  const handleTalkClick = (e) => {
    e.preventDefault();
    scrollTo("contact");
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    scrollTo("about-us");
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    scrollTo("work");
  };

  const handleServiceClick = (e) => {
    e.preventDefault();
    scrollTo("services");
  };

  return (
    <>
      <header
        className={showHeader ? "header desktop show" : "header desktop hide"}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>
            <span>BHRIGAV</span> DUA
          </h2>
        </Link>
        <nav>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
          >
            Home
          </a>
          <a href="#" onClick={handleAboutClick}>
            About Us
          </a>
          <a href="#" onClick={handleWorkClick}>
            Work
          </a>
          <a href="#" onClick={handleServiceClick}>
            Service
          </a>
        </nav>
        <a
          href="/#contact"
          className="primary-button"
          onClick={handleTalkClick}
        >
          <p>Let's Talk</p>
        </a>
      </header>
      <header className="navbar mobile">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>
            <span>BHRIGAV</span> DUA
          </h2>
        </Link>
        <div className="navbar-mobile-socials">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mail"
          >
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
        <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
          <img
            src={Menu}
            alt="Mobile navbar open"
            style={{
              display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
            }}
          />
          <img
            src={MenuCancel}
            alt="Mobile navbar close"
            style={{
              display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
            }}
          />
        </div>
        <div
          className={`mobileNavbar mobile ${
            isMobileNavOpen
              ? "activeMobileNavbar"
              : hasToggled
                ? "nonactiveMobileNavbar"
                : ""
          }`}
        >
          <nav className="nav-links">
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
            >
              Home
            </a>
            <a onClick={handleAboutClick}>About</a>
            <a onClick={handleWorkClick}>Work</a>
            <a onClick={handleServiceClick}>Service</a>
          </nav>
          <a
            href="/#contact"
            className="navbar-button"
            onClick={handleTalkClick}
          >
            <p>Let's Talk</p>
          </a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
