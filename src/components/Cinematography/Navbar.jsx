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

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  const handleTalkClick = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Work</a>
          <a href="#">Service</a>
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
            <a onClick={handleLinkClick}>Home</a>
            <a onClick={handleLinkClick}>About</a>
            <a onClick={handleLinkClick}>Work</a>
            <a onClick={handleLinkClick}>Service</a>
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
