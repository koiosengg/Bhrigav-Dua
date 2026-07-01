import React, { useEffect, useRef } from "react";
import Testimony from "../Cinematography/Testimony";

function Last() {
  const testimonyRef = useRef(null);



  return (
    <section className="cinematography-last" ref={testimonyRef}>
      <Testimony />
    </section>
  );
}

export default Last;
