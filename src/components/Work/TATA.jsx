import React from "react";
import Video2 from "../../assets/Cinematography/Work/Tata/Introducing the Tata Motors Prima G.35K (Jan'23).mp4";
import Video3 from "../../assets/Cinematography/Work/Tata/Tata AIG _ Travel Insurance _ Kuch Bhi Ho Sakta Hai _ Argentina.mp4";
import Video4 from "../../assets/Cinematography/Work/Tata/Tata AIG _ Travel Insurance _ Kuch Bhi Ho Sakta Hai _ NYC.mp4";
import Video5 from "../../assets/Cinematography/Work/Tata/Tata AIG _ Travel Insurance _ Kuch Bhi Ho Sakta Hai _ Vietnam.mp4";
import Video6 from "../../assets/Cinematography/Work/Tata/Tata Motors Commercial Vehicles _ BS6 Phase 2 Ready _ DeshKeTrucks.mp4";

function TATA() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>TATA</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum
          diam hac consectetur eget.
        </p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <video src={Video2} autoPlay loop muted playsInline />
        </article>
        <article className="cinematography-work-set">
          <video src={Video3} autoPlay loop muted playsInline />
        </article>
        <article className="cinematography-work-set">
          <video src={Video4} autoPlay loop muted playsInline />
        </article>
        <article className="cinematography-work-set">
          <video src={Video5} autoPlay loop muted playsInline />
        </article>
        <article className="cinematography-work-set">
          <video src={Video6} autoPlay loop muted playsInline />
        </article>
      </div>
    </div>
  );
}

export default TATA;
