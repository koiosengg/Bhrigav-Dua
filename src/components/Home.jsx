import React from "react";
import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import Footer from "./Home/Footer";
import SEO from "./SEO";
import { HomePageStructuredData } from "../structured-data/index.jsx";

function Home() {
  return (
    <>
      <SEO
        title="Bhrigav Dua"
        description="Crafting visuals for films, commercials & digital content. Combining technical expertise with visual direction to elevate storytelling across formats."
      />
      <HomePageStructuredData />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
