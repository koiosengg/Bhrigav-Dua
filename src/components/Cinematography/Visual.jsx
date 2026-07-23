import React, { useRef, useState, useEffect, useCallback } from "react";
import YoutubePlayer from "../YoutubePlayer";

function Visual() {
  const testimonyRef = useRef(null);
  const slideRef = useRef(null);
  const containerRef = useRef(null);

  const CARD_COUNT = 8;
  const GAP = 20;

  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [translateX, setTranslateX] = useState(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) return 0;
    return 160;
  });
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getStartOffset = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) return 0;
    return 160;
  }, []);

  const getMoveAmount = useCallback(
    (cw) => {
      if (slideRef.current && slideRef.current.children[0]) {
        const cardW = slideRef.current.children[0].offsetWidth;
        if (cardW > 0) return cardW + GAP;
      }
      if (isMobile) return cw + GAP;
      if (typeof window !== "undefined" && window.innerWidth <= 1200)
        return 258 + GAP;
      return 420 + GAP;
    },
    [isMobile],
  );

  const getScrollWidth = useCallback(
    (cw) => {
      if (slideRef.current && slideRef.current.scrollWidth > 0) {
        return slideRef.current.scrollWidth;
      }
      if (isMobile) return CARD_COUNT * cw + (CARD_COUNT - 1) * GAP;
      if (typeof window !== "undefined" && window.innerWidth <= 1200)
        return CARD_COUNT * 258 + (CARD_COUNT - 1) * GAP;
      return CARD_COUNT * 420 + (CARD_COUNT - 1) * GAP;
    },
    [isMobile],
  );

  const recalc = useCallback(() => {
    if (!containerRef.current) return;
    const cw = containerRef.current.offsetWidth;
    setContainerWidth(cw);
    const sw = getScrollWidth(cw);
    const offset = getStartOffset();
    const max = Math.min(offset, cw - sw);
    setTranslateX((prev) => {
      if (prev > offset) return offset;
      if (prev < max) return max;
      return prev;
    });
  }, [getScrollWidth, getStartOffset]);

  useEffect(() => {
    recalc();
  }, [recalc, isMobile]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(recalc);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [recalc]);

  const wrapTransition = useCallback((cb) => {
    setTransitionEnabled(false);
    if (slideRef.current) slideRef.current.offsetHeight;
    requestAnimationFrame(() => {
      cb();
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });
  }, []);

  const handleNext = useCallback(() => {
    if (!containerRef.current) return;
    const cw = containerRef.current.offsetWidth;
    const move = getMoveAmount(cw);
    const sw = getScrollWidth(cw);
    const offset = getStartOffset();
    const max = Math.min(offset, cw - sw);
    setTranslateX((prev) => {
      if (prev <= max) {
        wrapTransition(() => setTranslateX(offset));
        return prev;
      }
      const next = prev - move;
      return next < max ? max : next;
    });
  }, [getMoveAmount, getStartOffset, getScrollWidth, wrapTransition]);

  const handlePrev = useCallback(() => {
    if (!containerRef.current) return;
    const cw = containerRef.current.offsetWidth;
    const move = getMoveAmount(cw);
    const sw = getScrollWidth(cw);
    const offset = getStartOffset();
    const max = Math.min(offset, cw - sw);
    setTranslateX((prev) => {
      if (prev >= offset) {
        wrapTransition(() => setTranslateX(max));
        return prev;
      }
      const next = prev + move;
      return next > offset ? offset : next;
    });
  }, [getMoveAmount, getStartOffset, getScrollWidth, wrapTransition]);

  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-visual home-reality" ref={testimonyRef}>
        <div className="template-heading">
          <h3 className="h3-semibold">
            <span> The Reel</span> <br />
            Deal
          </h3>
          <p className="m-regular">
            Handpicked from forty-plus films. These are the ones we keep coming
            back to.
          </p>
        </div>
        <div className="cinematography-visual-right" ref={containerRef}>
          <div
            className="cinematography-visual-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: transitionEnabled ? "transform 0.4s ease" : "none",
            }}
          >
            {[
              {
                title: "Parle: Father's Day | Dil ka apna emergency number",
                role: "DOP",
                yt: "https://youtu.be/AXQ6-jh5VYE?si=HK9iKz1i1SBDiWF5",
              },
              {
                title: "Google Play: Squad Tournament",
                role: "DOP",
                yt: "https://youtu.be/bVTTcsQOPfE?si=P_Q35KRKx8SO0GTJ",
              },
              {
                title:
                  "Skinn by Titan: #NotesFromAPerfumer - Discover the world of fragrances with Ilias Ermenidis & Mira Kapoor",
                role: "Product DOP | 2nd Unit DOP",
                yt: "https://www.youtube.com/watch?v=zyOdppVsPRY",
              },
              {
                title:
                  "Documentary: Trailer for a feature length documentary 'Plastic Fantastic'",
                role: "2nd DOP",
                yt: "https://youtu.be/v5AbayqBz7o?si=py_NoBmHg_9XnZY4",
              },
              {
                title: "Disney+ Hotstar: Akshay ka naya cop avatar",
                role: "Associate Cinematographer | 2nd DOP",
                yt: "https://www.youtube.com/watch?v=S-MCo2hLpIk",
              },
              {
                title:
                  "DBS Bank India: The Right Choice Is Right In Front Of You",
                role: "1st Assistant Cinematographer | 2nd Unit DOP",
                yt: "https://youtu.be/SkIUOVJSMpc?si=S6lp5mfQylIdQt5M",
              },
              {
                title: "Emperium Developers: Apnepan Wali Diwali",
                role: "DOP",
                yt: "https://youtu.be/UqhSxRo05NU?si=59YOGcafNi-TcqXJ",
              },
              {
                title: "Prime Video: Web series 'Mera Bhai' trailer",
                role: "2nd DOP",
                yt: "https://youtu.be/vkpnVTQhRyU?si=atuu0lPW-Go_bP93",
              },
            ].map((item, i) => (
              <article
                className="cinematography-visual-set"
                key={i}
                style={
                  isMobile && containerWidth
                    ? { minWidth: containerWidth }
                    : undefined
                }
              >
                <div className="cinematography-visual-video-link">
                  <YoutubePlayer
                    url={item.yt}
                    title={item.title}
                    autoplay={false}
                  />
                </div>
                <div className="cinematography-visual-set-content">
                  <div className="cinematography-visual-set-text">
                    <div className="cinematography-visual-set-text-set">
                      <h3>Bhrigav Dua</h3>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={`home-brands-buttons ${isMobile ? "" : "desktop"}`}>
            <button
              className="home-brands-button"
              onClick={handlePrev}
              aria-label="Previous Slide"
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

export default Visual;
