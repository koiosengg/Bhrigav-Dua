import React, { useRef, useState, useEffect } from "react";

const getEmbedUrl = (url) => {
  if (!url) return "";
  const reg = new RegExp('(?:youtube\\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\\.be/)([^"&?/\\s]{11})');
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

  const CARD_COUNT = 9;
  const CARD_WIDTH_MOBILE = 258;
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

  const getScrollWidth = (containerWidth) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) {
      return CARD_COUNT * CARD_WIDTH_MOBILE + (CARD_COUNT - 1) * GAP_MOBILE;
    }
    const cardWidth = containerWidth * 0.2;
    return CARD_COUNT * cardWidth + (CARD_COUNT - 1) * 20;
  };

  const getMoveAmount = (containerWidth) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1200) {
      return CARD_WIDTH_MOBILE + GAP_MOBILE; // 278px
    }
    return containerWidth * 0.4 + 20;
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

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const moveAmount = getMoveAmount(containerWidth);

      setTranslateX((prev) => {
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
        const next = prev + moveAmount;
        return next > offset ? offset : next;
      });
    }
  };

  const startOffset = getStartOffset();
  const isFirst = translateX === startOffset;
  const isLast = translateX === maxTranslate;

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
                dop: "Bhrigav Dua",
                dop2: "Dhiraj Shrama",
                yt: "https://www.youtube.com/watch?v=F7-577Q8v2g",
              },
              {
                dop: "Dhiraj Shrama",
                dop2: "Bhrigav Dua",
                yt: "https://www.youtube.com/watch?v=OTKNrJE94rI",
              },
              {
                dop: "Bhrigav Dua",
                dop2: "Neeraj Patel",
                yt: "https://www.youtube.com/watch?v=k-KHUz62Onw",
              },
              {
                dop: "Ashutosh",
                dop2: "Bhrigav Dua",
                yt: "https://www.youtube.com/watch?v=X8dsDrAEAkY",
              },
              {
                dop: "Bhrigav Dua",
                dop2: "Dhiraj Shrama",
                yt: "https://www.youtube.com/watch?v=tm-nN3cMJyQ",
              },
              {
                dop: "Ashutosh",
                dop2: "Bhrigav Dua",
                yt: "https://www.youtube.com/watch?v=OdbRK-WznDI",
              },
              {
                dop: "Bhrigav Dua",
                dop2: "Dhiraj Shrama",
                yt: "https://www.youtube.com/watch?v=ynfNVqUS8is",
              },
              {
                dop: "Bhrigav Dua",
                dop2: "Dhiraj Shrama",
                yt: "https://www.youtube.com/watch?v=pxSb_TLgCDo",
              },
              {
                dop: "Bhrigav Dua",
                dop2: "Dhiraj Shrama",
                yt: "https://www.youtube.com/watch?v=pxSb_TLgCDo",
              },
            ].map((item, i) => (
              <article className="cinematography-visual-set" key={i}>
                <div className="cinematography-visual-video-link">
                  <iframe
                    src={getEmbedUrl(item.yt)}
                    title={`${item.dop} & ${item.dop2}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="cinematography-visual-set-content">
                  <div className="cinematography-visual-set-text">
                    <div className="cinematography-visual-set-text-set">
                      <h3>{item.dop}</h3>
                      <p>DOP</p>
                    </div>
                    <div className="cinematography-visual-set-text-set">
                      <h3>{item.dop2}</h3>
                      <p>2nd DOP</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-brands-buttons desktop">
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

export default Visual;
