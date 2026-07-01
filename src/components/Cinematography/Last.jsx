import React, { useEffect, useRef } from "react";
import Testimony from "./Testimony";
import Snapshots from "./Snapshots";

function Last() {
  const testimonyRef = useRef(null);



  return (
    <section className="cinematography-last" ref={testimonyRef}>
      <Snapshots />
      <Testimony />
    </section>
  );
}

export default Last;
