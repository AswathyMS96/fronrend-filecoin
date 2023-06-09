import React from "react";
import '../App.css'
import hero from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
            The Decentralized Cross-Chain
            <span className="highlighted">Filecoin Network</span>
          </h1>
          <p className="hero-info-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="wallet-btn">
            <button  className="primary">
              Start Staking
            </button>
          </div>
          
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-img" src={hero} alt="blockchain" />
      </div>
    </div>
  );
};

export default Hero;
