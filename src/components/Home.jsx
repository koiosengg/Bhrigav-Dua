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
        description="Bhrigav Dua — cinematographer, 1st AC, and producer. Films, brand commercials, and digital content."
      />
      <HomePageStructuredData />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
