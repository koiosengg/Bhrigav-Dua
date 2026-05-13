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
import Vision from "./Producer/Vision";
import Last from "./Producer/Last";
import Inside from "./Producer/Inside";

function Producer() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <Marquee />
      <Search />
      <Brands />
      <section id="work">
        <Work />
      </section>
      <HoliSlider />
      <section id="about">
        <Art />
      </section>
      <Vision />
      <section id="industry">
        <Inside />
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
