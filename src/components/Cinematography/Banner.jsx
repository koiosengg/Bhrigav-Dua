import React, { useState, useEffect } from "react";
import DesktopBackground from "../../assets/Cinematography/Banner/Desktop Background.png";
const images = Object.values(
  import.meta.glob("../../assets/Cinematography/Banner/Homepage/*.webp", {
    eager: true,
    import: "default",
  })
);

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const texts = ["Bhrigav Dua", "Cinematographer"];

function Banner() {
  const totalSlots = 8; // same as your grid items

  const [state, setState] = useState(() => {
    const shuffled = shuffleArray(images);
    return {
      slots: shuffled.slice(0, totalSlots),
      unusedImages: shuffled.slice(totalSlots),
    };
  });

  // Random replace logic (same as Khamosh)
  useEffect(() => {
    let timeout;

    const run = () => {
      const delay = Math.floor(Math.random() * 3000);

      timeout = setTimeout(() => {
        setState((prevState) => {
          let newUnused = [...prevState.unusedImages];

          if (newUnused.length === 0) {
            newUnused = shuffleArray(images);
          }

          const randomSlot = Math.floor(Math.random() * prevState.slots.length);
          let nextImage = newUnused.shift();

          if (!nextImage) {
            nextImage = images[Math.floor(Math.random() * images.length)];
          }

          const updatedSlots = [...prevState.slots];
          updatedSlots[randomSlot] = nextImage;

          return {
            slots: updatedSlots,
            unusedImages: newUnused,
          };
        });

        run();
      }, delay);
    };

    run();

    return () => clearTimeout(timeout);
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cinematography-banner">
      <img
        src={DesktopBackground}
        alt="Desktop Background"
        className="cinematography-banner-background"
      />

      <div className="cinematography-banner-div">
        <div className="cinematography-banner-container">
          <div className="cinematography-banner-top">
            <div className="cinematography-banner-heading">
              <h1 key={index} className="slide-text">
                {texts[index]}
              </h1>
            </div>

            <div className="cinematography-banner-grid">
              {state.slots.map((img, index) => (
                <article
                  key={index}
                  className="cinematography-banner-set animated-img"
                >
                  <img
                    src={img}
                    alt="Banner"
                    className="blur-img"
                  />
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;
