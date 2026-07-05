import React, { useEffect, useRef } from "react";

// Dynamically import all webp files in the Cinemat BTS directory
const globbedImages = import.meta.glob(
  "../../assets/Cinematography/Inside/Cinemat BTS/*.webp",
  { eager: true, import: "default" }
);

// Natural sort the images: Image 1, Image 2, ... Image 137
const sortedImages = Object.keys(globbedImages)
  .sort((a, b) => {
    const numA = parseInt(a.match(/Image (\d+)\.webp/)?.[1] || "0", 10);
    const numB = parseInt(b.match(/Image (\d+)\.webp/)?.[1] || "0", 10);
    return numA - numB;
  })
  .map((key) => globbedImages[key]);

// Shuffle the images list once at module load to mix them
const mixedImages = [...sortedImages];
for (let i = mixedImages.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [mixedImages[i], mixedImages[j]] = [mixedImages[j], mixedImages[i]];
}

// Split the mixed images into three rows
const totalCount = mixedImages.length;
const rowCount = Math.ceil(totalCount / 3);
const row1 = mixedImages.slice(0, rowCount);
const row2 = mixedImages.slice(rowCount, rowCount * 2);
const row3 = mixedImages.slice(rowCount * 2);

function Inside() {
  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#1B1B1B";
        } else {
          document.body.style.backgroundColor = "#F4F0E9";
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home-reality-wrapper producer-inside-div">
      <div className="producer-inside home-reality" ref={testimonyRef}>
        <div className="producer-inside-wrapper">
          <div className="producer-inside-marquee">
            {/* Render row 1 twice for seamless looping */}
            {[...row1, ...row1].map((src, index) => (
              <img key={`row1-${index}`} src={src} alt="Production Image" />
            ))}
          </div>
        </div>
        <div className="producer-inside-wrapper">
          <div className="producer-inside-marquee">
            {/* Render row 2 twice for seamless looping */}
            {[...row2, ...row2].map((src, index) => (
              <img key={`row2-${index}`} src={src} alt="Production Image" />
            ))}
          </div>
        </div>
        <div className="producer-inside-wrapper">
          <div className="producer-inside-marquee">
            {/* Render row 3 twice for seamless looping */}
            {[...row3, ...row3].map((src, index) => (
              <img key={`row3-${index}`} src={src} alt="Production Image" />
            ))}
          </div>
        </div>
        <h2 className="producer-inside-heading">
          Behind <br />
          The Lens
        </h2>
      </div>
    </section>
  );
}

export default Inside;
