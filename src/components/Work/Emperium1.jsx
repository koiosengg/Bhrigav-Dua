import React, { useEffect, useState, useRef } from "react";
import Img1 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img1.png";
import Img2 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img2.png";
import Img3 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img3.png";
import Img4 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img4.png";
import Img5 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img5.png";
import Img6 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img6.png";
import Img7 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img7.png";
import Img8 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img8.png";
import Img9 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img9.png";
import Img10 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img10.png";
import Img11 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img11.png";
import Img12 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img12.png";
import Img13 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img13.png";
import Img14 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img14.png";
import Img15 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img15.png";
import Img16 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img16.png";
import Img17 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img17.png";
import Img18 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img18.png";
import Img19 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img19.png";
import Img20 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img20.png";
import Img21 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img21.png";
import Img22 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img22.png";
import Img23 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img23.png";
import Img24 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img24.png";
import Img25 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img25.png";
import Img26 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img26.png";
import Img27 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img27.png";
import Img28 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img28.png";
import Img29 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img29.png";
import Img30 from "../../assets/Cinematography/Work/Emperium/EmperiumEkBharosa/Img30.png";
import Emperium1Video from "../../assets/Cinematography/Work/Emperium/Emperium1.mp4";

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
  Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
  Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30
];

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

function EmperiumEkBharosa() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>Emperium - Ek Bharosa</h2>
        <p>DOP</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        {/* Corner 1 — top-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(0, 7)} startDelay={0} />
        </article>

        {/* Center — video (unchanged) */}
        <article className="cinematography-work-set">
          <a
            href="https://youtu.be/lGD_Ej4gUCg"
            target="_blank"
            rel="noopener noreferrer"
            className="work-set-video"
            aria-label="Watch on YouTube"
          >
            <video src={Emperium1Video} autoPlay muted loop playsInline />
          </a>
        </article>

        {/* Corner 3 — top-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(7, 14)} startDelay={2000} />
        </article>

        {/* Corner 4 — bottom-left */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(14, 22)} startDelay={4000} />
        </article>

        {/* Corner 5 — bottom-right */}
        <article className="cinematography-work-set">
          <CrossfadeImages imagesSubset={images.slice(22, 30)} startDelay={6000} />
        </article>
      </div>
    </div>
  );
}

export default EmperiumEkBharosa;
