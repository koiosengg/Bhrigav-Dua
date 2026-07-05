import React from "react";
import Image1 from "../../assets/Cinematography/Search/Cinemat.webp";

function Search({ image = Image1, children }) {
  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-search home-reality">
        <div className="cinematography-search-container">
          <img
            src={image}
            alt="Bhrigav Dua"
            className="cinematography-search-img"
          />
          <div className="cinematography-search-content">
            <div className="cinematography-search-content-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_260_1490"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_260_1490)">
                  <path
                    d="M19.5421 20.577L13.2613 14.296C12.7613 14.7088 12.1863 15.0319 11.5363 15.2653C10.8863 15.4986 10.2139 15.6153 9.51906 15.6153C7.81139 15.6153 6.36523 15.023 5.18056 13.8385C3.99606 12.6538 3.40381 11.2077 3.40381 9.50002C3.40381 7.79235 3.99606 6.34618 5.18056 5.16152C6.36523 3.97702 7.81139 3.38477 9.51906 3.38477C11.2267 3.38477 12.6729 3.97702 13.8576 5.16152C15.0421 6.34618 15.6343 7.79235 15.6343 9.50002C15.6343 10.2142 15.5145 10.8963 15.2748 11.5463C15.035 12.1963 14.7151 12.7616 14.3151 13.2423L20.5958 19.523L19.5421 20.577ZM9.51906 14.1155C10.8076 14.1155 11.8989 13.6683 12.7931 12.774C13.6874 11.8798 14.1346 10.7885 14.1346 9.50002C14.1346 8.21152 13.6874 7.12018 12.7931 6.22601C11.8989 5.33168 10.8076 4.88452 9.51906 4.88452C8.23056 4.88452 7.13923 5.33168 6.24506 6.22601C5.35073 7.12018 4.90356 8.21152 4.90356 9.50002C4.90356 10.7885 5.35073 11.8798 6.24506 12.774C7.13923 13.6683 8.23056 14.1155 9.51906 14.1155Z"
                    fill="white"
                  />
                </g>
              </svg>
              <h2>Bhrigav Dua</h2>
            </div>
            <p className="cinematography-search-content-para">
              {children || (
                <>
                  I'm fascinated by the details and how a single frame can change
                  the way a story is felt.
                  <br />
                  <br />
                  That curiosity has shaped my journey across feature films,
                  commercials, documentaries, and branded content.
                  <br />
                  <br />
                  Over the last 8 years, I've worked on 50+ advertising films,
                  documentaries and long-form projects.
                  <br />
                  <br />
                  My feature film is selected among the Top 20 films in Film Bazaar
                  Recommends.
                  <br />
                  <br />
                  Every project changes the way I look at the next one, and that's
                  probably my favorite part of the job.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
