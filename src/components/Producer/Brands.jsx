import React, { useRef, useState, useEffect } from "react";
import HusbandAndWife from "../../assets/Producer/Brands/Husband and Wife.mp4";
import Grandparents from "../../assets/Producer/Brands/Grandparents.mp4";
import MotherAndDaughter from "../../assets/Producer/Brands/Mother and Daughter.mp4";
import Family from "../../assets/Producer/Brands/Family.mp4";
import ParleHoli9x16 from "../../assets/Producer/Brands/Parle Holi 9x16.mp4";

function Brands() {
  const slideRef = useRef(null);
  const containerRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const scrollWidth = slideRef.current.scrollWidth;
    const extraSpace = 80;

    setMaxTranslate(containerWidth - scrollWidth - extraSpace);
  }, []);

  const handleNext = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const moveAmount = containerWidth * 0.4 + 20;

    setTranslateX((prev) => {
      const next = prev - moveAmount;
      return next < maxTranslate ? maxTranslate : next;
    });
  };

  const handlePrev = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const moveAmount = containerWidth * 0.4 + 20;

    setTranslateX((prev) => {
      const next = prev + moveAmount;
      return next > 0 ? 0 : next;
    });
  };

  const isFirst = translateX === 0;
  const isLast = translateX === maxTranslate;

  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#f4f0e9";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      },
      { threshold: 0.5 },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home-brands-wrapper">
      <div className="home-brands" ref={testimonyRef}>
        <div className="home-brands-left">
          <div className="template-heading">
            <h3 className="h3-semibold">
              A Collection of Works Crafted for
              <br />
              <span>Brands.</span>
            </h3>
            <p className="m-regular">
              Lorem ipsum dolor sit amet consectetur. Maecenas at quis
              vestibulum diam hac consectetur eget.{" "}
            </p>
          </div>
          <div className="home-brands-buttons">
            <button
              className="home-brands-button"
              onClick={handlePrev}
              style={{
                opacity: isFirst ? 0.3 : 1,
                cursor: isFirst ? "default" : "pointer",
                pointerEvents: isFirst ? "none" : "auto",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ transform: "rotate(180deg)" }}
              >
                <mask
                  id="mask0_brands_prev"
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
                <g mask="url(#mask0_brands_prev)">
                  <path
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </button>
            <button
              className="home-brands-button"
              onClick={handleNext}
              style={{
                opacity: isLast ? 0.3 : 1,
                cursor: isLast ? "default" : "pointer",
                pointerEvents: isLast ? "none" : "auto",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_brands_next"
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
                <g mask="url(#mask0_brands_next)">
                  <path
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="home-brands-right" ref={containerRef}>
          <div
            className="home-brands-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.4s ease",
            }}
          >
            <article className="home-brands-set">
              <video src={HusbandAndWife} autoPlay loop muted playsInline />
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <video src={Grandparents} autoPlay loop muted playsInline />
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <video src={MotherAndDaughter} autoPlay loop muted playsInline />
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <video src={Family} autoPlay loop muted playsInline />
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
            <article className="home-brands-set">
              <video src={ParleHoli9x16} autoPlay loop muted playsInline />
              <p>
                <span>Parle Diwali Campaign</span> dolor sit amet conskdoisk
                ectetur. Maecenas at quis vestinsk
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
