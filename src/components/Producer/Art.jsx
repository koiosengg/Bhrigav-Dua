import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Art() {
  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#550b0d";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      },
      { threshold: 0.3 },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home-reality-wrapper">
      <div className="home-art-wrapper home-reality" ref={testimonyRef}>
        <div className="home-art">
          <div className="home-art-container">
            <h2>
              MANBHAVAN <br /> PRODUCTIONS
            </h2>
            <p className="home-art-container-para">
              Manbhavan Productions is a creative production house working
              across advertising, films, music videos, and branded content,
              focused on crafting visuals.
            </p>
            <a
              href="https://manbhavan-productions.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <p className="m-bold">Let’s Explore</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_515_497"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect
                    width="24"
                    height="24"
                    transform="matrix(-1 0 0 1 24 0)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_515_497)">
                  <path
                    d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Art;
