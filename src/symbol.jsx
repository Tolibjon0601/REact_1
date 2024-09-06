import React from 'react';
import heroImg2 from "./assets/hero_img_2.png";
import heroImg3 from "./assets/hero_img_3.png";
import heroImg4 from "./assets/hero_img_4.png";
import heroImg5 from "./assets/hero_img_5.png";
import './App.css';

function Symbol() {
  return (
    <section className="symbol">
      <div className="container">
        <div className="symbol__block">
          <h2 className="symbol__title">Featured Universities</h2>
          <div className="symbol__img">
            <img src={heroImg2} alt="University 1" />
            <img src={heroImg3} alt="University 2" />
            <img src={heroImg4} alt="University 3" />
            <img src={heroImg5} alt="University 4" />
          </div>
          <div className="symbol__btns">
            <a className="symbol__btn active" href="#"></a>
            <a className="symbol__btn" href="#"></a>
            <a className="symbol__btn" href="#"></a>
            <a className="symbol__btn" href="#"></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Symbol;
