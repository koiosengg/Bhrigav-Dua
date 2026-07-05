import React, { useEffect, useState, useRef } from "react";
import Img5 from "../../assets/Cinematography/Work/PrimeVideo/Image5.png";
import Img6 from "../../assets/Cinematography/Work/PrimeVideo/Image6.png";
import Img7 from "../../assets/Cinematography/Work/PrimeVideo/Image7.png";
import Img8 from "../../assets/Cinematography/Work/PrimeVideo/Image8.png";
import Img9 from "../../assets/Cinematography/Work/PrimeVideo/Image9.png";

const images = [Img5, Img6, Img7, Img8, Img9];

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

function PrimeVideo1() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2><span>Prime Video</span> Coaching Then Vs. Now Ft. @Chetan Bhagat</h2>
        <p>1st Assistant Cinematographer | 2nd Camera</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(0, 1)} startDelay={0} />
        </article>

        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              src="https://www.youtube.com/embed/de1WAUUMYQ4?autoplay=1&mute=1&loop=1&playlist=de1WAUUMYQ4&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(1, 2)} startDelay={2000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(2, 3)} startDelay={4000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(3, 5)} startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default PrimeVideo1;
