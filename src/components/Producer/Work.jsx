import React, { useRef, useState, useEffect } from "react";

// Google Play assets
import GPImg1 from "../../assets/Home/Parle/GooglePlay/Img1.webp";
import GPImg2 from "../../assets/Home/Parle/GooglePlay/Img2.webp";
import GPImg3 from "../../assets/Home/Parle/GooglePlay/Img3.webp";
import GPImg4 from "../../assets/Home/Parle/GooglePlay/Img4.webp";
import GPImg5 from "../../assets/Home/Parle/GooglePlay/Img5.webp";
import GPImg6 from "../../assets/Home/Parle/GooglePlay/Img6.webp";
import GPImg7 from "../../assets/Home/Parle/GooglePlay/Img7.webp";
import GPImg8 from "../../assets/Home/Parle/GooglePlay/Img8.webp";
import GPImg9 from "../../assets/Home/Parle/GooglePlay/Img9.webp";
import GPImg10 from "../../assets/Home/Parle/GooglePlay/Img10.webp";
import GPImg11 from "../../assets/Home/Parle/GooglePlay/Img11.webp";
import GPImg12 from "../../assets/Home/Parle/GooglePlay/Img12.webp";
import GPImg13 from "../../assets/Home/Parle/GooglePlay/Img13.webp";
import GPImg14 from "../../assets/Home/Parle/GooglePlay/Img14.webp";
import GPImg15 from "../../assets/Home/Parle/GooglePlay/Img15.webp";
import GPImg16 from "../../assets/Home/Parle/GooglePlay/Img16.webp";
import GPImg17 from "../../assets/Home/Parle/GooglePlay/Img17.webp";
import GPImg18 from "../../assets/Home/Parle/GooglePlay/Img18.webp";
import GPImg19 from "../../assets/Home/Parle/GooglePlay/Img19.webp";
import GPImg20 from "../../assets/Home/Parle/GooglePlay/Img20.webp";
import GPImg21 from "../../assets/Home/Parle/GooglePlay/Img21.webp";
import GPImg22 from "../../assets/Home/Parle/GooglePlay/Img22.webp";

// Lipton assets
import LiptonMain from "../../assets/Home/Parle/Lipton/Main.webp";
import LImg1 from "../../assets/Home/Parle/Lipton/Img1.webp";
import LImg2 from "../../assets/Home/Parle/Lipton/Img2.webp";
import LImg3 from "../../assets/Home/Parle/Lipton/Img3.webp";
import LImg4 from "../../assets/Home/Parle/Lipton/Img4.webp";
import LImg5 from "../../assets/Home/Parle/Lipton/Img5.webp";
import LImg6 from "../../assets/Home/Parle/Lipton/Img6.webp";
import LImg7 from "../../assets/Home/Parle/Lipton/Img7.webp";

// Pukka assets
import PukkaMain from "../../assets/Home/Parle/Pukka/Main.webp";
import PImg1 from "../../assets/Home/Parle/Pukka/Img1.webp";
import PImg2 from "../../assets/Home/Parle/Pukka/Img2.webp";
import PImg3 from "../../assets/Home/Parle/Pukka/Img3.webp";
import PImg4 from "../../assets/Home/Parle/Pukka/Img4.webp";
import PImg4_PNG from "../../assets/Home/Parle/Pukka/Img4.webp";
import PImg5 from "../../assets/Home/Parle/Pukka/Img5.webp";
import PImg6 from "../../assets/Home/Parle/Pukka/Img6.webp";
import PImg7 from "../../assets/Home/Parle/Pukka/Img7.webp";
import PImg10 from "../../assets/Home/Parle/Pukka/Img10.webp";
import PImg11 from "../../assets/Home/Parle/Pukka/Img11.webp";
import PImg12 from "../../assets/Home/Parle/Pukka/Img12.webp";
import PImg13 from "../../assets/Home/Parle/Pukka/Img13.webp";

