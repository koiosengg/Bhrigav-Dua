import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Cinematography/Work/Image 1.png";
import Image2 from "../../assets/Cinematography/Work/Image 2.png";
import Image3 from "../../assets/Cinematography/Work/Image 3.png";
import Image4 from "../../assets/Cinematography/Work/Image 4.png";
import Image5 from "../../assets/Cinematography/Work/Image 5.png";

function Work() {
  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-work home-reality">
        <div className="template-heading">
          <h3 className="h3-semibold">
            My Featured
            <br />
            <span> Work</span>
          </h3>
        </div>
        <div className="cinematography-work-container">
          <div className="cinematography-work-grid">
            <article className="cinematography-work-set">
              <img src={Image1} alt="Work Image" />
            </article>
            <article className="cinematography-work-set">
              <img src={Image2} alt="Work Image" />
            </article>
            <article className="cinematography-work-set">
              <img src={Image3} alt="Work Image" />
            </article>
            <article className="cinematography-work-set">
              <img src={Image4} alt="Work Image" />
            </article>
            <article className="cinematography-work-set">
              <img src={Image5} alt="Work Image" />
            </article>
          </div>
          <p className="cinematography-work-container-para">
            Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum
            diam hac consectetur eget. Lorem ipsum dolor sit amet consectetur.
            Maecenas at quis vestibulum diam hac consectetur eget.{" "}
          </p>
          <Link to="/cinematography/work" className="tertiory-button">
            <p>More Featured Works</p>
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
