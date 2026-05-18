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
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
          <a href="#" onClick={handleWorkClick}>Work</a>
          <a href="#" onClick={handleServiceClick}>Service</a>
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
            <a onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>Home</a>
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