// Mahindra assets
import MahindraMain from "../../assets/Home/Parle/Mahindra/Main.webp";
import MImg2 from "../../assets/Home/Parle/Mahindra/Img2.webp";
import MImg3 from "../../assets/Home/Parle/Mahindra/Img3.webp";
import MImg4 from "../../assets/Home/Parle/Mahindra/Img4.webp";
import MImg5 from "../../assets/Home/Parle/Mahindra/Img5.webp";
import MImg6 from "../../assets/Home/Parle/Mahindra/Img6.webp";
import MImg7 from "../../assets/Home/Parle/Mahindra/Img7.webp";
import MImg8 from "../../assets/Home/Parle/Mahindra/Img8.webp";
import MImg9 from "../../assets/Home/Parle/Mahindra/Img9.webp";
import MImg10 from "../../assets/Home/Parle/Mahindra/Img10.webp";
import MImg11 from "../../assets/Home/Parle/Mahindra/Img11.webp";
import MImg12 from "../../assets/Home/Parle/Mahindra/Img12.webp";
import MImg13 from "../../assets/Home/Parle/Mahindra/Img13.webp";
import MImg14 from "../../assets/Home/Parle/Mahindra/Img14.webp";
import MImg15 from "../../assets/Home/Parle/Mahindra/Img15.webp";
import MImg16 from "../../assets/Home/Parle/Mahindra/Img16.webp";
import MImg17 from "../../assets/Home/Parle/Mahindra/Img17.webp";
import MImg18 from "../../assets/Home/Parle/Mahindra/Img18.webp";
import MImg19 from "../../assets/Home/Parle/Mahindra/Img19.webp";
import MImg20 from "../../assets/Home/Parle/Mahindra/Img20.webp";
import MImg21 from "../../assets/Home/Parle/Mahindra/Img21.webp";
import MImg22 from "../../assets/Home/Parle/Mahindra/Img22.webp";
import MImg23 from "../../assets/Home/Parle/Mahindra/Img23.webp";
import MImg24 from "../../assets/Home/Parle/Mahindra/Img24.webp";

// Father's Day assets
import FDImg1 from "../../assets/Home/Parle/Father'sDay/Img1.webp";
import FDImg2 from "../../assets/Home/Parle/Father'sDay/Img2.webp";
import FDImg3 from "../../assets/Home/Parle/Father'sDay/Img3.webp";
import FDImg4 from "../../assets/Home/Parle/Father'sDay/Img4.webp";
import FDImg5 from "../../assets/Home/Parle/Father'sDay/Img5.webp";
import FDImg6 from "../../assets/Home/Parle/Father'sDay/Img6.webp";
import FDImg7 from "../../assets/Home/Parle/Father'sDay/Img7.webp";
import FDImg8 from "../../assets/Home/Parle/Father'sDay/Img8.webp";
import FDImg9 from "../../assets/Home/Parle/Father'sDay/Img9.webp";
import FDImg10 from "../../assets/Home/Parle/Father'sDay/Img10.webp";
import FDImg11 from "../../assets/Home/Parle/Father'sDay/Img11.webp";
import FDImg12 from "../../assets/Home/Parle/Father'sDay/Img12.webp";
import FDImg13 from "../../assets/Home/Parle/Father'sDay/Img13.webp";
import FDImg14 from "../../assets/Home/Parle/Father'sDay/Img14.webp";
import FDImg15 from "../../assets/Home/Parle/Father'sDay/Img15.webp";
import FDImg16 from "../../assets/Home/Parle/Father'sDay/Img16.webp";
import FDImg17 from "../../assets/Home/Parle/Father'sDay/Img17.webp";
import FDImg18 from "../../assets/Home/Parle/Father'sDay/Img18.webp";
import FDImg19 from "../../assets/Home/Parle/Father'sDay/Img19.webp";
import FDImg20 from "../../assets/Home/Parle/Father'sDay/Img20.webp";
import FDImg21 from "../../assets/Home/Parle/Father'sDay/Img21.webp";
import FDImg22 from "../../assets/Home/Parle/Father'sDay/Img22.webp";

