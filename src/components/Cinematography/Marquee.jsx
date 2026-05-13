import React from "react";
import UPwarriorz from "../../assets/Cinematography/Marquee/UP Warriorz.png";
import Dream11 from "../../assets/Cinematography/Marquee/Dream11.png";
import Tata from "../../assets/Cinematography/Marquee/Tata.png";
import TataAIG from "../../assets/Cinematography/Marquee/TATA_AIG.png";
import Bgmi from "../../assets/Cinematography/Marquee/BGMI.png";
import Sugarfit from "../../assets/Cinematography/Marquee/Sugar fit.png";
import Dominos from "../../assets/Cinematography/Marquee/Dominos.png";
import Intel from "../../assets/Cinematography/Marquee/Intel.png";
import Gillette from "../../assets/Cinematography/Marquee/Gillette.png";
import MahindraT from "../../assets/Cinematography/Marquee/MahindraT.png";
import Limca from "../../assets/Cinematography/Marquee/Limca.png";
import GooglePlay from "../../assets/Cinematography/Marquee/Gpay.png";
import EU from "../../assets/Cinematography/Marquee/EU.png";
import TitakSkinn from "../../assets/Cinematography/Marquee/Titan-Skinn.svg";
import Mi from "../../assets/Cinematography/Marquee/MI.png";
import MotilalOswal from "../../assets/Cinematography/Marquee/Motilal-Oswal.svg";
import FiMoney from "../../assets/Cinematography/Marquee/FI.webp";
import Yale from "../../assets/Cinematography/Marquee/Yale.jpeg";
import Emperium from "../../assets/Cinematography/Marquee/Emperium.png";
import My11circle from "../../assets/Cinematography/Marquee/My_11_circle.png";
import KirtilalJewellers from "../../assets/Cinematography/Marquee/Kirtilal-Jewellers.avif";
import Lakme from "../../assets/Cinematography/Marquee/Lakme.png";
import Starbucks from "../../assets/Cinematography/Marquee/Starbucks.png";
import ToryBurch from "../../assets/Cinematography/Marquee/Tory-Burch.png";
import Truecaller from "../../assets/Cinematography/Marquee/Truecaller.png";
import Meta from "../../assets/Cinematography/Marquee/Meta.png";
import Amdocs from "../../assets/Cinematography/Marquee/Amdocs.png";

/* 
  Missing Brand Assets:
  - Wings
  - Pineapple
  - Komfort Universe
  - ICTX
*/

function Marquee() {
  const logos = [
    { src: GooglePlay, alt: "Google Play" },
    { src: Limca, alt: "Limca" },
    { src: Dream11, alt: "Dream11" },
    { src: EU, alt: "EU" },
    { src: TitakSkinn, alt: "Titak Skinn" },
    { src: Tata, alt: "Tata Commercial Vehicles" },
    { src: TataAIG, alt: "Tata AIG" },
    { src: UPwarriorz, alt: "UP Warriorz" },
    { src: Sugarfit, alt: "Sugar fit" },
    { src: Mi, alt: "Mi" },
    { src: MotilalOswal, alt: "Motilal Oswal" },
    { src: FiMoney, alt: "Fi Money" },
    { src: Yale, alt: "Yale" },
    { src: Emperium, alt: "Emperium" },
    { src: My11circle, alt: "My11circle" },
    { src: MahindraT, alt: "Mahindra Tractors" },
    { src: Gillette, alt: "Gillette" },
    { src: Truecaller, alt: "Truecaller" },
    { src: ToryBurch, alt: "Tory Burch" },
    { src: Starbucks, alt: "Starbucks" },
    { src: Intel, alt: "Intel" },
    { src: Dominos, alt: "Domino's" },
    { src: Lakme, alt: "Lakmé" },
    { src: KirtilalJewellers, alt: "Kirtilal Jewellers" },
    { src: Meta, alt: "Meta" },
    { src: Amdocs, alt: "Amdocs" },
    { src: Bgmi, alt: "BGMI" },
  ];

  return (
    <section className="home-marquee vertical">
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {logos.map((logo, i) => (
            <img key={`a-${i}`} src={logo.src} alt={logo.alt} />
          ))}
          {logos.map((logo, i) => (
            <img key={`b-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {logos.map((logo, i) => (
            <img key={`c-${i}`} src={logo.src} alt={logo.alt} />
          ))}
          {logos.map((logo, i) => (
            <img key={`d-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
      <div className="home-marquee-left"></div>
      <div className="home-marquee-right"></div>
    </section>
  );
}

export default Marquee;
