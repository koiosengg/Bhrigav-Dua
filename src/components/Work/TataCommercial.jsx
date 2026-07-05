import React, { useEffect, useState, useRef } from "react";
import Img1 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img1.png";
import Img2 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img2.png";
import Img3 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img3.png";
import Img4 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img4.png";
import Img5 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img5.png";
import Img6 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img6.png";
import Img7 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img7.png";
import Img8 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img8.png";
import Img9 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img9.png";
import Img10 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img10.png";
import Img11 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img11.png";
import Img12 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img12.png";
import Img13 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img13.png";
import Img14 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img14.png";
import Img15 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img15.png";
import Img16 from "../../assets/Cinematography/Work/TataCommercial/TataV50/Img16.png";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
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
        <img src={imagesSubset[0]} alt="" className="crossfade-img current" />
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

function TataCommercial() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>
          <span>Tata Motors:</span> Commercial Vehicles
        </h2>
        <p>1st Assistant Cinematographer / 2nd Unit DOP</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        {/* Corner 1 — top-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(0, 4)} startDelay={0} />
        </article>

        {/* Center — video (unchanged) */}
        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              src="https://www.youtube.com/embed/pxSb_TLgCDo?autoplay=1&mute=1&loop=1&playlist=pxSb_TLgCDo&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        {/* Corner 3 — top-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages
            imagesSubset={images.slice(4, 8)}
            startDelay={2000}
          />
        </article>

        {/* Corner 4 — bottom-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages
            imagesSubset={images.slice(8, 12)}
            startDelay={4000}
          />
        </article>

        {/* Corner 5 — bottom-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages
            imagesSubset={images.slice(12, 16)}
            startDelay={6000}
          />
        </article>
      </div>
    </div>
  );
}

export default TataCommercial;
