import React from "react";
import "../css/home.css";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className="background background-one"></div>
      <NavBar />
      <div className="background background-two"></div>
      <div className="about">
        <div className="about__content">
          <h2>About</h2>
          <img src='src/img/polly-profile.jpg' alt="Polly Thompson Profile" />
          <div className="about__content--text">
            A multi-lingual journalist with an MA in International Journalism
            from City, University of London. I have experience reporting abroad
            in Argentina and the US, and reported on Latin America, culture,
            tech, politics, and space. I'm passionate about broadcast journalism
            and finding creative ways to share important stories and make
            complex topics approachable for viewers and listeners. I was just
            nominated by my course head for the Foreign Press Association's
            'Future Foreign Correspondent (student) of the Year' award for a
            video report on Louisiana's death row.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
