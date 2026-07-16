import React, { useEffect, useState, useRef } from "react";
import Img29 from "../../assets/Cinematography/Work/Gillette/Image29.webp";
import Img30 from "../../assets/Cinematography/Work/Gillette/Image30.webp";
import Img31 from "../../assets/Cinematography/Work/Gillette/Image31.webp";
import Img32 from "../../assets/Cinematography/Work/Gillette/Image32.webp";
import Img33 from "../../assets/Cinematography/Work/Gillette/Image33.webp";
import Img34 from "../../assets/Cinematography/Work/Gillette/Image34.webp";
import Img35 from "../../assets/Cinematography/Work/Gillette/Image35.webp";
import Img36 from "../../assets/Cinematography/Work/Gillette/Image36.webp";
import Img37 from "../../assets/Cinematography/Work/Gillette/Image37.webp";
import Img38 from "../../assets/Cinematography/Work/Gillette/Image38.webp";
import Img39 from "../../assets/Cinematography/Work/Gillette/Image39.webp";

const images = [
  Img29,
  Img30,
  Img31,
  Img32,
  Img33,
  Img34,
  Img35,
  Img36,
  Img37,
  Img38,
  Img39,
];

const getRandomInterval = () => Math.floor(Math.random() * 5000) + 8000;

function CrossfadeImages({ imagesSubset, startDelay = 0 }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState(() => {
    return Array.from({ length: imagesSubset.length }, (_, i) => i);
  });
  const [indices, setIndices] = useState({
    current: 0,
    next: imagesSubset.length > 1 ? 1 : 0,
  });
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
          next: (prev.next + 1) % shuffledIndices.length,
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
        <img src={imagesSubset[0]} alt="Gillette campaign thumbnail" className="crossfade-img current" />
      </div>
    );
  }

  return (
    <div className="crossfade-container">
      <img
        src={imagesSubset[shuffledIndices[indices.current]]}
        alt="Campaign gallery thumbnail"
        className={`crossfade-img current ${isTransitioning ? "fading" : ""}`}
      />
      <img
        src={imagesSubset[shuffledIndices[indices.next]]}
        alt="Campaign gallery thumbnail"
        className={`crossfade-img next ${isTransitioning ? "visible" : ""}`}
      />
    </div>
  );
}

function Gillette2() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>
          <span>Gillette X Valorant</span>
        </h2>
        <p>1st Assistant Cinematographer | Camera Operator</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(0, 3)} startDelay={0} />
        </article>

        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              title="Gillette X Valorant"
              src="https://www.youtube-nocookie.com/embed/rwa6RVz0FBk?autoplay=1&cc_load_policy=3&mute=1&loop=1&playlist=rwa6RVz0FBk&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages
            imagesSubset={images.slice(3, 6)}
            startDelay={2000}
          />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages
            imagesSubset={images.slice(6, 9)}
            startDelay={4000}
          />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages
            imagesSubset={images.slice(9, 11)}
            startDelay={6000}
          />
        </article>
      </div>
    </div>
  );
}

export default Gillette2;
