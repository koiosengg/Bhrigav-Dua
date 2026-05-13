import React, { useEffect, useState, useMemo, useRef } from "react";
import Image1 from "../../assets/Cinematography/Snapshots/Image 1.png";
import Image2 from "../../assets/Cinematography/Snapshots/Image 2.png";
import Image3 from "../../assets/Cinematography/Snapshots/Image 3.png";
import Image4 from "../../assets/Cinematography/Snapshots/Image 4.png";
import Image5 from "../../assets/Cinematography/Snapshots/Image 5.png";
import Image6 from "../../assets/Cinematography/Snapshots/Image 6.png";
import Image7 from "../../assets/Cinematography/Snapshots/Image 7.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

function CrossfadeImages({ cellId }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const shuffledIndices = useMemo(() => {
    const indices = [0, 1, 2, 3, 4, 5, 6];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, []);

  const getRandomInterval = () => Math.floor(Math.random() * 5000) + 8000;
  const getRandomStartDelay = () => Math.floor(Math.random() * 2000);

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

    const startDelay = getRandomStartDelay();
    timeoutRef.current = setTimeout(() => {
      cycle();
    }, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [shuffledIndices.length]);

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

function Snapshots() {
  const imageItems = [
    { type: "img", key: 0 },
    { type: "text", content: "Some", key: "t1" },
    { type: "img", key: 1 },
    { type: "img", key: 2 },
    { type: "text", content: "Snap", key: "t2" },
    { type: "img", key: 3 },
    { type: "img", key: 4 },
    { type: "text", content: "Shots", key: "t3" },
    { type: "img", key: 5 },
    { type: "text", content: "You'd", key: "t4" },
    { type: "text", content: "Love", key: "t5" },
    { type: "img", key: 6 },
  ];

  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-snapshots home-reality">
        <div className="cinematography-snapshots-grid">
          {imageItems.map((item) => (
            <div key={item.key} className="cinematography-snapshots-set">
              {item.type === "text" ? (
                <p>{item.content}</p>
              ) : (
                <CrossfadeImages cellId={item.key} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Snapshots;