// Holi assets
import HImg1 from "../../assets/Home/Parle/Holi/Img1.webp";
import HImg2 from "../../assets/Home/Parle/Holi/Img2.webp";
import HImg3 from "../../assets/Home/Parle/Holi/Img3.webp";
import HImg4 from "../../assets/Home/Parle/Holi/Img4.webp";
import HImg5 from "../../assets/Home/Parle/Holi/Img5.webp";
import HImg6 from "../../assets/Home/Parle/Holi/Img6.webp";
import HImg7 from "../../assets/Home/Parle/Holi/Img7.webp";
import HImg8 from "../../assets/Home/Parle/Holi/Img8.webp";
import HImg9 from "../../assets/Home/Parle/Holi/Img9.webp";
import HImg10 from "../../assets/Home/Parle/Holi/Img10.webp";
import HImg11 from "../../assets/Home/Parle/Holi/Img11.webp";
import HImg12 from "../../assets/Home/Parle/Holi/Img12.webp";
import HImg13 from "../../assets/Home/Parle/Holi/Img13.webp";
import HImg14 from "../../assets/Home/Parle/Holi/Img14.webp";
import HImg15 from "../../assets/Home/Parle/Holi/Img15.webp";

// Ciena assets
import CImg1 from "../../assets/Home/Parle/Ciena/Img1.webp";
import CImg2 from "../../assets/Home/Parle/Ciena/Img2.webp";
import CImg3 from "../../assets/Home/Parle/Ciena/Img3.webp";
import CImg4 from "../../assets/Home/Parle/Ciena/Img4.webp";
import CImg5 from "../../assets/Home/Parle/Ciena/Img5.webp";
import CImg6 from "../../assets/Home/Parle/Ciena/Img6.webp";
import CImg7 from "../../assets/Home/Parle/Ciena/Img7.webp";
import CImg8 from "../../assets/Home/Parle/Ciena/Img8.webp";
import CImg9 from "../../assets/Home/Parle/Ciena/Img9.webp";
import CImg10 from "../../assets/Home/Parle/Ciena/Img10.webp";
import CImg11 from "../../assets/Home/Parle/Ciena/Img11.webp";
import CImg12 from "../../assets/Home/Parle/Ciena/Img12.webp";
import CImg13 from "../../assets/Home/Parle/Ciena/Img13.webp";
import CImg14 from "../../assets/Home/Parle/Ciena/Img14.webp";
import CImg15 from "../../assets/Home/Parle/Ciena/Img15.webp";
import CImg16 from "../../assets/Home/Parle/Ciena/Img16.webp";

// Diwali 01 assets for slide 1
import Img1 from "../../assets/Home/Parle/Diwali 01/Img1.webp";
import Img2 from "../../assets/Home/Parle/Diwali 01/Img2.webp";
import Img3 from "../../assets/Home/Parle/Diwali 01/Img3.webp";
import Img4 from "../../assets/Home/Parle/Diwali 01/Img4.webp";
import Img5 from "../../assets/Home/Parle/Diwali 01/Img5.webp";
import Img6 from "../../assets/Home/Parle/Diwali 01/Img6.webp";
import Img7 from "../../assets/Home/Parle/Diwali 01/Img7.webp";
import Img8 from "../../assets/Home/Parle/Diwali 01/Img8.webp";
import Img9 from "../../assets/Home/Parle/Diwali 01/Img9.webp";
import Img10 from "../../assets/Home/Parle/Diwali 01/Img10.webp";
import Img11 from "../../assets/Home/Parle/Diwali 01/Img11.webp";
import Img12 from "../../assets/Home/Parle/Diwali 01/Img12.webp";
import Img13 from "../../assets/Home/Parle/Diwali 01/Img13.webp";
import Img14 from "../../assets/Home/Parle/Diwali 01/Img14.webp";
import Img15 from "../../assets/Home/Parle/Diwali 01/Img15.webp";
import Img16 from "../../assets/Home/Parle/Diwali 01/Img16.webp";
import Img17 from "../../assets/Home/Parle/Diwali 01/Img17.webp";
import Img18 from "../../assets/Home/Parle/Diwali 01/Img18.webp";
import Img19 from "../../assets/Home/Parle/Diwali 01/Img19.webp";

