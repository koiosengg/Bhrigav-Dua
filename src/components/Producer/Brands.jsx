import React, { useRef, useState, useEffect, useCallback } from "react";

const HusbandAndWife = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Husband_and_Wife_vjlew0.mp4";
const Grandparents = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Grandparents_w1sjqk.mp4";
const MotherAndDaughter = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Mother_and_Daughter_ujvzts.mp4";
const Family = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Family_rx0gwl.mp4";
const ParleHoli16x9 = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media/Parle_Holi_9x16_hiuijs.mp4";
const FathersDay = "/assets/videos/Father_sDay_ocqn7w.mp4";

function Brands() {
  const slideRef = useRef(null);
  const containerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(2);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(328);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 1200 : false,
  );

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1200);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

  const handleNext = useCallback(() => {
    if (!transitionEnabled || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, [transitionEnabled, isTransitioning]);

  const handlePrev = useCallback(() => {
    if (!transitionEnabled || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }, [transitionEnabled, isTransitioning]);

  useEffect(() => {
    if (
      isMobile ||
      (typeof window !== "undefined" && window.innerWidth <= 1200)
    )
      return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [handleNext, isMobile]);

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
              aria-label="Previous Slide"
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
              aria-label="Next Slide"
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
                    src={work.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
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
