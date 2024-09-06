import React from 'react';
import heroImg from "./assets/hero_img.png";
import './App.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__block">
          <div className="hero__content">
            <h2 className="hero__title">
              We Help to <span>Build</span><br />
              Your Dream
            </h2>
            <p className="hero__text">
              We are always available to consult on taking your higher<br />education to the next level so you can stay competitive in the
            </p>
            <a className="hero_btn" href="#">Apply Online</a>
          </div>
          <div className="hero__img">
            <img src={heroImg} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
