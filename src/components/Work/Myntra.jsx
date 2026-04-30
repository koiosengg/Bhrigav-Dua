import React from "react";
import Image1 from "../../assets/Cinematography/Work/Image 1.png";
import Image2 from "../../assets/Cinematography/Work/Image 2.png";
import Image3 from "../../assets/Cinematography/Work/Image 3.png";
import Image4 from "../../assets/Cinematography/Work/Image 4.png";
import Image5 from "../../assets/Cinematography/Work/Image 5.png";

function Myntra() {
  return (
    <div className="work-set">
      <div className="work-set-heading">
        <h2>Myntra</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum diam hac consectetur eget.</p>
      </div>

      <div className="cinematography-work-grid other-work-grid">
        <article className="cinematography-work-set">
          <img src={Image1} alt="Myntra Work Image" />
        </article>
        <article className="cinematography-work-set">
          <img src={Image2} alt="Myntra Work Image" />
        </article>
        <article className="cinematography-work-set">
          <img src={Image3} alt="Myntra Work Image" />
        </article>
        <article className="cinematography-work-set">
          <img src={Image4} alt="Myntra Work Image" />
        </article>
        <article className="cinematography-work-set">
          <img src={Image5} alt="Myntra Work Image" />
        </article>
      </div>
    </div>
  );
}

export default Myntra;