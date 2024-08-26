import React from "react";

const NavBar = ({ current }) => {
  return (
    <nav>
      <div className="title-area">
        <div className="title-area__names">
          <h1>Polly Thompson</h1>
          <p>Journalist</p>
        </div>
      </div>
      <div className="links">
        <div className="links__container">
          {current == "home" ? (
            <a href="/" className="current">
              About
            </a>
          ) : (
            <a href="/">About</a>
          )}

          <div className="links__container--work">
            {current == "work" ? (
              <p className="current">Published work
              <img src="src/img/svg/down-arrow.svg" className="down-arrow"/>
              </p>
            ) : (
              <p>Published work
              <img src="img/svg/down-arrow.svg" alt="" />
              </p>
            )}
            <div className="dropdown">
              <a href="/articles"> Articles </a>
              <a href="/video"> Video & Audio </a>
            </div>
          </div>

          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
