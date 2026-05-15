import React from "react";
import Image1 from "../../assets/Cinematography/Work/Image 1.png";
import Image3 from "../../assets/Cinematography/Work/Image 3.png";
import Image4 from "../../assets/Cinematography/Work/Image 4.png";
import Image5 from "../../assets/Cinematography/Work/Image 5.png";
import PrimeVideoClip from "../../assets/Cinematography/Work/PrimeVideo/Coaching1.mp4";

function PrimeVideo() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>Coaching Then Vs. Now Ft. @Chetan Bhagat | Prime Video</h2>
        <p>1st Assistant Cinematographer | 2nd Camera</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <img src={Image1} alt="Work Image" />
        </article>
        <article className="cinematography-work-set">
          <a
            href="https://www.youtube.com/watch?v=dfTTphws0GI"
            target="_blank"
            rel="noopener noreferrer"
            className="work-set-video"
            aria-label="Watch on YouTube"
          >
            <video src={PrimeVideoClip} autoPlay muted loop playsInline />
          </a>
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
    </div>
  );
}

export default PrimeVideo;
