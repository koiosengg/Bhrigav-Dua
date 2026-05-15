import React from "react";
import UPWarriorzVideo from "../../assets/Cinematography/Work/UPWarriorz/UPWarriorz.mp4";
import Image1 from "../../assets/Cinematography/Work/Image 1.png";
import Image3 from "../../assets/Cinematography/Work/Image 3.png";
import Image4 from "../../assets/Cinematography/Work/Image 4.png";
import Image5 from "../../assets/Cinematography/Work/Image 5.png";

function UPWarriorz() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>UP Warriorz Official Anthem Launch | #WPL 2023</h2>
        <p>1st Assistant Cinematographer / 2nd Unit Camera (Jhansi)</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <img src={Image1} alt="Work Image" />
        </article>
        <article className="cinematography-work-set">
          <a
            href="https://www.youtube.com/watch?v=X8dsDrAEAkY"
            target="_blank"
            rel="noopener noreferrer"
            className="work-set-video"
            aria-label="Watch on YouTube"
          >
            <video src={UPWarriorzVideo} autoPlay muted loop playsInline />
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

export default UPWarriorz;
