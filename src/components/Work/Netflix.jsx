import React, { useEffect, useState, useRef } from "react";
import Img8 from "../../assets/Cinematography/Work/Netflix/Image8.png";
import Img9 from "../../assets/Cinematography/Work/Netflix/Image9.png";
import Img10 from "../../assets/Cinematography/Work/Netflix/Image10.png";
import Img11 from "../../assets/Cinematography/Work/Netflix/Image11.png";
import Img12 from "../../assets/Cinematography/Work/Netflix/Image12.png";
import Img13 from "../../assets/Cinematography/Work/Netflix/Image13.png";
import Img14 from "../../assets/Cinematography/Work/Netflix/Image14.png";
import Img15 from "../../assets/Cinematography/Work/Netflix/Image15.png";
import Img16 from "../../assets/Cinematography/Work/Netflix/Image16.png";
import Img17 from "../../assets/Cinematography/Work/Netflix/Image17.png";
import Img18 from "../../assets/Cinematography/Work/Netflix/Image18.png";
import Img19 from "../../assets/Cinematography/Work/Netflix/Image19.png";

const images = [Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19];

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

function Netflix() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2><span>Netflix</span> Never Have I Ever 2 Debate | Agree to Disagree</h2>
        <p>Assistant Cinematographer | Camera Operator</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(0, 3)} startDelay={0} />
        </article>

        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              src="https://www.youtube.com/embed/JREOxhNQoWg?autoplay=1&mute=1&loop=1&playlist=JREOxhNQoWg&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(3, 6)} startDelay={2000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(6, 9)} startDelay={4000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(9, 12)} startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default Netflix;
