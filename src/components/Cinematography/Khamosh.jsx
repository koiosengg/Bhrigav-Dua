import React, { useState, useEffect } from "react";
import Image1 from "../../assets/Cinematography/Khamosh/Image 1.png";
import Image2 from "../../assets/Cinematography/Khamosh/Image 2.png";
import Image3 from "../../assets/Cinematography/Khamosh/Image 3.png";
import Image4 from "../../assets/Cinematography/Khamosh/Image 4.png";
import Image5 from "../../assets/Cinematography/Khamosh/Image 5.png";
import Image6 from "../../assets/Cinematography/Khamosh/Image 6.png";
import Image7 from "../../assets/Cinematography/Khamosh/Image 7.png";
import Image8 from "../../assets/Cinematography/Khamosh/Image 8.png";
import Image9 from "../../assets/Cinematography/Khamosh/Image 9.png";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

const totalSlots = 10; // number of animated boxes

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

function Khamosh() {
  useEffect(() => {
    document.body.style.backgroundColor = "#1B1B1B";
    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, []);

  const [initialData] = useState(() => {
    const shuffled = shuffleArray(images);
    return {
      slots: shuffled.slice(0, totalSlots),
      unused: shuffled.slice(totalSlots),
    };
  });

  const [slots, setSlots] = useState(initialData.slots);
  const [unusedImages, setUnusedImages] = useState(initialData.unused);

  useEffect(() => {
    if (slots.length === 0) return;

    let timeout;

    const run = () => {
      const delay = Math.floor(Math.random() * 3000);

      timeout = setTimeout(() => {
        setSlots((prevSlots) => {
          let newUnused = [...unusedImages];

          // refill properly
          if (newUnused.length === 0) {
            newUnused = shuffleArray(images);
          }

          const randomSlot = Math.floor(Math.random() * prevSlots.length);

          let nextImage = newUnused.shift();

          // SAFETY fallback (important)
          if (!nextImage) {
            nextImage = images[Math.floor(Math.random() * images.length)];
          }

          const updatedSlots = [...prevSlots];
          updatedSlots[randomSlot] = nextImage;

          setUnusedImages(newUnused);

          return updatedSlots;
        });

        run();
      }, delay);
    };

    run();

    return () => clearTimeout(timeout);
  }, [slots, unusedImages]);

  return (
    <section
      className="home-reality-wrapper"
      style={{ backgroundColor: "#1B1B1B" }}
    >
      <div
        className="cinematography-khamosh home-reality"
        style={{ backgroundColor: "#1B1B1B" }}
      >
        <div className="cinematography-khamosh-grid">
          {slots.map((img, index) => (
            <article
              key={index}
              className="cinematography-khamosh-set animated-img"
            >
              <img key={img + "-" + index} src={img} alt="KHAMOSH" />
            </article>
          ))}
          <div className="cinematography-khamosh-heading">
            <p>Coming to the Screen Soon</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="625"
              height="147"
              viewBox="0 0 625 147"
              fill="none"
              className="cinematography-khamosh-heading-h2"
            >
              <g filter="url(#filter0_g_663_2312)">
                <path
                  d="M3.00021 63.5601V3.96005H15.4002V33.8001L11.9602 32.6001L35.8002 3.96005H51.3202L27.7202 32.4401L28.4402 23.6401L51.8002 63.5601H37.3202L22.7602 38.3601L15.4002 47.2401V63.5601H3.00021ZM54.7221 63.5601V3.96005H67.1221V29.7201H90.3221V3.96005H102.722V63.5601H90.3221V40.5201H67.1221V63.5601H54.7221ZM105.716 63.5601L125.876 3.96005H142.356L162.516 63.5601H148.996L144.996 51.4001H123.156L119.156 63.5601H105.716ZM126.596 40.6001H141.556L132.436 12.4401H135.796L126.596 40.6001ZM165.51 63.5601V3.96005H177.51L199.83 33.5601H194.23L215.91 3.96005H227.91V63.5601H215.51V17.6401L220.47 18.7601L197.51 48.3601H195.91L173.75 18.7601L177.91 17.6401V63.5601H165.51ZM265.118 64.5201C260.638 64.5201 256.478 63.7467 252.638 62.2001C248.798 60.6534 245.438 58.4934 242.558 55.7201C239.732 52.8934 237.518 49.6134 235.918 45.8801C234.318 42.1467 233.518 38.0934 233.518 33.7201C233.518 29.3467 234.292 25.2934 235.838 21.5601C237.438 17.8267 239.652 14.5734 242.478 11.8001C245.358 9.02672 248.718 6.86672 252.558 5.32006C256.398 3.77339 260.585 3.00006 265.118 3.00006C269.652 3.00006 273.838 3.77339 277.678 5.32006C281.518 6.86672 284.852 9.02672 287.678 11.8001C290.558 14.5734 292.772 17.8267 294.318 21.5601C295.918 25.2934 296.718 29.3467 296.718 33.7201C296.718 38.0934 295.918 42.1467 294.318 45.8801C292.718 49.6134 290.478 52.8934 287.598 55.7201C284.772 58.4934 281.438 60.6534 277.598 62.2001C273.758 63.7467 269.598 64.5201 265.118 64.5201ZM265.118 53.3201C267.838 53.3201 270.345 52.8401 272.638 51.8801C274.985 50.9201 277.038 49.5867 278.798 47.8801C280.558 46.1201 281.918 44.0401 282.878 41.6401C283.838 39.2401 284.318 36.6001 284.318 33.7201C284.318 30.8401 283.838 28.2267 282.878 25.8801C281.918 23.4801 280.558 21.4001 278.798 19.6401C277.038 17.8801 274.985 16.5467 272.638 15.6401C270.345 14.6801 267.838 14.2001 265.118 14.2001C262.398 14.2001 259.865 14.6801 257.518 15.6401C255.225 16.5467 253.198 17.8801 251.438 19.6401C249.678 21.4001 248.318 23.4801 247.358 25.8801C246.398 28.2267 245.918 30.8401 245.918 33.7201C245.918 36.6001 246.398 39.2401 247.358 41.6401C248.318 44.0401 249.678 46.1201 251.438 47.8801C253.198 49.5867 255.225 50.9201 257.518 51.8801C259.865 52.8401 262.398 53.3201 265.118 53.3201ZM323.993 64.5201C320.259 64.5201 316.739 63.8534 313.433 62.5201C310.179 61.1334 307.353 59.1867 304.953 56.6801C302.606 54.1734 300.846 51.2134 299.673 47.8001L309.833 43.2401C311.326 46.4934 313.379 49.0534 315.993 50.9201C318.659 52.7867 321.593 53.7201 324.793 53.7201C326.499 53.7201 327.966 53.4534 329.193 52.9201C330.419 52.3867 331.379 51.6667 332.073 50.7601C332.766 49.8001 333.113 48.6801 333.113 47.4001C333.113 46.0134 332.686 44.8401 331.833 43.8801C330.979 42.8667 329.646 42.0667 327.833 41.4801L316.153 37.6401C311.406 36.0934 307.833 33.9067 305.433 31.0801C303.033 28.2001 301.833 24.7601 301.833 20.7601C301.833 17.2401 302.686 14.1467 304.393 11.4801C306.153 8.81339 308.579 6.73339 311.673 5.24006C314.819 3.74672 318.419 3.00006 322.473 3.00006C326.046 3.00006 329.353 3.61339 332.393 4.84006C335.433 6.06672 338.046 7.80006 340.233 10.0401C342.473 12.2801 344.153 14.9734 345.273 18.1201L335.193 22.6801C334.073 19.9067 332.393 17.7467 330.153 16.2001C327.913 14.6001 325.353 13.8001 322.473 13.8001C320.819 13.8001 319.353 14.0667 318.073 14.6001C316.793 15.1334 315.806 15.9067 315.113 16.9201C314.419 17.8801 314.073 19.0001 314.073 20.2801C314.073 21.6667 314.526 22.8934 315.433 23.9601C316.339 24.9734 317.699 25.7734 319.513 26.3601L330.953 30.0401C335.753 31.5867 339.326 33.7467 341.673 36.5201C344.073 39.2934 345.273 42.6801 345.273 46.6801C345.273 50.1467 344.366 53.2401 342.553 55.9601C340.739 58.6267 338.233 60.7334 335.033 62.2801C331.886 63.7734 328.206 64.5201 323.993 64.5201ZM350.91 63.5601V3.96005H363.31V29.7201H386.51V3.96005H398.91V63.5601H386.51V40.5201H363.31V63.5601H350.91ZM3.00021 143.56V83.9601H12.5202L44.5202 126.12L39.4002 127.32V83.9601H51.8002V143.56H42.2002L10.7602 101.08L15.4002 99.8801V143.56H3.00021ZM54.7752 143.56L74.9352 83.9601H91.4152L111.575 143.56H98.0552L94.0552 131.4H72.2152L68.2152 143.56H54.7752ZM75.6552 120.6H90.6152L81.4952 92.4401H84.8552L75.6552 120.6ZM110.169 143.56V133.56L137.289 94.7601H111.769V83.9601H152.969V93.9601L125.929 132.76H153.769V143.56H110.169ZM152.36 143.56L172.52 83.9601H189L209.16 143.56H195.64L191.64 131.4H169.8L165.8 143.56H152.36ZM173.24 120.6H188.2L179.08 92.4401H182.44L173.24 120.6ZM212.153 143.56V83.9601H234.953C239.06 83.9601 242.687 84.6801 245.833 86.1201C249.033 87.5601 251.54 89.6934 253.353 92.5201C255.167 95.3467 256.073 98.8401 256.073 103C256.073 107.053 255.14 110.52 253.273 113.4C251.407 116.227 248.9 118.36 245.753 119.8L259.353 143.56H245.433L230.713 117.24L238.713 121.96H224.553V143.56H212.153ZM224.553 111.16H235.033C236.793 111.16 238.313 110.813 239.593 110.12C240.873 109.427 241.86 108.467 242.553 107.24C243.3 106.013 243.673 104.6 243.673 103C243.673 101.347 243.3 99.9067 242.553 98.6801C241.86 97.4534 240.873 96.4934 239.593 95.8001C238.313 95.1067 236.793 94.7601 235.033 94.7601H224.553V111.16ZM280.263 143.56L300.423 83.9601H316.903L337.063 143.56H323.543L319.543 131.4H297.703L293.703 143.56H280.263ZM301.143 120.6H316.103L306.983 92.4401H310.343L301.143 120.6ZM335.656 143.56L355.816 83.9601H372.296L392.456 143.56H378.936L374.936 131.4H353.096L349.096 143.56H335.656ZM356.536 120.6H371.496L362.376 92.4401H365.736L356.536 120.6ZM402.186 143.56V94.7601H387.066V83.9601H429.466V94.7601H414.586V143.56H402.186ZM432.406 143.56V83.9601H472.486V94.7601H444.806V108.28H470.886V119.08H444.806V132.76H472.486V143.56H432.406ZM498.666 143.56V83.9601H511.066V109.72H534.266V83.9601H546.666V143.56H534.266V120.52H511.066V143.56H498.666ZM549.66 143.56L569.82 83.9601H586.3L606.46 143.56H592.94L588.94 131.4H567.1L563.1 143.56H549.66ZM570.54 120.6H585.5L576.38 92.4401H579.74L570.54 120.6ZM609.453 143.56V83.9601H621.853V143.56H609.453Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_g_663_2312"
                  x="0"
                  y="0"
                  width="624.854"
                  height="146.56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.02500000037252903 0.02500000037252903"
                    numOctaves="3"
                    seed="3929"
                  />
                  <feDisplacementMap
                    in="shape"
                    scale="6"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displacedImage"
                    width="100%"
                    height="100%"
                  />
                  <feMerge result="effect1_texture_663_2312">
                    <feMergeNode in="displacedImage" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.6667 11.5V6.83333C18.6667 6.47971 18.5262 6.14057 18.2761 5.89052C18.0261 5.64048 17.687 5.5 17.3333 5.5H1.33333C0.979711 5.5 0.640573 5.64048 0.390524 5.89052C0.140476 6.14057 0 6.47971 0 6.83333V20.1667C0 20.5203 0.140476 20.8594 0.390524 21.1095C0.640573 21.3595 0.979711 21.5 1.33333 21.5H17.3333C17.687 21.5 18.0261 21.3595 18.2761 21.1095C18.5262 20.8594 18.6667 20.5203 18.6667 20.1667V15.5L24 20.8333V6.16667L18.6667 11.5Z"
                  fill="#C3262B"
                />
              </svg>
              DOP: BHRIGAV DUA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Khamosh;
