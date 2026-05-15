import React from "react";
import Image1 from "../../assets/Cinematography/Work/Image 1.png";
import Image3 from "../../assets/Cinematography/Work/Image 3.png";
import Image4 from "../../assets/Cinematography/Work/Image 4.png";
import Image5 from "../../assets/Cinematography/Work/Image 5.png";
import TataAIGVideo from "../../assets/Cinematography/Work/TataAIG/TataAIG1.mp4";

function TataAIG() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>Tata AIG | Travel Insurance | Kuch Bhi Ho Sakta Hai</h2>
        <p>1st Assistant Cinematographer</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <img src={Image1} alt="Work Image" />
        </article>
        <article className="cinematography-work-set">
          <a
            href="https://www.youtube.com/watch?v=k-KHUz62Onw"
            target="_blank"
            rel="noopener noreferrer"
            className="work-set-video"
            aria-label="Watch on YouTube"
          >
            <video src={TataAIGVideo} autoPlay muted loop playsInline />
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

export default TataAIG;
