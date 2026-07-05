import React, { useRef, useState, useEffect } from "react";
import HusbandAndWife from "../../assets/Producer/Brands/Husband and Wife.mp4";
import Grandparents from "../../assets/Producer/Brands/Grandparents.mp4";
import MotherAndDaughter from "../../assets/Producer/Brands/Mother and Daughter.mp4";
import Family from "../../assets/Producer/Brands/Family.mp4";
import ParleHoli16x9 from "../../assets/Producer/Brands/Parle Holi 9x16.mp4";
import FathersDay from "../../assets/Producer/Brands/Father'sDay.mp4";

function Brands() {
  const slideRef = useRef(null);
  const containerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(2);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(328);

  const brandWorks = [
    {
      video: FathersDay,
      link: "https://youtube.com/shorts/Txqkm2Ycsxg?si=evp6iyjzw4X4FqLN",
      title: "Parle Father’s Day Campaign",
      desc: " ",
    },
    {
      video: ParleHoli16x9,
      link: "https://youtube.com/shorts/ETx79kHuM7c?si=amf4s4dlg44wIDLS",
      title: "Parle Holi Campaign",
      desc: " ",
    },
    {
      video: Grandparents,
      link: "https://youtube.com/shorts/82cSfpGoh9c?si=uzDQjUizFls2I0Qt",
      title: "Parle Diwali Campaign",
      desc: " ",
    },
    {
      video: HusbandAndWife,
      link: "https://youtube.com/shorts/0bQHFoXyHjA?ssiSztrawIWjEDFHstW",
      title: "Parle Diwali Campaign",
      desc: " ",
    },
    {
      video: MotherAndDaughter,
      link: "https://youtube.com/shorts/FwJs7c4K0WI?si=l3AFOGo1vIk1lUL7",
      title: "Parle Diwali Campaign",
      desc: " ",
    },
    {
      video: Family,
      link: "https://youtube.com/shorts/3E-zedFPD3c?si=ivMYhazET39krC2c",
      title: "Parle Diwali Campaign",
      desc: " ",
    },
  ];

  useEffect(() => {
    if (!slideRef.current) return;
    const updateCardWidth = () => {
      const cardElement = slideRef.current.querySelector(".home-brands-set");
      if (cardElement) {
        setCardWidth(cardElement.offsetWidth);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handleTransitionEnd = () => {
    if (currentSlide === 14) {
      setTransitionEnabled(false);
      setCurrentSlide(2);
    } else if (currentSlide === 1) {
      setTransitionEnabled(false);
      setCurrentSlide(13);
    } else {
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      if (slideRef.current) {
        slideRef.current.offsetHeight;
      }
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
        setIsTransitioning(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  const handleNext = () => {
    if (!transitionEnabled || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!transitionEnabled || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning, transitionEnabled]);

  const moveAmount = cardWidth + 20;
  const translateX = -currentSlide * moveAmount;
  const testimonyRef = useRef(null);

  const doubleBrandWorks = [...brandWorks, ...brandWorks];

  // Prepend last 2 items, append first 2 items
  const slidesToRender = [
    doubleBrandWorks[10],
    doubleBrandWorks[11],
    ...doubleBrandWorks,
    doubleBrandWorks[0],
    doubleBrandWorks[1],
  ];

  return (
    <section className="home-brands-wrapper" id="brands">
      <div className="home-brands" ref={testimonyRef}>
        <div className="home-brands-left">
          <div className="template-heading">
            <h3 className="h3-semibold">
              A collection of work crafted <br className="heading-br-desktop" />
              for
              <span> Brands.</span>
            </h3>
            <p className="m-regular">
              Brand films, campaigns, and everything in between. Across
              categories, formats, and the occasional impossible deadlines.
            </p>
          </div>
          <div className="home-brands-buttons">
            <button
              className="home-brands-button"
              onClick={handlePrev}
              style={{
                cursor: "pointer",
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
                cursor: "pointer",
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
        <div className="home-brands-right" ref={containerRef}>
          <div
            className="home-brands-slide"
            ref={slideRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: transitionEnabled ? "transform 0.4s ease" : "none",
            }}
          >
            {slidesToRender.map((work, i) => (
              <article className="home-brands-set" key={i}>
                <div className="home-brands-video-wrapper">
                  <video
                    src={`${work.video}?v=1`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={() => window.open(work.link, "_blank")}
                    style={{ cursor: "pointer", objectFit: "cover" }}
                  />
                </div>
                <p>
                  <span>{work.title}</span>
                  {work.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
