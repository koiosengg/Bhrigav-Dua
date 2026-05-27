import React, { useRef, useState, useEffect } from "react";
import Video1 from "../../assets/Cinematography/Visual/Never Have I Ever - Truecaller CallItOut Edition.mp4";
import Video2 from "../../assets/Cinematography/Visual/Sorry Dads _ Happy Father's Day from Licious.mp4";
import Video3 from "../../assets/Cinematography/Visual/Tata AIG _ Travel Insurance _ Kuch Bhi Ho Sakta Hai _ Vietnam.mp4";
import Video4 from "../../assets/Cinematography/Visual/UP Warriorz Official Anthem Launch _ WPL 2023 _ UPWarriorzUttarDega.mp4";
import Video5 from "../../assets/Cinematography/Visual/Yale Smart Locks (Commercial - Sept’2022)1.mp4";
import Video6 from "../../assets/Cinematography/Visual/Yale Smart Locks (Commercial - Sept’2022)3.mp4";
import Video7 from "../../assets/Cinematography/Visual/Yale Smart Locks (Commercial - Sept’2022)4.mp4";
import Video8 from "../../assets/Cinematography/Visual/टाटा इंट्रा V20 पिकअप _ भारत की पहली बाई-फ्यूल पिकअप _ सब कुछ उठाए, हर दिन जिताये _ Hindi _ 60 Sec.mp4";
import Video9 from "../../assets/Cinematography/Visual/टाटा इंट्रा V50  पिकअप _ बड़ा डाला _ सब कुछ उठाए, हर दिन जिताये _ Hindi _ 50 Sec.mp4";

function Visual() {
  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#f4f0e9";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

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
            <article className="cinematography-visual-set">
              <video src={Video1} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Dhiraj Shrama</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video2} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Dhiraj Shrama</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video3} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Neeraj Patel</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video4} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Ashutosh</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video5} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Dhiraj Shrama</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video6} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Ashutosh</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video7} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Dhiraj Shrama</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video8} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Dhiraj Shrama</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
            <article className="cinematography-visual-set">
              <video src={Video9} autoPlay loop muted playsInline />
              <div className="cinematography-visual-set-content">
                <div className="cinematography-visual-set-text">
                  <div className="cinematography-visual-set-text-set">
                    <h3>Bhrigav Dua</h3>
                    <p>DOP</p>
                  </div>
                  <div className="cinematography-visual-set-text-set">
                    <h3>Dhiraj Shrama</h3>
                    <p>2nd DOP</p>
                  </div>
                </div>
                <a href="#">View on YouTube</a>
              </div>
            </article>
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
