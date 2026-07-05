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
import ProducerImage from "../assets/Cinematography/Search/Producer.webp";

function Producer() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <Marquee />
      <section id="about-us">
        <Search image={ProducerImage}>
          A filmmaker with over 8 years of experience across 50+ advertising
          films. I work closely with brands, agencies, and filmmakers to
          transform creative ideas into well-executed productions.
          <br />
          <br />
          As the founder of Manbhavan Productions, I oversee every stage of the
          process, from planning and budgeting to crew management, logistics,
          and delivery.
          <br />
          <br />
          Every project changes the way I look at the next one, and that's
          probably my favorite part of the job.
        </Search>
      </section>
      <Brands />

      <HoliSlider />
      <section id="work">
        <Work />
      </section>
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
