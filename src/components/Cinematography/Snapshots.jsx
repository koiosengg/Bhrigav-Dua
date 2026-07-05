import React, { useEffect, useState, useRef } from "react";

const btsImages = Object.values(
  import.meta.glob("../../assets/Producer/BTS/*.webp", {
    eager: true,
    import: "default",
  })
);

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getAvailableImage = (usedImages) => {
  const available = btsImages.filter((img) => !usedImages.has(img));
  if (available.length === 0) {
    return btsImages[Math.floor(Math.random() * btsImages.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
};

function SnapshotCell({ cellState, onTransitionStart, onTransitionEnd }) {
  const timeoutRef = useRef(null);

  const getRandomInterval = () => Math.floor(Math.random() * 5000) + 8000;
  const getRandomStartDelay = () => Math.floor(Math.random() * 2000);

  useEffect(() => {
    const cycle = () => {
      onTransitionStart();
      timeoutRef.current = setTimeout(() => {
        onTransitionEnd();
        timeoutRef.current = setTimeout(cycle, getRandomInterval());
      }, 3000);
    };

    const startDelay = getRandomStartDelay();
    timeoutRef.current = setTimeout(cycle, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="crossfade-container">
      <img
        src={cellState.currentImg}
        alt=""
        className={`crossfade-img current ${cellState.isTransitioning ? "fading" : ""}`}
      />
      <img
        src={cellState.nextImg}
        alt=""
        className={`crossfade-img next ${cellState.isTransitioning ? "visible" : ""}`}
      />
    </div>
  );
}

function Snapshots() {
  const [cells, setCells] = useState(() => {
    const shuffled = shuffleArray(btsImages);
    return Array.from({ length: 7 }, (_, i) => ({
      currentImg: shuffled[i],
      nextImg: shuffled[i + 7],
      isTransitioning: false,
    }));
  });

  const handleTransitionStart = (index) => {
    setCells((prev) => {
      const nextCells = [...prev];
      nextCells[index] = {
        ...nextCells[index],
        isTransitioning: true,
      };
      return nextCells;
    });
  };

  const handleTransitionEnd = (index) => {
    setCells((prev) => {
      const used = new Set();
      prev.forEach((cell, idx) => {
        if (idx !== index) {
          used.add(cell.currentImg);
          used.add(cell.nextImg);
        }
      });
      used.add(prev[index].nextImg);

      const newNext = getAvailableImage(used);

      const nextCells = [...prev];
      nextCells[index] = {
        currentImg: prev[index].nextImg,
        nextImg: newNext,
        isTransitioning: false,
      };
      return nextCells;
    });
  };

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
                <SnapshotCell
                  cellState={cells[item.key]}
                  onTransitionStart={() => handleTransitionStart(item.key)}
                  onTransitionEnd={() => handleTransitionEnd(item.key)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Snapshots;
