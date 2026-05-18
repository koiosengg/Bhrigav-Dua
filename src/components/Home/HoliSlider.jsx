import React, { useCallback, useEffect, useRef, useState } from "react";
import HoliImage from "../../assets/Home/Holi/Holi Image.png";
import DiwaliImage from "../../assets/Home/Diwali/Diwali Image.png";
import MotherAndDaughter from "../../assets/Home/Parle/Campaign 1/Mother and Daughter.mp4";

function HoliSlider() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  // — Drag refs —
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);

  // — Slider state —
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  // — Holi count-up —
  const [holiCount, setHoliCount] = useState(0);
  const [holiAnimated, setHoliAnimated] = useState(false);

  // — Diwali count-up —
  const [diwaliCounts, setDiwaliCounts] = useState({
    films: 0,
    statics: 0,
    crew: 0,
  });
  const [diwaliAnimated, setDiwaliAnimated] = useState(false);

  // Holi counter
  const startHoliCount = useCallback(() => {
    const end = 40;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setHoliCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  // Diwali counters
  const animateDiwaliValue = useCallback((key, end, duration = 1500) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDiwaliCounts((prev) => ({
        ...prev,
        [key]: Math.floor(easeOut * end),
      }));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  const startDiwaliCount = useCallback(() => {
    animateDiwaliValue("films", 4);
    animateDiwaliValue("statics", 10);
    animateDiwaliValue("crew", 90);
  }, [animateDiwaliValue]);

  // Intersection observer — trigger counting when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!holiAnimated) {
            startHoliCount();
            setHoliAnimated(true);
          }
          if (!diwaliAnimated) {
            startDiwaliCount();
            setDiwaliAnimated(true);
          }
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [holiAnimated, diwaliAnimated, startHoliCount, startDiwaliCount]);

  // — Apply transform with transition when currentSlide changes (arrow nav / snap) —
  useEffect(() => {
    const track = slideRef.current;
    if (!track) return;
    track.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    track.style.transform = `translate3d(${currentSlide * -100}%, 0, 0)`;
  }, [currentSlide]);

  // — Touch / mouse drag to slide —
  useEffect(() => {
    const track = slideRef.current;
    if (!track) return;

    const onPointerDown = (e) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      currentXRef.current = e.clientX;
      track.style.transition = "none";
      track.style.cursor = "grabbing";
      track.style.userSelect = "none";
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      currentXRef.current = e.clientX;
      const diff = currentXRef.current - startXRef.current;
      const percent = (diff / track.offsetWidth) * 100;
      const baseTranslate = currentSlide * -100;
      track.style.transform = `translate3d(${baseTranslate + percent}%, 0, 0)`;
    };

    const onPointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      track.style.cursor = "grab";
      track.style.userSelect = "";
      const diff = currentXRef.current - startXRef.current;
      const threshold = 50; // px

      if (diff < -threshold && currentSlide < totalSlides - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (diff > threshold && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      } else {
        track.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
        track.style.transform = `translate3d(${currentSlide * -100}%, 0, 0)`;
      }
    };

    const onPointerCancel = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      track.style.cursor = "grab";
      track.style.userSelect = "";
      track.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      track.style.transform = `translate3d(${currentSlide * -100}%, 0, 0)`;
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
    };
  }, [currentSlide]);

  // — Arrow navigation —
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  return (
    <section
      className="home-brands-wrapper home-holi-slider-wrapper"
      ref={sectionRef}
    >
      <div className="home-holi-slider">
        {/* Slider viewport */}
        <div className="home-holi-slider-container" ref={containerRef}>
          <div
            className="home-holi-slider-track"
            ref={slideRef}
            style={{
              touchAction: "pan-y",
              cursor: "grab",
              willChange: "transform",
            }}
          >
            {/* ── Slide 1: Holi ── */}
            <div className="home-holi home-diwali home-holi-slide-item">
              <div className="home-holi-img">
                <video
                  src={MotherAndDaughter}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="home-holi-text">
                <h2>PARLE HOLI CAMPAIGN</h2>
                <div className="home-holi-sub-text">
                  <div className="home-holi-content">
                    <h3>
                      <span>{holiCount}M+</span> <br />
                      Views &amp; Still Rolling.
                    </h3>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="62"
                      viewBox="0 0 150 62"
                      fill="none"
                    >
                      <path
                        d="M0.415771 61C13.6162 41.2436 22.6021 17.2336 50.7729 22.5C78.9437 27.7664 78.1456 53 100.916 50C123.686 47 141.416 8 141.416 8"
                        stroke="#0F4D4C"
                      />
                      <circle
                        cx="143.416"
                        cy="6"
                        r="5.5"
                        fill="#0F4D4C"
                        stroke="#0F4D4C"
                      />
                    </svg>
                  </div>

                  <p className="l-regular">
                    Every view earned through thoughtful storytelling, precise
                    execution, and emotionally resonant visuals.
                  </p>
                </div>
              </div>
            </div>
            {/* ── Slide 2: Diwali ── */}
            <div className="home-holi home-diwali home-holi-slide-item">
              <div className="home-holi-img">
                <video
                  src={MotherAndDaughter}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              <div className="home-holi-text">
                <h2>PARLE DIWALI CAMPAIGN</h2>

                <div className="home-holi-sub-text">
                  <div className="home-holi-content">
                    <h3>
                      From Concept to <br /> Screen in just <br />
                      <span>{diwaliCounts.films * 54} Hours.</span>
                    </h3>
                  </div>

                  <p className="l-regular">
                    Every view earned through thoughtful storytelling, precise
                    execution, and emotionally resonant visuals.
                  </p>
                </div>

                <div className="home-diwali-numbers">
                  <article className="home-diwali-numbers-set">
                    <span>{diwaliCounts.films}</span>
                    <p>Digital Films</p>
                  </article>

                  <article className="home-diwali-numbers-set">
                    <span>{diwaliCounts.statics}</span>
                    <p>Statics</p>
                  </article>

                  <article className="home-diwali-numbers-set">
                    <span>{diwaliCounts.crew}</span>
                    <p>Crew Members</p>
                  </article>
                </div>
              </div>
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
                  id="holi-mask-prev"
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
                <g mask="url(#holi-mask-prev)">
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
                  id="holi-mask-next"
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
                <g mask="url(#holi-mask-next)">
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

export default HoliSlider;
