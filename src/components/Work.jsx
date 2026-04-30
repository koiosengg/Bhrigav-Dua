import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ajio from "./Work/Ajio";
import Axis from "./Work/Axis";
import Brigade from "./Work/Brigade";
import Fortnite from "./Work/Fortnite";
import HeroMotoCorp from "./Work/HeroMotoCorp";
import ITC from "./Work/ITC";
import Myntra from "./Work/Myntra";
import Oneplus from "./Work/Oneplus";
import PUBG from "./Work/PUBG";
import Samsung from "./Work/Samsung";
import Suzuki from "./Work/Suzuki";
import TATA from "./Work/TATA";
import Contact from "./Home/Contact";
import Footer from "./Cinematography/Footer";

function Work() {
  // ✅ Active tab state
  const [activeTab, setActiveTab] = useState("Show All");

  // ✅ Tabs
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

  // ✅ Works with categories
  const works = [
    { component: <Ajio />, category: "Fashion" },
    { component: <Axis />, category: "Finance" },
    { component: <Brigade />, category: "Infrastructure" },
    { component: <Fortnite />, category: "Gaming" },
    { component: <HeroMotoCorp />, category: "Automotive" },
    { component: <ITC />, category: "Consumer Brands" },
    { component: <Myntra />, category: "Fashion" },
    { component: <Oneplus />, category: "Technology" },
    { component: <PUBG />, category: "Gaming" },
    { component: <Samsung />, category: "Technology" },
    { component: <Suzuki />, category: "Automotive" },
    { component: <TATA />, category: "Automotive" },
  ];

  // ✅ Filter logic
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

          <Link to="/" className="navbar-button desktop">
            <p>Let’s Talk</p>
          </Link>
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
            {/* ✅ Tabs */}
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

            {/* ✅ Result Count */}
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
