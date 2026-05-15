import React, { useState } from "react";
import { Link } from "react-router-dom";
import Netflix from "./Work/Netflix";
import Netflix1 from "./Work/Netflix1";
import Gillette from "./Work/Gillette";
import Gillette1 from "./Work/Gillette1";
import Gillette2 from "./Work/Gillette2";
import PrimeVideo from "./Work/PrimeVideo";
import PrimeVideo1 from "./Work/PrimeVideo1";
import Hipi_India from "./Work/Hipi_India";
import Manipal from "./Work/Manipal";
import Hotstar from "./Work/Hotstar";
import Spaces from "./Work/Spaces";
import Spaces1 from "./Work/Spaces1";
import Spaces2 from "./Work/Spaces2";
import MotilalOswal from "./Work/MotilalOswal";
import Edelweiss from "./Work/Edelweiss.jsx";
import Yale from "./Work/Yale";
import Yale1 from "./Work/Yale1";
import Yale2 from "./Work/Yale2";
import Yale3 from "./Work/Yale3";
import Mi from "./Work/Mi";
import Mi1 from "./Work/Mi1";
import TataMotors from "./Work/TataMotors";
import TataBS6 from "./Work/TataBS6";
import TataAIG from "./Work/TataAIG";
import TataAIG1 from "./Work/TataAIG1";
import TataAIG2 from "./Work/TataAIG2";
import TataCommercial from "./Work/TataCommercial";
import TataCommercial1 from "./Work/TataCommercial1";
import TataCommercial2 from "./Work/TataCommercial2";
import TataCommercial3 from "./Work/TataCommercial3";
import Sugarfit from "./Work/Sugarfit";
import Sugarfit1 from "./Work/Sugarfit1";
import Skinn from "./Work/Skinn";
import Skinn1 from "./Work/Skinn1";
import Wings from "./Work/Wings";
import Licious from "./Work/Licious";
import Truecaller from "./Work/Truecaller";
import Roadies from "./Work/Roadies";
import Dominos from "./Work/Dominos";
import UPWarriorz from "./Work/UPWarriorz";
import MeraBhai from "./Work/MeraBhai";
import PlasticFantastic from "./Work/PlasticFantastic";
import GooglePlay from "./Work/GooglePlay";
import Emperium from "./Work/Emperium";
import Emperium1 from "./Work/Emperium1";
import Contact from "./Home/Contact";
import Footer from "./Cinematography/Footer";

function Work() {
  const [activeTab, setActiveTab] = useState("Show All");

  const tabs = [
    "Show All",
    "Automotive",
    "Consumer Brands",
    "Fashion",
    "Finance",
    "Gaming",
    "Infrastructure",
    "Technology",
  ];

  const works = [
    { component: <Netflix />, category: "Consumer Brands" },
    { component: <Netflix1 />, category: "Consumer Brands" },
    { component: <Gillette />, category: "Consumer Brands" },
    { component: <Gillette1 />, category: "Consumer Brands" },
    { component: <Gillette2 />, category: "Consumer Brands" },
    { component: <Hipi_India />, category: "Consumer Brands" },
    { component: <PrimeVideo />, category: "Consumer Brands" },
    { component: <PrimeVideo1 />, category: "Consumer Brands" },
    { component: <Manipal />, category: "Consumer Brands" },
    { component: <Hotstar />, category: "Consumer Brands" },
    { component: <Spaces />, category: "Technology" },
    { component: <Spaces1 />, category: "Technology" },
    { component: <Spaces2 />, category: "Technology" },
    { component: <MotilalOswal />, category: "Finance" },
    { component: <Edelweiss />, category: "Finance" },
    { component: <Yale />, category: "Technology" },
    { component: <Yale1 />, category: "Technology" },
    { component: <Yale2 />, category: "Technology" },
    { component: <Yale3 />, category: "Technology" },
    { component: <Mi />, category: "Technology" },
    { component: <Mi1 />, category: "Technology" },
    { component: <TataMotors />, category: "Automotive" },
    { component: <TataBS6 />, category: "Automotive" },
    { component: <TataAIG />, category: "Automotive" },
    { component: <TataAIG1 />, category: "Automotive" },
    { component: <TataAIG2 />, category: "Automotive" },
    { component: <TataCommercial />, category: "Automotive" },
    { component: <TataCommercial1 />, category: "Automotive" },
    { component: <TataCommercial2 />, category: "Automotive" },
    { component: <TataCommercial3 />, category: "Automotive" },
    { component: <Sugarfit />, category: "Consumer Brands" },
    { component: <Sugarfit1 />, category: "Consumer Brands" },
    { component: <Skinn />, category: "Consumer Brands" },
    { component: <Skinn1 />, category: "Consumer Brands" },
    { component: <Wings />, category: "Consumer Brands" },
    { component: <Licious />, category: "Consumer Brands" },
    { component: <Truecaller />, category: "Technology" },
    { component: <Roadies />, category: "Consumer Brands" },
    { component: <Dominos />, category: "Consumer Brands" },
    { component: <UPWarriorz />, category: "Consumer Brands" },
    { component: <MeraBhai />, category: "Consumer Brands" },
    { component: <PlasticFantastic />, category: "Consumer Brands" },
    { component: <GooglePlay />, category: "Technology" },
    { component: <Emperium />, category: "Consumer Brands" },
    { component: <Emperium1 />, category: "Consumer Brands" },
  ];

  const filteredWorks =
    activeTab === "Show All"
      ? works
      : works.filter((item) => item.category === activeTab);

  return (
    <>
      <section className="work-heading">
        <div className="work-heading-top">
          <Link to="/cinematography" className="work-heading-go-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_591_6489"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_591_6489)">
                <path
                  d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
                  fill="#1B1B1B"
                />
              </g>
            </svg>
            <p>Go Back</p>
          </Link>

          <a
            href="#contact"
            className="navbar-button desktop"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p>Let's Talk</p>
          </a>
        </div>

        <div className="work-heading-bottom">
          <div className="work-heading-bottom-content">
            <h1>
              Featured Work of
              <br /> Bhrigav Dua
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Justo diam sapien sed
              dolor egestas. Suspendisse ut velit faucibus vitae. Malesuada sit
              in auctor diam orci tristique vitae in quisque. Lorem ipsum dolor
              sit amet.
            </p>
          </div>

          <div className="work-heading-bottom-container">
            {/* Tabs */}
            <div className="work-heading-bottom-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`work-heading-bottom-tab ${
                    activeTab === tab ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Result Count */}
            <p>
              Showing results for{" "}
              <span>
                {filteredWorks.length} / {works.length}
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="work-container home-parle-slide">
        {filteredWorks.map((item, index) => (
          <React.Fragment key={index}>{item.component}</React.Fragment>
        ))}
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Work;
