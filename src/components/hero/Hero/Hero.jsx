import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Hero.css";
import {
  FacebookIcon,
  SocialIndicatorIcon,
  TwitterIcon,
  WawIcon,
} from "../../../assets/icons";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <span className="highlight-pill">Feel The Experience</span>
            <h1>
              <span>Explore The </span>
              <span>Majestic Asia</span>
              <span>Landscape Now</span>
            </h1>
            <a className="hero-btn" href="#destinations">
              GET STARTED
            </a>
          </div>

          <div className="hero-socials">
            <a href="#facebook">
              <FacebookIcon />
            </a>
            <a href="#twitter">
              <TwitterIcon />
            </a>
            <a href="#social">
              <WawIcon />
            </a>
            <div className="scroll-indicator">
              <span>SCROLL</span>
              <SocialIndicatorIcon />
            </div>
          </div>
        </div>
        <SearchForm />
      </div>
    </section>
  );
};
export default Hero;
