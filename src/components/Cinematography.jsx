import React from "react";
import Banner from "./Cinematography/Banner";
import Marquee from "./Cinematography/Marquee";
import Search from "./Cinematography/Search";
import Visual from "./Cinematography/Visual";
import Work from "./Cinematography/Work";
import Lens from "./Cinematography/Lens";
import Industries from "./Cinematography/Industries";
import Khamosh from "./Cinematography/Khamosh";
import HoliSlider from "./Home/HoliSlider";
import Snapshots from "./Cinematography/Snapshots";
import Testimony from "./Cinematography/Testimony";
import Contact from "./Home/Contact";
import Footer from "./Cinematography/Footer";
import Last from "./Cinematography/Last";
import Navbar from "./Cinematography/Navbar";

function Cinematography() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <Marquee />
      <section id="about-us">
        <Search />
      </section>
      <section id="about">
        <Visual />
      </section>
      <section id="work">
        <Work />
      </section>
      <Khamosh />
      <Lens />
      <section id="industries">
        <Industries />
      </section>
      <HoliSlider />
      <Last />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default Cinematography;
