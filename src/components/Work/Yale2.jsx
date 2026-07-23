import React, { useEffect, useState, useRef } from "react";
import Image1 from "../../assets/Cinematography/Work/Image 1.webp";
import Image2 from "../../assets/Cinematography/Work/Image 2.webp";
import Image3 from "../../assets/Cinematography/Work/Image 3.webp";
import Image4 from "../../assets/Cinematography/Work/Image 4.webp";
import Image5 from "../../assets/Cinematography/Work/Image 5.webp";

const images = [Image1, Image2, Image3, Image4, Image5];

const getRandomInterval = () => Math.floor(Math.random() * 5000) + 8000;

function CrossfadeImages({ imagesSubset = images, startDelay = 0 }) {
  const list = imagesSubset || images;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState(() => {
    return Array.from({ length: list.length }, (_, i) => i);
  });
  const [indices, setIndices] = useState({
    current: 0,
    next: list.length > 1 ? 1 : 0,
  });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const arr = Array.from({ length: list.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const timer = setTimeout(() => {
      setShuffledIndices(arr);
      setIndices({ current: 0, next: arr.length > 1 ? 1 : 0 });
    }, 0);
    return () => clearTimeout(timer);
  }, [list]);

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

  if (!list || list.length === 0) return null;

  if (list.length === 1) {
    return (
      <div className="crossfade-container">
        <img
          src={list[0]}
          alt="Campaign gallery thumbnail"
          className="crossfade-img current"
        />
      </div>
    );
  }

  return (
    <div className="crossfade-container">
      <img
        src={list[shuffledIndices[indices.current]]}
        alt="Campaign gallery thumbnail"
        className={`crossfade-img current ${isTransitioning ? "fading" : ""}`}
      />
      <img
        src={list[shuffledIndices[indices.next]]}
        alt="Campaign gallery thumbnail"
        className={`crossfade-img next ${isTransitioning ? "visible" : ""}`}
      />
    </div>
  );
}

function Yale2() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>
          <span>Yale:</span> Smart Locks
        </h2>
        <p>1st Assistant Cinematographer</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        {/* Corner 1 ? top-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={0} />
        </article>

        {/* Center ? video (unchanged) */}
        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              title="Yale: Smart Locks"
              src="https://www.youtube-nocookie.com/embed/OdbRK-WznDI?autoplay=1&cc_load_policy=0&mute=1&loop=1&playlist=OdbRK-WznDI&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        {/* Corner 3 ? top-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={2000} />
        </article>

        {/* Corner 4 ? bottom-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={4000} />
        </article>

        {/* Corner 5 ? bottom-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default Yale2;
