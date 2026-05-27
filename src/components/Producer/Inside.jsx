import React, { useEffect, useRef } from "react";
import Image1 from "../../assets/Producer/Inside/Image 1.png";
import Image2 from "../../assets/Producer/Inside/Image 2.png";
import Image3 from "../../assets/Producer/Inside/Image 3.png";
import Image4 from "../../assets/Producer/Inside/Image 4.png";
import Image5 from "../../assets/Producer/Inside/Image 5.png";
import Image6 from "../../assets/Producer/Inside/Image 6.png";
import Image7 from "../../assets/Producer/Inside/Image 7.png";
import Image8 from "../../assets/Producer/Inside/Image 8.png";
import Image9 from "../../assets/Producer/Inside/Image 9.png";
import Image10 from "../../assets/Producer/Inside/Image 10.png";
import Image11 from "../../assets/Producer/Inside/Image 11.png";
import Image12 from "../../assets/Producer/Inside/Image 12.png";
import Image13 from "../../assets/Producer/Inside/Image 13.png";
import Image14 from "../../assets/Producer/Inside/Image 14.png";
import Image15 from "../../assets/Producer/Inside/Image 15.png";

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
            <img src={Image1} alt="Production Image" />
            <img src={Image2} alt="Production Image" />
            <img src={Image3} alt="Production Image" />
            <img src={Image4} alt="Production Image" />
            <img src={Image5} alt="Production Image" />
            <img src={Image6} alt="Production Image" />
            <img src={Image7} alt="Production Image" />
            <img src={Image8} alt="Production Image" />
            <img src={Image9} alt="Production Image" />
            <img src={Image10} alt="Production Image" />
            <img src={Image11} alt="Production Image" />
            <img src={Image12} alt="Production Image" />
            <img src={Image13} alt="Production Image" />
            <img src={Image14} alt="Production Image" />
            <img src={Image15} alt="Production Image" />
            <img src={Image1} alt="Production Image" />
            <img src={Image2} alt="Production Image" />
            <img src={Image3} alt="Production Image" />
            <img src={Image4} alt="Production Image" />
            <img src={Image5} alt="Production Image" />
            <img src={Image6} alt="Production Image" />
            <img src={Image7} alt="Production Image" />
            <img src={Image8} alt="Production Image" />
            <img src={Image9} alt="Production Image" />
            <img src={Image10} alt="Production Image" />
            <img src={Image11} alt="Production Image" />
            <img src={Image12} alt="Production Image" />
            <img src={Image13} alt="Production Image" />
            <img src={Image14} alt="Production Image" />
            <img src={Image15} alt="Production Image" />
          </div>
        </div>
        <div className="producer-inside-wrapper">
          <div className="producer-inside-marquee">
            <img src={Image11} alt="Production Image" />
            <img src={Image12} alt="Production Image" />
            <img src={Image13} alt="Production Image" />
            <img src={Image14} alt="Production Image" />
            <img src={Image15} alt="Production Image" />
            <img src={Image1} alt="Production Image" />
            <img src={Image2} alt="Production Image" />
            <img src={Image3} alt="Production Image" />
            <img src={Image4} alt="Production Image" />
            <img src={Image5} alt="Production Image" />
            <img src={Image6} alt="Production Image" />
            <img src={Image7} alt="Production Image" />
            <img src={Image8} alt="Production Image" />
            <img src={Image9} alt="Production Image" />
            <img src={Image10} alt="Production Image" />
            <img src={Image1} alt="Production Image" />
            <img src={Image2} alt="Production Image" />
            <img src={Image3} alt="Production Image" />
            <img src={Image4} alt="Production Image" />
            <img src={Image5} alt="Production Image" />
            <img src={Image6} alt="Production Image" />
            <img src={Image7} alt="Production Image" />
            <img src={Image8} alt="Production Image" />
            <img src={Image9} alt="Production Image" />
            <img src={Image10} alt="Production Image" />
            <img src={Image11} alt="Production Image" />
            <img src={Image12} alt="Production Image" />
            <img src={Image13} alt="Production Image" />
            <img src={Image14} alt="Production Image" />
            <img src={Image15} alt="Production Image" />
          </div>
        </div>
        <div className="producer-inside-wrapper">
          <div className="producer-inside-marquee">
            <img src={Image1} alt="Production Image" />
            <img src={Image2} alt="Production Image" />
            <img src={Image3} alt="Production Image" />
            <img src={Image4} alt="Production Image" />
            <img src={Image5} alt="Production Image" />
            <img src={Image11} alt="Production Image" />
            <img src={Image12} alt="Production Image" />
            <img src={Image13} alt="Production Image" />
            <img src={Image14} alt="Production Image" />
            <img src={Image15} alt="Production Image" />
            <img src={Image6} alt="Production Image" />
            <img src={Image7} alt="Production Image" />
            <img src={Image8} alt="Production Image" />
            <img src={Image9} alt="Production Image" />
            <img src={Image10} alt="Production Image" />
            <img src={Image1} alt="Production Image" />
            <img src={Image2} alt="Production Image" />
            <img src={Image3} alt="Production Image" />
            <img src={Image4} alt="Production Image" />
            <img src={Image5} alt="Production Image" />
            <img src={Image11} alt="Production Image" />
            <img src={Image12} alt="Production Image" />
            <img src={Image13} alt="Production Image" />
            <img src={Image14} alt="Production Image" />
            <img src={Image15} alt="Production Image" />
            <img src={Image6} alt="Production Image" />
            <img src={Image7} alt="Production Image" />
            <img src={Image8} alt="Production Image" />
            <img src={Image9} alt="Production Image" />
            <img src={Image10} alt="Production Image" />
          </div>
        </div>
        <h2 className="producer-inside-heading">
          Inside the <br />
          Production
        </h2>
      </div>
    </section>
  );
}

export default Inside;
