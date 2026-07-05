import React from "react";
import Parle from "../../assets/Producer/Marquee/Parle.png";
import Limca from "../../assets/Producer/Marquee/Limca.png";
import MahindraTractors from "../../assets/Producer/Marquee/MahindraT.png";
import FamousStudios from "../../assets/Producer/Marquee/Famous-studios.png";
import Cinea from "../../assets/Producer/Marquee/Cinea.jpeg";
import Pukka from "../../assets/Producer/Marquee/Pukka.png";
import Lipton from "../../assets/Producer/Marquee/Lipton.png";
import GooglePlay from "../../assets/Producer/Marquee/Google-play.png";

/* 
  Missing Brand Assets (displayed as text fallbacks):
  - Colorblind
  - River Engg.
  - Arwachin Bharti Bhawan
*/

function Marquee() {
  const logos = [
    { src: Lipton, alt: "Lipton" },
    { src: Parle, alt: "Parle" },
    { src: Pukka, alt: "Pukka" },
    { src: Limca, alt: "Limca" },
    { src: MahindraTractors, alt: "Mahindra Tractors" },
    // { type: "text", text: "Colorblind" },
    // { type: "text", text: "River Engg." },
    // { type: "text", text: "Arwachin Bharti Bhawan" },
    { src: Cinea, alt: "Ciena" },
    { src: FamousStudios, alt: "Famous Studios", className: "famous-studios-logo" },
    { src: GooglePlay, alt: "Google Play" },
  ];

  const renderLogo = (logo, key) => (
    <img key={key} src={logo.src} alt={logo.alt} className={logo.className || ""} />
  );

  return (
    <section className="home-marquee vertical">
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {logos.map((logo, i) => renderLogo(logo, `a-${i}`))}
          {logos.map((logo, i) => renderLogo(logo, `b-${i}`))}
        </div>
      </div>
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {logos.map((logo, i) => renderLogo(logo, `c-${i}`))}
          {logos.map((logo, i) => renderLogo(logo, `d-${i}`))}
        </div>
      </div>
      <div className="home-marquee-left"></div>
      <div className="home-marquee-right"></div>
    </section>
  );
}

export default Marquee;

