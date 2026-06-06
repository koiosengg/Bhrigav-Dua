import React, { useEffect, useState, useRef } from "react";
import Img1 from "../../assets/Cinematography/Work/Edelweiss/Img1.png";
import Img2 from "../../assets/Cinematography/Work/Edelweiss/Img2.png";
import Img3 from "../../assets/Cinematography/Work/Edelweiss/Img3.png";
import Img4 from "../../assets/Cinematography/Work/Edelweiss/Img4.png";
import Img5 from "../../assets/Cinematography/Work/Edelweiss/Img5.png";
import Img6 from "../../assets/Cinematography/Work/Edelweiss/Img6.png";
import Img7 from "../../assets/Cinematography/Work/Edelweiss/Img7.png";
import Img8 from "../../assets/Cinematography/Work/Edelweiss/Img8.png";
import Img9 from "../../assets/Cinematography/Work/Edelweiss/Img9.png";
import Img10 from "../../assets/Cinematography/Work/Edelweiss/Img10.png";
import Img11 from "../../assets/Cinematography/Work/Edelweiss/Img11.png";
import Img12 from "../../assets/Cinematography/Work/Edelweiss/Img12.png";
import EdelweissVideo from "../../assets/Cinematography/Work/Edelweiss/Edelweiss.mp4";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12];

const getRandomInterval = () => Math.floor(Math.random() * 5000) + 8000;

function CrossfadeImages({ imagesSubset, startDelay = 0 }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState(() => {
    return Array.from({ length: imagesSubset.length }, (_, i) => i);
  });
  const [indices, setIndices] = useState({ current: 0, next: imagesSubset.length > 1 ? 1 : 0 });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const arr = Array.from({ length: imagesSubset.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const timer = setTimeout(() => {
      setShuffledIndices(arr);
      setIndices({ current: 0, next: arr.length > 1 ? 1 : 0 });
    }, 0);
    return () => clearTimeout(timer);
  }, [imagesSubset]);

  useEffect(() => {
    if (shuffledIndices.length <= 1) return;

    const cycle = () => {
      setIsTransitioning(true);
      timeoutRef.current = setTimeout(() => {
        setIndices((prev) => ({
          current: prev.next,
          next: (prev.next + 1) % shuffledIndices.length
        }));
        setIsTransitioning(false);
        timeoutRef.current = setTimeout(cycle, getRandomInterval());
      }, 3000);
    };

    timeoutRef.current = setTimeout(cycle, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [shuffledIndices.length, startDelay]);

  if (imagesSubset.length === 1) {
    return (
      <div className="crossfade-container">
        <img
          src={imagesSubset[0]}
          alt=""
          className="crossfade-img current"
        />
      </div>
    );
  }

  return (
    <div className="crossfade-container">
      <img
        src={imagesSubset[shuffledIndices[indices.current]]}
        alt=""
        className={`crossfade-img current ${isTransitioning ? "fading" : ""}`}
      />
      <img
        src={imagesSubset[shuffledIndices[indices.next]]}
        alt=""
        className={`crossfade-img next ${isTransitioning ? "visible" : ""}`}
      />
    </div>
  );
}

function Edelweiss() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>
          Empowering fathers to lead a financially independent and purposeful
          life | Fathers Day
        </h2>
        <p>1st Assistant Cinematographer</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        {/* Corner 1 — top-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(0, 3)} startDelay={0} />
        </article>

        {/* Center — video (unchanged) */}
        <article className="cinematography-work-set">
          <a
            href="https://www.youtube.com/watch?v=atCEq_KtkUA"
            target="_blank"
            rel="noopener noreferrer"
            className="work-set-video"
            aria-label="Watch on YouTube"
          >
            <video src={EdelweissVideo} autoPlay loop muted></video>
          </a>
        </article>

        {/* Corner 3 — top-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(3, 6)} startDelay={2000} />
        </article>

        {/* Corner 4 — bottom-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(6, 9)} startDelay={4000} />
        </article>

        {/* Corner 5 — bottom-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(9, 12)} startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default Edelweiss;