// Diwali 02 assets
import D2Img1 from "../../assets/Home/Parle/Diwali 02/Img1.webp";
import D2Img2 from "../../assets/Home/Parle/Diwali 02/Img2.webp";
import D2Img3 from "../../assets/Home/Parle/Diwali 02/Img3.webp";
import D2Img4 from "../../assets/Home/Parle/Diwali 02/Img4.webp";
import D2Img5 from "../../assets/Home/Parle/Diwali 02/Img5.webp";
import D2Img6 from "../../assets/Home/Parle/Diwali 02/Img6.webp";
import D2Img7 from "../../assets/Home/Parle/Diwali 02/Img7.webp";
import D2Img8 from "../../assets/Home/Parle/Diwali 02/Img8.webp";
import D2Img9 from "../../assets/Home/Parle/Diwali 02/Img9.webp";
import D2Img10 from "../../assets/Home/Parle/Diwali 02/Img10.webp";
import D2Img11 from "../../assets/Home/Parle/Diwali 02/Img11.webp";
import D2Img12 from "../../assets/Home/Parle/Diwali 02/Img12.webp";
import D2Img13 from "../../assets/Home/Parle/Diwali 02/Img13.webp";
import D2Img14 from "../../assets/Home/Parle/Diwali 02/Img14.webp";
import D2Img15 from "../../assets/Home/Parle/Diwali 02/Img15.webp";
import D2Img16 from "../../assets/Home/Parle/Diwali 02/Img16.webp";
import D2Img17 from "../../assets/Home/Parle/Diwali 02/Img17.webp";

// Diwali 03 assets
import D3Img1 from "../../assets/Home/Parle/Diwali 03/Img1.webp";
import D3Img2 from "../../assets/Home/Parle/Diwali 03/Img2.webp";
import D3Img3 from "../../assets/Home/Parle/Diwali 03/Img3.webp";
import D3Img4 from "../../assets/Home/Parle/Diwali 03/Img4.webp";
import D3Img5 from "../../assets/Home/Parle/Diwali 03/Img5.webp";
import D3Img6 from "../../assets/Home/Parle/Diwali 03/Img6.webp";
import D3Img7 from "../../assets/Home/Parle/Diwali 03/Img7.webp";
import D3Img8 from "../../assets/Home/Parle/Diwali 03/Img8.webp";
import D3Img9 from "../../assets/Home/Parle/Diwali 03/Img9.webp";
import D3Img10 from "../../assets/Home/Parle/Diwali 03/Img10.webp";
import D3Img11 from "../../assets/Home/Parle/Diwali 03/Img11.webp";
import D3Img12 from "../../assets/Home/Parle/Diwali 03/Img12.webp";
import D3Img13 from "../../assets/Home/Parle/Diwali 03/Img13.webp";
import D3Img14 from "../../assets/Home/Parle/Diwali 03/Img14.webp";
import D3Img15 from "../../assets/Home/Parle/Diwali 03/Img15.webp";

// Diwali 04 assets
import D4Img1 from "../../assets/Home/Parle/Diwali 04/Img1.webp";
import D4Img2 from "../../assets/Home/Parle/Diwali 04/Img2.webp";
import D4Img3 from "../../assets/Home/Parle/Diwali 04/Img3.webp";
import D4Img4 from "../../assets/Home/Parle/Diwali 04/Img4.webp";
import D4Img5 from "../../assets/Home/Parle/Diwali 04/Img5.webp";
import D4Img6 from "../../assets/Home/Parle/Diwali 04/Img6.webp";
import D4Img7 from "../../assets/Home/Parle/Diwali 04/Img7.webp";
import D4Img8 from "../../assets/Home/Parle/Diwali 04/Img8.webp";
import D4Img9 from "../../assets/Home/Parle/Diwali 04/Img9.webp";

