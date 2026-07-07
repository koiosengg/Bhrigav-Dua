import React from "react";
import GooglePlay from "../../assets/Cinematography/Marquee/Google-play.webp";
import Limca from "../../assets/Cinematography/Marquee/Limca.webp";
import Dream11 from "../../assets/Cinematography/Marquee/Dream11.webp";
import EU from "../../assets/Cinematography/Marquee/EU.webp";
import TitakSkinn from "../../assets/Cinematography/Marquee/Titan-Skinn.svg";
import Tata from "../../assets/Cinematography/Marquee/Tata.webp";
import TataAIG from "../../assets/Cinematography/Marquee/TATA_AIG.webp";
import UPwarriorz from "../../assets/Cinematography/Marquee/UP Warriorz.webp";
import Sugarfit from "../../assets/Cinematography/Marquee/Sugar fit.webp";
import Mi from "../../assets/Cinematography/Marquee/MI.webp";
import MotilalOswal from "../../assets/Cinematography/Marquee/Motilal-Oswal.svg";
import FiMoney from "../../assets/Cinematography/Marquee/FI.webp";
import Yale from "../../assets/Cinematography/Marquee/Yale.webp";
import Emperium from "../../assets/Cinematography/Marquee/Emperium.webp";
import My11circle from "../../assets/Cinematography/Marquee/My_11_circle.webp";
import MahindraT from "../../assets/Cinematography/Marquee/MahindraT.webp";
import Gillette from "../../assets/Cinematography/Marquee/Gillette.webp";
import Truecaller from "../../assets/Cinematography/Marquee/Truecaller.webp";
import ToryBurch from "../../assets/Cinematography/Marquee/Tory-Burch.webp";
import Starbucks from "../../assets/Cinematography/Marquee/Starbucks.webp";
import Intel from "../../assets/Cinematography/Marquee/Intel.webp";
import Dominos from "../../assets/Cinematography/Marquee/Dominos.webp";
import Lakme from "../../assets/Cinematography/Marquee/Lakme.webp";
import KirtilalJewellers from "../../assets/Cinematography/Marquee/Kirtilal-Jewellers.avif";
import Meta from "../../assets/Cinematography/Marquee/Meta.webp";
import Amdocs from "../../assets/Cinematography/Marquee/Amdocs.webp";
import Bgmi from "../../assets/Cinematography/Marquee/BGMI.webp";

/* 
  Assets missing — commented out in logos array:
  8.  Wings
  16. Pineapple
  24. Komfort Universe
  28. ICTX

  To be added (assets pending):
  32. IIT Jodhpur
  33. IMT Ghaziabad
  34. Nivea
  35. DBS Bank
*/

function Marquee() {
  const logos = [
    { src: GooglePlay, alt: "Google Play" }, // 1
    { src: Limca, alt: "Limca" }, // 2
    { src: Dream11, alt: "Dream11" }, // 3
    { src: EU, alt: "EU" }, // 4
    { src: TitakSkinn, alt: "Titak Skinn" }, // 5
    { src: Tata, alt: "Tata Commercial Vehicles" }, // 6
    { src: TataAIG, alt: "Tata AIG" }, // 7
    // { alt: "Wings" },                               // 8  — asset missing
    { src: UPwarriorz, alt: "UP Warriorz" }, // 9
    { src: Sugarfit, alt: "Sugar fit" }, // 10
    { src: Mi, alt: "Mi" }, // 11
    { src: MotilalOswal, alt: "Motilal Oswal" }, // 12
    { src: FiMoney, alt: "Fi Money" }, // 13
    { src: Yale, alt: "Yale" }, // 14
    { src: Emperium, alt: "Emperium" }, // 15
    // { alt: "Pineapple" },                           // 16 — asset missing
    { src: My11circle, alt: "My11circle" }, // 17
    { src: MahindraT, alt: "Mahindra Tractors" }, // 18
    { src: Gillette, alt: "Gillette" }, // 19
    { src: Truecaller, alt: "Truecaller" }, // 20
    { src: ToryBurch, alt: "Tory Burch" }, // 21
    { src: Starbucks, alt: "Starbucks" }, // 22
    { src: Intel, alt: "Intel" }, // 23
    // { alt: "Komfort Universe" },                    // 24 — asset missing
    { src: Dominos, alt: "Domino's" }, // 25
    { src: Lakme, alt: "Lakmé" }, // 26
    { src: KirtilalJewellers, alt: "Kirtilal Jewellers" }, // 27
    // { alt: "ICTX" },                               // 28 — asset missing
    { src: Meta, alt: "Meta" }, // 29
    { src: Amdocs, alt: "Amdocs" }, // 30
    { src: Bgmi, alt: "BGMI" }, // 31
    // TO BE ADDED — assets pending:
    // { alt: "IIT Jodhpur" },                        // 32
    // { alt: "IMT Ghaziabad" },                      // 33
    // { alt: "Nivea" },                              // 34
    // { alt: "DBS Bank" },                           // 35
  ];

  const midIndex = Math.ceil(logos.length / 2);
  const row1Original = logos.slice(0, midIndex);
  const row2Original = logos.slice(midIndex);

  const fillLogos = (list, minItems = 15) => {
    let result = [];
    while (result.length < minItems && list.length > 0) {
      result = [...result, ...list];
    }
    return result;
  };

  const row1Logos = fillLogos(row1Original, 15);
  const row2Logos = fillLogos(row2Original, 15);

  return (
    <section className="home-marquee vertical cinematography-marquee">
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {row1Logos.map((logo, i) => (
            <img key={`a-${i}`} src={logo.src} alt={logo.alt} />
          ))}
          {row1Logos.map((logo, i) => (
            <img key={`b-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
      <div className="home-marquee-wrapper">
        <div className="home-marquee-container">
          {row2Logos.map((logo, i) => (
            <img key={`c-${i}`} src={logo.src} alt={logo.alt} />
          ))}
          {row2Logos.map((logo, i) => (
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
