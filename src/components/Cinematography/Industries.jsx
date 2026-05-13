import React, { useRef, useState, useEffect } from "react";
import Background from "../../assets/Cinematography/Industries/Background.svg";
import Image1 from "../../assets/Cinematography/Industries/Image 1.png";
import Image2 from "../../assets/Cinematography/Industries/Image 2.png";
import Image3 from "../../assets/Cinematography/Industries/Image 3.png";
import Image4 from "../../assets/Cinematography/Industries/Image 4.png";
import Image5 from "../../assets/Cinematography/Industries/Image 5.png";
import Image6 from "../../assets/Cinematography/Industries/Image 6.png";
import Image7 from "../../assets/Cinematography/Industries/Image 7.png";

function Industries() {
  const slideRef = useRef(null);
  const containerRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    if (!indicatorRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const scrollWidth = slideRef.current.scrollWidth;

    const extraSpace = 160;
    const max = containerWidth - scrollWidth - extraSpace;

    setMaxTranslate(max);
    setTranslateX(extraSpace);

    const moveAmount = containerWidth * 0.4 + 20;

    const steps = Math.ceil(Math.abs(max - extraSpace) / moveAmount);
    setTotalSteps(steps);

    // ✅ safe DOM read
    const indicatorWidth = indicatorRef.current.offsetWidth;

    const segment = indicatorWidth / (steps + 1);
    setSegmentWidth(segment);
  }, []);

  const handleNext = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const moveAmount = containerWidth * 0.4 + 20;

    setTranslateX((prev) => {
      const next = prev - moveAmount;
      return next < maxTranslate ? maxTranslate : next;
    });

    setCurrentStep((prev) => (prev >= totalSteps ? totalSteps : prev + 1));
  };

  const handlePrev = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const moveAmount = containerWidth * 0.4 + 20;

    setTranslateX((prev) => {
      const next = prev + moveAmount;
      return next > 160 ? 160 : next;
    });

    setCurrentStep((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  const isFirst = translateX === 160;
  const isLast = translateX === maxTranslate;

  const indicatorRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [segmentWidth, setSegmentWidth] = useState(0);

  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-industries">
        <h2 className="cinematography-industries-h2">INDUSTRIES</h2>
        <div className="cinematography-visual-right" ref={containerRef}>
          <div
            className="cinematography-visual-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.4s ease",
            }}
          >
            <article className="cinematography-industries-set">
              <img
                src={Image6}
                alt="Visual Work Image"
                className="cinematography-industries-set-img"
              />
              <div className="cinematography-industries-set-text">
                <h3>Technology & Digital Platforms</h3>
                <p>
                  Google Pay, Intel, Meta, Mi,
                  <br className="desktop" /> True Caller, Amdocs
                </p>
              </div>
            </article>
            <article className="cinematography-industries-set">
              <img
                src={Image7}
                alt="Visual Work Image"
                className="cinematography-industries-set-img"
              />
              <div className="cinematography-industries-set-text">
                <h3>Finance & Fintech</h3>
                <p>
                  Google Pay, Intel, Meta, Mi,
                  <br className="desktop" /> True Caller, Amdocs
                </p>
              </div>
            </article>
            <article className="cinematography-industries-set">
              <img
                src={Image1}
                alt="Visual Work Image"
                className="cinematography-industries-set-img"
              />
              <div className="cinematography-industries-set-text">
                <h3>Automotive & Mobility</h3>
                <p>
                  Google Pay, Intel, Meta, Mi,
                  <br className="desktop" /> True Caller, Amdocs
                </p>
              </div>
            </article>
            <article className="cinematography-industries-set">
              <img
                src={Image2}
                alt="Visual Work Image"
                className="cinematography-industries-set-img"
              />
              <div className="cinematography-industries-set-text">
                <h3>Faming & Fantasy Sports</h3>
                <p>
                  Google Pay, Intel, Meta, Mi,
                  <br className="desktop" /> True Caller, Amdocs
                </p>
              </div>
            </article>
            <article className="cinematography-industries-set">
              <img
                src={Image3}
                alt="Visual Work Image"
                className="cinematography-industries-set-img"
              />
              <div className="cinematography-industries-set-text">
                <h3>FMCG & Consumer Brands</h3>
                <p>
                  Google Pay, Intel, Meta, Mi,
                  <br className="desktop" /> True Caller, Amdocs
                </p>
              </div>
            </article>
            <article className="cinematography-industries-set">
              <img
                src={Image4}
                alt="Visual Work Image"
                className="cinematography-industries-set-img"
              />
              <div className="cinematography-industries-set-text">
                <h3>Infrastructure & Enterprise </h3>
                <p>
                  Google Pay, Intel, Meta, Mi,
                  <br className="desktop" /> True Caller, Amdocs
                </p>
              </div>
            </article>
            <article className="cinematography-industries-set">
              <img
                src={Image5}
                alt="Visual Work Image"
                className="cinematography-industries-set-img"
              />
              <div className="cinematography-industries-set-text">
                <h3>Fashion, Luxury & Jewellery</h3>
                <p>
                  Google Pay, Intel, Meta, Mi,
                  <br className="desktop" /> True Caller, Amdocs
                </p>
              </div>
            </article>
          </div>
          <div className="home-brands-buttons desktop">
            <button
              className="home-brands-button arrow-btn"
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
                  id="mask0_252_2764"
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
                <g mask="url(#mask0_252_2764)">
                  <path
                    className="arrow-path"
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                  />
                </g>
              </svg>
            </button>
            <div
              className="cinematography-industries-indicator"
              ref={indicatorRef}
            >
              <div
                className="cinematography-industries-indicator-bar"
                style={{
                  width: `${segmentWidth}px`,
                  transform: `translateX(${currentStep * segmentWidth}px)`,
                  transition: "transform 0.4s ease",
                }}
              />
            </div>
            <button
              className="home-brands-button arrow-btn"
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
                  id="mask0_252_2764"
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
                <g mask="url(#mask0_252_2764)">
                  <path
                    className="arrow-path"
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <p className="cinematography-industries-para">
          <span className="red-num">5+</span> Industries Covered. <span className="red-num">30+</span> Brands Delivered.
          Your's Coming up Next?
        </p>
      </div>
    </section>
  );
}

export default Industries;
