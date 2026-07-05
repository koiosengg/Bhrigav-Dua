import React, { useRef, useState, useEffect } from "react";

const getEmbedUrl = (url) => {
  if (!url) return "";
  const reg = new RegExp(
    '(?:youtube\\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\\.be/)([^"&?/\\s]{11})',
  );
  const match = url.match(reg);
  if (match) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}?controls=1&rel=0`;
  }
  return "";
};

function Visual() {
  const testimonyRef = useRef(null);

  const slideRef = useRef(null);
  const containerRef = useRef(null);

  const CARD_COUNT = 8;
  const CARD_WIDTH_MOBILE = 258;
  const GAP_MOBILE = 20;

  const getStartOffset = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1200) return 0;
    }
    return 160;
  };

  const [translateX, setTranslateX] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1200) return 0;
    }
    return 160;
  });
  const [maxTranslate, setMaxTranslate] = useState(0);

  const getScrollWidth = (containerWidth) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) {
      return CARD_COUNT * CARD_WIDTH_MOBILE + (CARD_COUNT - 1) * GAP_MOBILE;
    }
    const cardWidth = Math.min(containerWidth * 0.25, 420);
    return CARD_COUNT * cardWidth + (CARD_COUNT - 1) * 20;
  };

  const getMoveAmount = (containerWidth) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) {
      return CARD_WIDTH_MOBILE + GAP_MOBILE;
    }
    const cardWidth = Math.min(containerWidth * 0.25, 420);
    return cardWidth * 2 + 20;
  };

  useEffect(() => {
    const updateTranslate = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scrollWidth = getScrollWidth(containerWidth);
        const offset = getStartOffset();
        setMaxTranslate(containerWidth - scrollWidth - offset);
      }
    };

    updateTranslate();

    const observer = new ResizeObserver(() => {
      updateTranslate();
      setTranslateX((prev) => {
        const currentOffset = getStartOffset();
        if (prev === 160 || prev === 0) {
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

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const moveAmount = getMoveAmount(containerWidth);
      const offset = getStartOffset();

      setTranslateX((prev) => {
        if (prev <= maxTranslate) {
          return offset;
        }
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
          return maxTranslate;
        }
        const next = prev + moveAmount;
        return next > offset ? offset : next;
      });
    }
  };

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
              transition: "transform 0.4s ease",
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
                  "Documentary: Trailer for a feature length documentary ‘Plastic Fantastic’",
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
                title: "Prime Video: Web series ‘Mera Bhai’ trailer",
                role: "2nd DOP",
                yt: "https://youtu.be/vkpnVTQhRyU?si=atuu0lPW-Go_bP93",
              },
            ].map((item, i) => (
              <article className="cinematography-visual-set" key={i}>
                <div className="cinematography-visual-video-link">
                  <iframe
                    src={getEmbedUrl(item.yt)}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
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
          <div className="home-brands-buttons desktop">
            <button className="home-brands-button" onClick={handlePrev}>
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
            <button className="home-brands-button" onClick={handleNext}>
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
