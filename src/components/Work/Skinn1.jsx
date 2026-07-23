import React, { useEffect, useState, useRef } from "react";
import Img1 from "../../assets/Cinematography/Work/Titan skin/Img1.webp";
import Img2 from "../../assets/Cinematography/Work/Titan skin/Img2.webp";
import Img3 from "../../assets/Cinematography/Work/Titan skin/Img3.webp";
import Img4 from "../../assets/Cinematography/Work/Titan skin/Img4.webp";
import Img5 from "../../assets/Cinematography/Work/Titan skin/Img5.webp";
import Img6 from "../../assets/Cinematography/Work/Titan skin/Img6.webp";
import Img7 from "../../assets/Cinematography/Work/Titan skin/Img7.webp";
import Img8 from "../../assets/Cinematography/Work/Titan skin/Img8.webp";
import Img9 from "../../assets/Cinematography/Work/Titan skin/Img9.webp";
import Img10 from "../../assets/Cinematography/Work/Titan skin/Img10.webp";
import Img11 from "../../assets/Cinematography/Work/Titan skin/Img11.webp";
import Img12 from "../../assets/Cinematography/Work/Titan skin/Img12.webp";
import Img13 from "../../assets/Cinematography/Work/Titan skin/Img13.webp";
import Img14 from "../../assets/Cinematography/Work/Titan skin/Img14.webp";
import Img15 from "../../assets/Cinematography/Work/Titan skin/Img15.webp";
import Img16 from "../../assets/Cinematography/Work/Titan skin/Img16.webp";
import Img17 from "../../assets/Cinematography/Work/Titan skin/Img17.webp";
import Img18 from "../../assets/Cinematography/Work/Titan skin/Img18.webp";
import Img19 from "../../assets/Cinematography/Work/Titan skin/Img19.webp";

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
  Img17,
  Img18,
  Img19,
];

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

function Skinn1() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>
          <span>Skinn by Titan:</span> #NotesFromAPerfumer - Discover the world
          of fragrances with Ilias Ermenidis and Mira Kapoor
        </h2>
        <p>2nd Unit DOP | Product DOP</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={0} />
        </article>

        <article className="cinematography-work-set">
          <div className="work-set-video">
            <iframe
              title="Skinn by Titan: #NotesFromAPerfumer - Discover the world of fragrances with Ilias Ermenidis and Mira Kapoor"
              src="https://www.youtube-nocookie.com/embed/zyOdppVsPRY?autoplay=1&cc_load_policy=0&mute=1&loop=1&playlist=zyOdppVsPRY&controls=1&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={2000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={4000} />
        </article>

        <article className="cinematography-work-set">
          <CrossfadeImages startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default Skinn1;
