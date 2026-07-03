import React, { useCallback, useEffect, useRef, useState } from "react";

function HoliSlider() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  // — Slider state —
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // — Father's Day count-up —
  const [fathersDayCount, setFathersDayCount] = useState(0);
  const [fathersDayAnimated, setFathersDayAnimated] = useState(false);

  // — Diwali count-up —
  const [diwaliCounts, setDiwaliCounts] = useState({
    films: 0,
    statics: 0,
    crew: 0,
  });
  const [diwaliAnimated, setDiwaliAnimated] = useState(false);

  // — Ciena count-up —
  const [cienaCounts, setCienaCounts] = useState({
    attendees: 0,
    onground: 0,
    zoom: 0,
    broadcast: 0,
  });
  const [cienaAnimated, setCienaAnimated] = useState(false);

  // Father's Day counter
  const startFathersDayCount = useCallback(() => {
    const end = 105;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setFathersDayCount(Math.floor(progress * end));
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

  // Ciena counters
  const animateCienaValue = useCallback((key, end, duration = 1500) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCienaCounts((prev) => ({
        ...prev,
        [key]: Math.floor(easeOut * end),
      }));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  const startCienaCount = useCallback(() => {
    animateCienaValue("attendees", 10000);
    animateCienaValue("onground", 350);
    animateCienaValue("zoom", 1000);
    animateCienaValue("broadcast", 8000);
  }, [animateCienaValue]);

  // Intersection observer — trigger counting when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!fathersDayAnimated) {
            startFathersDayCount();
            setFathersDayAnimated(true);
          }
          if (!diwaliAnimated) {
            startDiwaliCount();
            setDiwaliAnimated(true);
          }
          if (!cienaAnimated) {
            startCienaCount();
            setCienaAnimated(true);
          }
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [
    fathersDayAnimated,
    diwaliAnimated,
    cienaAnimated,
    startFathersDayCount,
    startDiwaliCount,
    startCienaCount,
  ]);

  // — Apply transform with transition when currentSlide changes (arrow nav / snap) —
  useEffect(() => {
    const track = slideRef.current;
    if (!track) return;
    track.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    track.style.transform = `translate3d(${currentSlide * -100}%, 0, 0)`;
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
          <div className="home-holi-slider-track" ref={slideRef}>
            {/* ── Slide 1: Father's Day ── */}
            <div className="home-holi home-diwali home-holi-slide-item">
              <div className="home-holi-img">
                <iframe
                  src="https://www.youtube.com/embed/AXQ6-jh5VYE?autoplay=1&mute=1&loop=1&playlist=AXQ6-jh5VYE&controls=1&rel=0"
                  title="Parle Father’s Day Campaign"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="home-holi-text">
                <h2>PARLE FATHER’S DAY CAMPAIGN</h2>
                <div className="home-holi-sub-text">
                  <div className="home-holi-content">
                    <h3>
                      <span>{fathersDayCount}M+</span> <br />
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
                </div>
              </div>
            </div>

            {/* ── Slide 2: Diwali ── */}
            <div className="home-holi home-diwali home-holi-slide-item">
              <div className="home-holi-img">
                <iframe
                  src="https://www.youtube.com/embed/yqZdK8_fR_k?autoplay=1&mute=1&loop=1&playlist=yqZdK8_fR_k&controls=1&rel=0"
                  title="Parle Diwali Campaign"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "8px",
                  }}
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

            {/* ── Slide 3: Ciena Live Event ── */}
            <div className="home-holi home-diwali home-holi-slide-item">
              <div className="home-holi-img">
                <iframe
                  src="https://www.youtube.com/embed/i7lZxjti8Dk?autoplay=1&mute=1&loop=1&playlist=i7lZxjti8Dk&controls=1&rel=0"
                  title="Ciena Live Event"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="home-holi-text">
                <h2>CIENA LIVE EVENT</h2>

                <div className="home-holi-sub-text">
                  <div className="home-holi-content">
                    <h3>
                      End-to-End Production &amp; <br /> Global Broadcast for <br />
                      <span>{cienaCounts.attendees.toLocaleString()}+ Attendees.</span>
                    </h3>
                  </div>

                  <p className="l-regular">
                    Shoot + Live Switching + Broadcast + Lighting + Sound + Staging + Show Management
                  </p>
                </div>

                <div className="home-diwali-numbers">
                  <article className="home-diwali-numbers-set">
                    <span>{cienaCounts.onground}+</span>
                    <p>On-ground</p>
                  </article>

                  <article className="home-diwali-numbers-set">
                    <span>{cienaCounts.zoom.toLocaleString()}+</span>
                    <p>Zoom</p>
                  </article>

                  <article className="home-diwali-numbers-set">
                    <span>{cienaCounts.broadcast.toLocaleString()}+</span>
                    <p>Broadcast</p>
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
