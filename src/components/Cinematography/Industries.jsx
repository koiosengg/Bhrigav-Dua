import React, { useRef, useState, useEffect } from "react";
import Background from "../../assets/Cinematography/Industries/Background.svg";
import Image1 from "../../assets/Cinematography/Industries/Image 1.webp";
import Image2 from "../../assets/Cinematography/Industries/Image 2.webp";
import Image3 from "../../assets/Cinematography/Industries/Image 3.webp";
import Image4 from "../../assets/Cinematography/Industries/Image 4.webp";
import Image5 from "../../assets/Cinematography/Industries/Image 5.webp";
import Image6 from "../../assets/Cinematography/Industries/Image 6.webp";
import Image7 from "../../assets/Cinematography/Industries/Image 7.webp";

function Industries() {
  const slideRef = useRef(null);
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);

  const CARD_COUNT = 7;
  const CARD_WIDTH_MOBILE = 280;
  const GAP_MOBILE = 20;

  const getStartOffset = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) return 0;
      if (window.innerWidth <= 1200) return 20;
    }
    return 160;
  };

  const [translateX, setTranslateX] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) return 0;
      if (window.innerWidth <= 1200) return 20;
    }
    return 160;
  });
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [segmentWidth, setSegmentWidth] = useState(0);

  const getScrollWidth = (containerWidth) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) {
      return CARD_COUNT * CARD_WIDTH_MOBILE + (CARD_COUNT - 1) * GAP_MOBILE;
    }
    const cardWidth = containerWidth * 0.3;
    return CARD_COUNT * cardWidth + (CARD_COUNT - 1) * 20;
  };

  const getMoveAmount = (containerWidth) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) {
      return CARD_WIDTH_MOBILE + GAP_MOBILE; // 300px
    }
    return containerWidth * 0.4 + 20;
  };

  useEffect(() => {
    const updateLayout = () => {
      if (containerRef.current && indicatorRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scrollWidth = getScrollWidth(containerWidth);
        const offset = getStartOffset();
        const max = containerWidth - scrollWidth - offset;
        setMaxTranslate(max);

        const moveAmount = getMoveAmount(containerWidth);
        const steps = Math.ceil(Math.abs(max - offset) / moveAmount);
        setTotalSteps(steps);

        const indicatorWidth = indicatorRef.current.offsetWidth;
        const segment = indicatorWidth / (steps + 1);
        setSegmentWidth(segment);
      }
    };

    updateLayout();

    const observer = new ResizeObserver(() => {
      updateLayout();
      setTranslateX((prev) => {
        const currentOffset = getStartOffset();
        if (prev === 160 || prev === 20 || prev === 0) {
          return currentOffset;
        }
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const scrollWidth = getScrollWidth(containerWidth);
          const newMax = containerWidth - scrollWidth - currentOffset;
          if (prev < newMax) return newMax;
          if (prev > currentOffset) return currentOffset;
        }
        return prev;
      });
    });

    if (containerRef.current) observer.observe(containerRef.current);
    if (indicatorRef.current) observer.observe(indicatorRef.current);

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const moveAmount = getMoveAmount(containerWidth);
      const offset = getStartOffset();

      setTranslateX((prev) => {
        if (prev <= maxTranslate) {
          setCurrentStep(0);
          return offset;
        }
        setCurrentStep((stepPrev) => (stepPrev >= totalSteps ? totalSteps : stepPrev + 1));
        const next = prev - moveAmount;
        return next < maxTranslate ? maxTranslate : next;
      });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const moveAmount = getMoveAmount(containerWidth);
      const offset = getStartOffset();

      setTranslateX((prev) => {
        if (prev >= offset) {
          setCurrentStep(totalSteps);
          return maxTranslate;
        }
        setCurrentStep((stepPrev) => (stepPrev <= 0 ? 0 : stepPrev - 1));
        const next = prev + moveAmount;
        return next > offset ? offset : next;
      });
    }
  };

  const isFirst = false;
  const isLast = false;

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
              aria-label="Previous Slide"
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
              aria-label="Next Slide"
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
