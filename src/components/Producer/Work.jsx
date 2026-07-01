import React, { useRef, useState, useEffect } from "react";
import Image1 from "../../assets/Cinematography/Work/Image 1.png";
import Image2 from "../../assets/Cinematography/Work/Image 2.png";
import Image3 from "../../assets/Cinematography/Work/Image 3.png";
import Image4 from "../../assets/Cinematography/Work/Image 4.png";
import Image5 from "../../assets/Cinematography/Work/Image 5.png";

function Work() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const scrollWidth = slideRef.current.scrollWidth;

    setMaxTranslate(containerWidth - scrollWidth);
  }, []);

  // 👉 Move Next
  const handleNext = () => {
    const containerWidth = containerRef.current.offsetWidth;

    setTranslateX((prev) => {
      const next = prev - containerWidth;
      return next < maxTranslate ? maxTranslate : next;
    });
  };

  // 👉 Move Prev
  const handlePrev = () => {
    const containerWidth = containerRef.current.offsetWidth;

    setTranslateX((prev) => {
      const next = prev + containerWidth;
      return next > 0 ? 0 : next;
    });
  };

  const isFirst = translateX === 0;
  const isLast = translateX <= maxTranslate + 1;
  return (
    <section className="home-reality-wrapper">
      <div className="home-parle home-reality">
        <div className="template-heading">
          <h3 className="h3-semibold">
            Featured
            <br />
            <span> Work</span>
          </h3>
        </div>

        <div className="home-parle-container" ref={containerRef}>
          <div
            className="home-parle-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.4s ease",
              display: "flex",
            }}
          >
            <div className="cinematography-work-grid other-work-grid">
              <article className="cinematography-work-set">
                <img src={Image1} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image2} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image3} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image4} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image5} alt="Work Image" />
              </article>
            </div>
            <div className="cinematography-work-grid other-work-grid">
              <article className="cinematography-work-set">
                <img src={Image1} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image2} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image3} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image4} alt="Work Image" />
              </article>
              <article className="cinematography-work-set">
                <img src={Image5} alt="Work Image" />
              </article>
            </div>
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
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