const getRandomInterval = () => Math.floor(Math.random() * 5000) + 8000;

function CrossfadeImages({ imagesSubset, startDelay = 0 }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState(() => {
    return Array.from({ length: imagesSubset.length }, (_, i) => i);
  });
  const [indices, setIndices] = useState({
    current: 0,
    next: imagesSubset.length > 1 ? 1 : 0,
  });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const arr = Array.from({ length: imagesSubset.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const timer = setTimeout(() => {
      setShuffledIndices(arr);
      setIndices({ current: 0, next: arr.length > 1 ? 1 : 0 });
    }, 0);
    return () => clearTimeout(timer);
  }, [imagesSubset]);

  useEffect(() => {
    if (shuffledIndices.length <= 1) return;

    const cycle = () => {
      setIsTransitioning(true);
      timeoutRef.current = setTimeout(() => {
        setIndices((prev) => ({
          current: prev.next,
          next: (prev.next + 1) % shuffledIndices.length,
        }));
        setIsTransitioning(false);
        timeoutRef.current = setTimeout(cycle, getRandomInterval());
      }, 3000);
    };

    timeoutRef.current = setTimeout(cycle, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [shuffledIndices.length, startDelay]);

  if (imagesSubset.length === 0) return null;

  if (imagesSubset.length === 1) {
    return (
      <div className="crossfade-container">
        <img src={imagesSubset[0]} alt="Campaign gallery thumbnail" className="crossfade-img current" />
      </div>
    );
  }

  return (
    <div className="crossfade-container">
      <img
        src={imagesSubset[shuffledIndices[indices.current]]}
        alt="Current campaign gallery image"
        className={`crossfade-img current ${isTransitioning ? "fading" : ""}`}
      />
      <img
        src={imagesSubset[shuffledIndices[indices.next]]}
        alt="Next campaign gallery image"
        className={`crossfade-img next ${isTransitioning ? "visible" : ""}`}
      />
    </div>
  );
}

function Work() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const campaigns = [
    {
      prefix: "Parle ",
      highlight: (
        <>
          Father's Day <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtube.com/shorts/Txqkm2Ycsxg?si=evp6iyjzw4X4FqLN",
      elements: [
        { type: "images", data: [FDImg1, FDImg2, FDImg3, FDImg4, FDImg5] },
        { type: "youtube", data: "AXQ6-jh5VYE" },
        { type: "images", data: [FDImg6, FDImg7, FDImg8, FDImg9, FDImg10] },
        {
          type: "images",
          data: [FDImg11, FDImg12, FDImg13, FDImg14, FDImg15, FDImg16],
        },
        {
          type: "images",
          data: [FDImg17, FDImg18, FDImg19, FDImg20, FDImg21, FDImg22],
        },
      ],
    },
    {
      prefix: "Parle ",
      highlight: (
        <>
          Holi <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtube.com/shorts/ETx79kHuM7c?si=amf4s4dlg44wIDLS",
      elements: [
        { type: "images", data: [HImg1, HImg2, HImg3, HImg4] },
        { type: "youtube", data: "GjLc2w6TkfA" },
        { type: "images", data: [HImg5, HImg6, HImg7, HImg8] },
        { type: "images", data: [HImg9, HImg10, HImg11, HImg12] },
        { type: "images", data: [HImg13, HImg14, HImg15] },
      ],
    },
    {
      prefix: "Parle ",
      highlight: (
        <>
          Diwali <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtube.com/shorts/82cSfpGoh9c?si=uzDQjUizFls2I0Qt",
      elements: [
        { type: "images", data: [Img1, Img2, Img3, Img4, Img5] },
        { type: "youtube", data: "yqZdK8_fR_k" },
        { type: "images", data: [Img6, Img7, Img8, Img9, Img10] },
        { type: "images", data: [Img11, Img12, Img13, Img14, Img15] },
        { type: "images", data: [Img16, Img17, Img18, Img19] },
      ],
    },
    {
      prefix: "Parle ",
      highlight: (
        <>
          Diwali <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtube.com/shorts/0bQHFoXyHjA?ssiSztrawIWjEDFHstW",
      elements: [
        { type: "images", data: [D2Img1, D2Img2, D2Img3, D2Img4, D2Img5] },
        { type: "youtube", data: "rKWm1s4gnFg" },
        { type: "images", data: [D2Img6, D2Img7, D2Img8, D2Img9, D2Img10] },
        { type: "images", data: [D2Img11, D2Img12, D2Img13, D2Img14, D2Img15] },
        { type: "images", data: [D2Img16, D2Img17] },
      ],
    },
    {
      prefix: "Parle ",
      highlight: (
        <>
          Diwali <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtube.com/shorts/FwJs7c4K0WI?si=l3AFOGo1vIk1lUL7",
      elements: [
        { type: "images", data: [D3Img1, D3Img2, D3Img3, D3Img4, D3Img5] },
        { type: "youtube", data: "yY7_3HW50_g" },
        { type: "images", data: [D3Img6, D3Img7, D3Img8, D3Img9, D3Img10] },
        { type: "images", data: [D3Img11, D3Img12, D3Img13, D3Img14, D3Img15] },
        { type: "images", data: [D3Img1, D3Img3, D3Img5] },
      ],
    },
    {
      prefix: "Parle ",
      highlight: (
        <>
          Diwali <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtube.com/shorts/3E-zedFPD3c?si=ivMYhazET39krC2c",
      elements: [
        { type: "images", data: [D4Img1, D4Img2, D4Img3] },
        { type: "youtube", data: "Uz8RidY9S2s" },
        { type: "images", data: [D4Img4, D4Img5, D4Img6] },
        { type: "images", data: [D4Img7, D4Img8, D4Img9] },
        { type: "images", data: [D4Img1, D4Img4, D4Img7] },
      ],
    },
    {
      prefix: "Ciena ",
      highlight: (
        <>
          Event
          <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtu.be/i7lZxjti8Dk",
      elements: [
        { type: "images", data: [CImg1, CImg2, CImg3, CImg4] },
        { type: "youtube", data: "i7lZxjti8Dk" },
        { type: "images", data: [CImg5, CImg6, CImg7, CImg8] },
        { type: "images", data: [CImg9, CImg10, CImg11, CImg12] },
        { type: "images", data: [CImg13, CImg14, CImg15, CImg16] },
      ],
    },
    {
      prefix: "Lipton ",
      highlight: (
        <>
          Product Shoot <br className="heading-br-desktop" />
        </>
      ),
      elements: [
        { type: "images", data: [LImg1, LImg2] },
        { type: "image", data: LiptonMain },
        { type: "images", data: [LImg3, LImg4] },
        { type: "images", data: [LImg5, LImg6] },
        { type: "images", data: [LImg7] },
      ],
    },
    {
      prefix: "Pukka ",
      highlight: (
        <>
          Product Shoot <br className="heading-br-desktop" />
        </>
      ),
      elements: [
        { type: "images", data: [PImg1, PImg2, PImg3] },
        { type: "image", data: PukkaMain },
        { type: "images", data: [PImg4, PImg4_PNG, PImg5] },
        { type: "images", data: [PImg6, PImg7, PImg10] },
        { type: "images", data: [PImg11, PImg12, PImg13] },
      ],
    },
    {
      prefix: "Mahindra ",
      highlight: (
        <>
          Mera Tractor Meri Kahani <br className="heading-br-desktop" />
        </>
      ),
      elements: [
        { type: "images", data: [MImg2, MImg3, MImg4, MImg5, MImg6, MImg7] },
        { type: "image", data: MahindraMain },
        {
          type: "images",
          data: [MImg8, MImg9, MImg10, MImg11, MImg12, MImg13],
        },
        {
          type: "images",
          data: [MImg14, MImg15, MImg16, MImg17, MImg18, MImg19],
        },
        { type: "images", data: [MImg20, MImg21, MImg22, MImg23, MImg24] },
      ],
    },
    {
      prefix: "Google Play | ",
      highlight: (
        <>
          Play Squad Tournament <br className="heading-br-desktop" />
        </>
      ),
      link: "https://youtu.be/hDcLE53AexU?si=UArMyAZaSRVo-2iX",
      elements: [
        { type: "images", data: [GPImg1, GPImg2, GPImg3, GPImg4, GPImg5] },
        { type: "youtube", data: "hDcLE53AexU" },
        { type: "images", data: [GPImg6, GPImg7, GPImg8, GPImg9, GPImg10] },
        {
          type: "images",
          data: [GPImg11, GPImg12, GPImg13, GPImg14, GPImg15, GPImg16],
        },
        {
          type: "images",
          data: [GPImg17, GPImg18, GPImg19, GPImg20, GPImg21, GPImg22],
        },
      ],
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    setContainerWidth(containerRef.current.offsetWidth);

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👉 Move Next
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % campaigns.length);
  };

  // 👉 Move Prev
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + campaigns.length) % campaigns.length);
  };

  const translateX = -currentSlide * containerWidth;

  return (
    <section className="home-parle-wrapper">
      <div className="home-parle">
        <div className="template-heading">
          <h3 className="h3-semibold">
            {campaigns[currentSlide].prefix}
            <span>{campaigns[currentSlide].highlight}</span>
          </h3>
        </div>

        <div className="home-parle-container" ref={containerRef}>
          <div
            className="home-parle-slide"
            ref={slideRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.4s ease",
              display: "flex",
            }}
          >
            {campaigns.map((campaign, i) => (
              <div key={i} className="cinematography-work-grid other-work-grid">
                {campaign.elements.map((el, j) => {
                  const isCenter = j === 1;
                  const hasLink = !!campaign.link;

                  const handleClick = () => {
                    if (isCenter && hasLink) {
                      window.open(campaign.link, "_blank", "noopener,noreferrer");
                    }
                  };

                  const elementStyle = isCenter && hasLink ? { cursor: "pointer" } : {};

                  if (el.type === "video") {
                    return (
                      <article
                        className="cinematography-work-set"
                        key={j}
                        onClick={handleClick}
                        style={elementStyle}
                      >
                        <video src={el.data} loop muted playsInline controls />
                      </article>
                    );
                  } else if (el.type === "youtube") {
                    return (
                      <article
                        className="cinematography-work-set"
                        key={j}
                        onClick={handleClick}
                        style={elementStyle}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${el.data}?autoplay=0&loop=1&playlist=${el.data}&controls=1&rel=0`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </article>
                    );
                  } else if (el.type === "image") {
                    return (
                      <article
                        className="cinematography-work-set"
                        key={j}
                        onClick={handleClick}
                        style={elementStyle}
                      >
                        <img src={el.data} alt="Campaign visual" />
                      </article>
                    );
                  } else {
                    return (
                      <article className="cinematography-work-set" key={j}>
                        <CrossfadeImages
                          imagesSubset={el.data}
                          startDelay={j * 2000}
                        />
                      </article>
                    );
                  }
                })}
              </div>
            ))}
          </div>
          <div className="home-brands-buttons">
            <button
              className="home-brands-button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              style={{
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ transform: "rotate(180deg)" }}
              >
                <mask
                  id="mask0_252_2764"
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
                <g mask="url(#mask0_252_2764)">
                  <path
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </button>
            <button
              className="home-brands-button"
              onClick={handleNext}
              aria-label="Next Slide"
              style={{
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_252_2764"
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
                <g mask="url(#mask0_252_2764)">
                  <path
                    d="M16.175 13L10.575 18.6L12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175Z"
                    fill="#1B1B1B"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
