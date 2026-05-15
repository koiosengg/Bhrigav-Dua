import React from "react";
import Image1 from "../../assets/Cinematography/Work/Image 1.png";
import Image3 from "../../assets/Cinematography/Work/Image 3.png";
import Image4 from "../../assets/Cinematography/Work/Image 4.png";
import Image5 from "../../assets/Cinematography/Work/Image 5.png";
import MotilalOswalVideo from "../../assets/Cinematography/Work/MotilalOswal/MotilalOswal1.mp4";

function MotilalOswal() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>
          Investing Without Research is like Driving Blindfolded - Motilal Oswal
        </h2>
        <p>1st Assistant Cinematographer</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <img src={Image1} alt="Work Image" />
        </article>
        <article className="cinematography-work-set">
          <a
            href="https://www.youtube.com/watch?v=Nuvw9qYfvH4"
            target="_blank"
            rel="noopener noreferrer"
            className="work-set-video"
            aria-label="Watch on YouTube"
          >
            <video src={MotilalOswalVideo} autoPlay muted loop playsInline />
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

export default MotilalOswal;
