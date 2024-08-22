import React from "react";

const NavBar = ({current}) => {

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

          <a href="/work">Published work</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
