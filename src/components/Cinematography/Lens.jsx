import React, { useRef, useState, useEffect } from "react";
import Video1 from "../../assets/Cinematography/Lens/AzadiWaliDegree  Online Manipal (Commercial - Aug’22).mp4";
import Video2 from "../../assets/Cinematography/Lens/Akshay ka naya cop avatar  Cuttputlli  DisneyPlus Hotstar (Promo - Aug’22).mp4";
import Video3 from "../../assets/Cinematography/Lens/Domino’s TheLastSlice _ Friendship Day.mp4";
import Video4 from "../../assets/Cinematography/Lens/टाटा इंट्रा पिकअप _ समझदारी का नाम इंट्रा _ सब कुछ उठाये, हर दिन जिताये _ Hindi _ 50 Sec.mp4";

function Lens() {
  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#f4f0e9";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-lens home-reality" ref={testimonyRef}>
        <div className="template-heading">
          <h3 className="h3-semibold">
            Works Through the <br /> <span> Lens</span>
          </h3>
          <p className="m-regular">
            Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum
            diam hac consectetur eget.
          </p>
        </div>
        <div className="cinematography-lens-container">
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <video src={Video1} autoPlay loop muted playsInline />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <video src={Video2} autoPlay loop muted playsInline />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <video src={Video3} autoPlay loop muted playsInline />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <video src={Video4} autoPlay loop muted playsInline />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Lens;
