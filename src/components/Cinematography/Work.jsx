import React from "react";
import { Link } from "react-router-dom";

function Work() {
  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-work home-reality">
        <div className="template-heading">
          <h3 className="h3-semibold">
            Featured
            <br />
            <span> Work</span>
          </h3>
        </div>
        <div className="cinematography-work-container">
          <div className="cinematography-work-grid">
            <article className="cinematography-work-set">
              <iframe
                src="https://www.youtube.com/embed/AXQ6-jh5VYE?controls=1&rel=0"
                title="Parle: Father's Day | Dil ka apna emergency number"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </article>
            <article className="cinematography-work-set">
              <iframe
                src="https://www.youtube.com/embed/SkIUOVJSMpc?controls=1&rel=0"
                title="DBS Bank India: The Right Choice Is Right In Front Of You"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </article>
            <article className="cinematography-work-set">
              <iframe
                src="https://www.youtube.com/embed/pxSb_TLgCDo?controls=1&rel=0"
                title="Tata Motors: Commercial Vehicles"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </article>
            <article className="cinematography-work-set">
              <iframe
                src="https://www.youtube.com/embed/vkpnVTQhRyU?controls=1&rel=0"
                title="Prime Video: Web series ‘Mera Bhai’ trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </article>
            <article className="cinematography-work-set">
              <iframe
                src="https://www.youtube.com/embed/X8dsDrAEAkY?controls=1&rel=0"
                title="UP Warriorz: Official Anthem Launch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </article>
          </div>
          <Link to="/cinematography/work" className="tertiory-button">
            <p>Explore Projects</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_591_6755"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect
                  width="24"
                  height="24"
                  transform="matrix(-1 0 0 1 24 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_591_6755)">
                <path
                  d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                  fill="#1B1B1B"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Work;
