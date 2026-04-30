import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Cinematography/Banner/Desktop Background.png";
import Image1 from "../../assets/Cinematography/Banner/Image 1.png";
import Image2 from "../../assets/Cinematography/Banner/Image 2.png";
import Image3 from "../../assets/Cinematography/Banner/Image 3.png";
import Image4 from "../../assets/Cinematography/Banner/Image 4.png";
import Image5 from "../../assets/Cinematography/Banner/Image 5.png";
import Image6 from "../../assets/Cinematography/Banner/Image 6.png";
import Image7 from "../../assets/Cinematography/Banner/Image 7.png";
import Image8 from "../../assets/Cinematography/Banner/Image 8.png";
import Image9 from "../../assets/Cinematography/Banner/Image 9.png";

function Banner() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  const totalSlots = 8; // same as your grid items

  const [slots, setSlots] = useState([]);
  const [unusedImages, setUnusedImages] = useState([]);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Initial fill
  useEffect(() => {
    const shuffled = shuffleArray(images);
    setSlots(shuffled.slice(0, totalSlots));
    setUnusedImages(shuffled.slice(totalSlots));
  }, []);

  // Random replace logic (same as Khamosh)
  useEffect(() => {
    if (slots.length === 0) return;

    let timeout;

    const run = () => {
      const delay = Math.floor(Math.random() * 3000);

      timeout = setTimeout(() => {
        setSlots((prevSlots) => {
          let newUnused = [...unusedImages];

          if (newUnused.length === 0) {
            newUnused = shuffleArray(images);
          }

          const randomSlot = Math.floor(Math.random() * prevSlots.length);

          let nextImage = newUnused.shift();

          if (!nextImage) {
            nextImage = images[Math.floor(Math.random() * images.length)];
          }

          const updatedSlots = [...prevSlots];
          updatedSlots[randomSlot] = nextImage;

          setUnusedImages(newUnused);

          return updatedSlots;
        });

        run();
      }, delay);
    };

    run();

    return () => clearTimeout(timeout);
  }, [slots, unusedImages]);

  const texts = ["Bhrigav Dua", "Cinematographer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // 3 sec

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
              {slots.map((img, index) => (
                <article
                  key={index}
                  className="cinematography-banner-set animated-img"
                >
                  <img
                    key={img + "-" + index}
                    src={img}
                    alt="Banner"
                    className="blur-img"
                  />
                </article>
              ))}
            </div>
          </div>
          <div className="cinematography-banner-bottom">
            <p>
              A filmmaker shaping stories from concept to final frame, blending
              vision, craft, and production mastery.
            </p>
            <Link to="/cinematography/work">Explore My Works</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
