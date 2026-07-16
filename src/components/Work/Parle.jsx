import React, { useEffect, useState, useRef } from "react";
import Image1 from "../../assets/Cinematography/Work/Image 1.webp";
import Image2 from "../../assets/Cinematography/Work/Image 2.webp";
import Image3 from "../../assets/Cinematography/Work/Image 3.webp";
import Image4 from "../../assets/Cinematography/Work/Image 4.webp";
import Image5 from "../../assets/Cinematography/Work/Image 5.webp";

const images = [Image1, Image2, Image3, Image4, Image5];

const getRandomInterval = () => Math.floor(Math.random() * 5000) + 8000;

function CrossfadeImages({ startDelay = 0 }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState([0, 1, 2, 3, 4]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const indices = [0, 1, 2, 3, 4];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const timer = setTimeout(() => {
      setShuffledIndices(indices);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cycle = () => {
      setIsTransitioning(true);
      timeoutRef.current = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % shuffledIndices.length);
        setNextIdx((prev) => (prev + 2) % shuffledIndices.length);
        setIsTransitioning(false);
        timeoutRef.current = setTimeout(cycle, getRandomInterval());
      }, 3000);
    };

    timeoutRef.current = setTimeout(cycle, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [shuffledIndices.length, startDelay]);

  return (
    <div className="crossfade-container">
      <img
        src={images[shuffledIndices[currentIdx]]}
        alt=""
        className={`crossfade-img current ${isTransitioning ? "fading" : ""}`}
      />
      <img
        src={images[shuffledIndices[nextIdx % shuffledIndices.length]]}
        alt=""
        className={`crossfade-img next ${isTransitioning ? "visible" : ""}`}
      />
    </div>
  );
}

function Parle() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>
          <span>Parle:</span> Father's Day | Dil ka apna emergency number
        </h2>
        <p>DOP</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        {/* Corner 1 — top-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={0} />
        </article>

        {/* Center — video */}
        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              src="https://www.youtube.com/embed/AXQ6-jh5VYE?autoplay=1&cc_load_policy=3&mute=1&loop=1&playlist=AXQ6-jh5VYE&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        {/* Corner 3 — top-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={2000} />
        </article>

        {/* Corner 4 — bottom-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={4000} />
        </article>

        {/* Corner 5 — bottom-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default Parle;
