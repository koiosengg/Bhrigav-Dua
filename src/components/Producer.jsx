import React from "react";
import Banner from "./Producer/Banner";
import Marquee from "./Producer/Marquee";
import Search from "./Cinematography/Search";
import Brands from "./Producer/Brands";
import Work from "./Producer/Work";
import HoliSlider from "./Home/HoliSlider";
import Art from "./Producer/Art";
import Navbar from "./Producer/Navbar";
import Footer from "./Producer/Footer";
import Contact from "./Home/Contact";
import Testimony from "./Cinematography/Testimony";
import Last from "./Cinematography/Last";

function Producer() {
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
      <Brands />
      <section id="work">
        <Work />
      </section>
      <HoliSlider />
      <section id="services">
        <Art />
      </section>

      <Last />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default Producer;
