import React, { useState } from "react";
import { Link } from "react-router-dom";
import Parle from "./Work/Parle";
import GooglePlay from "./Work/GooglePlay";
import Skinn1 from "./Work/Skinn1";
import PlasticFantastic from "./Work/PlasticFantastic";
import Emperium from "./Work/Emperium";
import TataCommercial from "./Work/TataCommercial";
import TataCommercial1 from "./Work/TataCommercial1";
import TataCommercial2 from "./Work/TataCommercial2";
import TataCommercial3 from "./Work/TataCommercial3";
import Timex from "./Work/Timex";
import Emperium1 from "./Work/Emperium1";
import Hotstar from "./Work/Hotstar";
import DBSBank from "./Work/DBSBank";
import MeraBhai from "./Work/MeraBhai";
import Skinn from "./Work/Skinn";
import UPWarriorz from "./Work/UPWarriorz";
import Wings from "./Work/Wings";
import Manipal from "./Work/Manipal";
import Truecaller from "./Work/Truecaller";
import Hipi_India from "./Work/Hipi_India";
import PrimeVideo from "./Work/PrimeVideo";
import PrimeVideo1 from "./Work/PrimeVideo1";
import Dominos from "./Work/Dominos";
import Edelweiss from "./Work/Edelweiss";
import Licious from "./Work/Licious";
import TataBS6 from "./Work/TataBS6";
import MotilalOswal from "./Work/MotilalOswal";
import Yale from "./Work/Yale";
import Yale1 from "./Work/Yale1";
import Yale2 from "./Work/Yale2";
import Yale3 from "./Work/Yale3";
import Mi from "./Work/Mi";
import Mi1 from "./Work/Mi1";
import TataMotors from "./Work/TataMotors";
import TataAIG from "./Work/TataAIG";
import TataAIG1 from "./Work/TataAIG1";
import TataAIG2 from "./Work/TataAIG2";
import Spaces from "./Work/Spaces";
import Spaces1 from "./Work/Spaces1";
import Spaces2 from "./Work/Spaces2";
import Netflix from "./Work/Netflix";
import Netflix1 from "./Work/Netflix1";
import NetflixMoneyHeist from "./Work/NetflixMoneyHeist";
import Gillette from "./Work/Gillette";
import Gillette1 from "./Work/Gillette1";
import Gillette2 from "./Work/Gillette2";
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
    // #1  Parle: Father's Day | Dil ka apna emergency number — DOP
    { component: <Parle />, category: "Consumer Brands" },
    // #2  Google Play: Squad Tournament — DOP
    { component: <GooglePlay />, category: "Technology" },
    // #3  Skinn by Titan: #NotesFromAPerfumer — Product DOP | 2nd Unit DOP
    { component: <Skinn1 />, category: "Consumer Brands" },
    // #4  Documentary: Plastic Fantastic — 2nd DOP
    { component: <PlasticFantastic />, category: "Consumer Brands" },
    // #5  Emperium Developers: Apnepan Wali Diwali — DOP
    { component: <Emperium />, category: "Infrastructure" },
    // #6  Tata Motors: Commercial Vehicles — 2nd Unit DOP
    { component: <TataCommercial />, category: "Automotive" },
    { component: <TataCommercial1 />, category: "Automotive" },
    { component: <TataCommercial2 />, category: "Automotive" },
    { component: <TataCommercial3 />, category: "Automotive" },
    // #7  Timex: Gujarat Titans — 2nd DOP
    { component: <Timex />, category: "Fashion" },
    // #8  Emperium Developers: Ek Bharosa — DOP
    { component: <Emperium1 />, category: "Infrastructure" },
    // #9  Disney+ Hotstar: Cuttputlli — Associate Cinematographer | 2nd DOP
    { component: <Hotstar />, category: "Consumer Brands" },
    // #10 DBS Bank India — Associate Cinematographer | 2nd Unit DOP
    { component: <DBSBank />, category: "Finance" },
    // #11 Prime Video: Mera Bhai — 2nd DOP
    { component: <MeraBhai />, category: "Consumer Brands" },
    // #12 Skinn Noura — 1st Assistant Cinematographer
    { component: <Skinn />, category: "Consumer Brands" },
    // #13 UP Warriorz: Official Anthem — 2nd Unit Camera
    { component: <UPWarriorz />, category: "Consumer Brands" },
    // #14 Wings x Shubman Gill — 1st Assistant Cinematographer
    { component: <Wings />, category: "Consumer Brands" },
    // #15 Online Manipal: #AzadiWaliDegree — 1st Assistant Cinematographer
    { component: <Manipal />, category: "Consumer Brands" },
    // #16 Truecaller: Never Have I Ever — 1st AC | 2nd Camera
    { component: <Truecaller />, category: "Technology" },
    // #17 Hipi India — 1st Assistant Cinematographer
    { component: <Hipi_India />, category: "Consumer Brands" },
    // #18 Prime Video: Coaching Then vs Now — 1st AC | 2nd Camera
    { component: <PrimeVideo />, category: "Consumer Brands" },
    { component: <PrimeVideo1 />, category: "Consumer Brands" },
    // #19 Domino's India: Friendship Day — 1st AC | 2nd Camera
    { component: <Dominos />, category: "Consumer Brands" },
    // #20 Edelweiss — 1st Assistant Cinematographer
    { component: <Edelweiss />, category: "Finance" },
    // #21 Licious: Sorry Dads — 1st Assistant Cinematographer
    { component: <Licious />, category: "Consumer Brands" },
    // #22 Tata Motors: BS6 Phase II — 1st AC | 2nd Unit DOP
    { component: <TataBS6 />, category: "Automotive" },
    // #23 Motilal Oswal — 1st Assistant Cinematographer
    { component: <MotilalOswal />, category: "Finance" },
    // #24 Yale: Smart Locks — 1st Assistant Cinematographer
    { component: <Yale />, category: "Technology" },
    { component: <Yale1 />, category: "Technology" },
    { component: <Yale2 />, category: "Technology" },
    { component: <Yale3 />, category: "Technology" },
    // #25 Mi: Diwali With Mi — 1st Assistant Cinematographer
    { component: <Mi />, category: "Technology" },
    { component: <Mi1 />, category: "Technology" },
    // #26 Tata Motors: Prima G.35K — 1st Assistant Cinematographer
    { component: <TataMotors />, category: "Automotive" },
    // #27 Tata AIG: Travel Insurance — 1st Assistant Cinematographer
    { component: <TataAIG />, category: "Automotive" },
    { component: <TataAIG1 />, category: "Automotive" },
    { component: <TataAIG2 />, category: "Automotive" },
    // #28 Spaces: Chief Style Officer 3.0 — Associate Cinematographer | 2nd Camera
    { component: <Spaces />, category: "Technology" },
    { component: <Spaces1 />, category: "Technology" },
    { component: <Spaces2 />, category: "Technology" },
    // #29 Netflix: Never Have I Ever 2 Debate — Camera Operator
    { component: <Netflix />, category: "Consumer Brands" },
    // #30 Netflix: Mohanrajs React to Never Have I Ever Season 2 — Camera Operator
    { component: <Netflix1 />, category: "Consumer Brands" },
    // #31 Netflix: Money Heist #IndiaBoleCiao — Camera Operator
    { component: <NetflixMoneyHeist />, category: "Consumer Brands" },
    // #32 Gillette X Valorant — 1st AC | 2nd Camera
    { component: <Gillette />, category: "Gaming" },
    { component: <Gillette1 />, category: "Gaming" },
    { component: <Gillette2 />, category: "Gaming" },
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
