import React, { useEffect, useState, useRef } from "react";
import Img15 from "../../assets/Cinematography/Work/Gillette/Image15.png";
import Img16 from "../../assets/Cinematography/Work/Gillette/Image16.png";
import Img17 from "../../assets/Cinematography/Work/Gillette/Image17.png";
import Img18 from "../../assets/Cinematography/Work/Gillette/Image18.png";
import Img19 from "../../assets/Cinematography/Work/Gillette/Image19.png";
import Img20 from "../../assets/Cinematography/Work/Gillette/Image20.png";
import Img21 from "../../assets/Cinematography/Work/Gillette/Image21.png";
import Img22 from "../../assets/Cinematography/Work/Gillette/Image22.png";
import Img23 from "../../assets/Cinematography/Work/Gillette/Image23.png";
import Img24 from "../../assets/Cinematography/Work/Gillette/Image24.png";
import Img25 from "../../assets/Cinematography/Work/Gillette/Image25.png";
import Img26 from "../../assets/Cinematography/Work/Gillette/Image26.png";
import Img27 from "../../assets/Cinematography/Work/Gillette/Image27.png";
import Img28 from "../../assets/Cinematography/Work/Gillette/Image28.png";

const images = [Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28];

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

function Gillette1() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2><span>Gillette</span> X Valorant - Commercial</h2>
        <p>1st Assistant Cinematographer | Camera Operator</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(0, 3)} startDelay={0} />
        </article>

        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              src="https://www.youtube.com/embed/ZtA-8Kcne8s?autoplay=1&mute=1&loop=1&playlist=ZtA-8Kcne8s&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(3, 7)} startDelay={2000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(7, 10)} startDelay={4000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(10, 14)} startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default Gillette1;
