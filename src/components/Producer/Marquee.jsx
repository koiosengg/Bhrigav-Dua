import React from "react";
import Parle from "../../assets/Producer/Marquee/Parle.png";
import Limca from "../../assets/Producer/Marquee/Limca.png";
import MahindraTractors from "../../assets/Producer/Marquee/MahindraT.png";
import FamousStudios from "../../assets/Producer/Marquee/Famous-studios.png";
import Cinea from "../../assets/Producer/Marquee/Cinea.jpeg";
import Pukka from "../../assets/Producer/Marquee/Pukka.png";
import Lipton from "../../assets/Producer/Marquee/Lipton.png";
import Sugarfit from "../../assets/Producer/Marquee/Sugar fit.png";
import Bgmi from "../../assets/Producer/Marquee/BGMI.png";
import Tata from "../../assets/Producer/Marquee/Tata.png";
import Dream11 from "../../assets/Producer/Marquee/Dream11.png";
import UPwarriorz from "../../assets/Producer/Marquee/UP Warriorz.png";

/* 
  Missing Brand Assets to be added for Producer Marquee:
  - Google Play
  - Colorblind
  - River Engg.
  - Arwachin Bharti Bhawan
*/

function Marquee() {
  const logos = [
    { src: Parle, alt: "Parle" },
    { src: Limca, alt: "Limca" },
    { src: MahindraTractors, alt: "Mahindra Tractors" },
    { src: FamousStudios, alt: "Famous Studios", className: "famous-studios-logo" },
    { src: Cinea, alt: "Cinea" },
    { src: Pukka, alt: "Pukka" },
    { src: Lipton, alt: "Lipton" },
    { src: Sugarfit, alt: "Sugar fit" },
    { src: Bgmi, alt: "BGMI" },
    { src: Tata, alt: "Tata" },
    { src: Dream11, alt: "Dream11" },
    { src: UPwarriorz, alt: "UP Warriorz" },
  ];

  return (
    <section className="home-marquee vertical">
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {logos.map((logo, i) => (
            <img key={`a-${i}`} src={logo.src} alt={logo.alt} className={logo.className || ""} />
          ))}
          {logos.map((logo, i) => (
            <img key={`b-${i}`} src={logo.src} alt={logo.alt} className={logo.className || ""} />
          ))}
        </div>
      </div>
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {logos.map((logo, i) => (
            <img key={`c-${i}`} src={logo.src} alt={logo.alt} className={logo.className || ""} />
          ))}
          {logos.map((logo, i) => (
            <img key={`d-${i}`} src={logo.src} alt={logo.alt} className={logo.className || ""} />
          ))}
        </div>
      </div>
      <div className="home-marquee-left"></div>
      <div className="home-marquee-right"></div>
    </section>
  );
}

export default Marquee;
