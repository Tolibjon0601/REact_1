import React from 'react';
import serviceImg1 from "./assets/service__img_1.svg";
import serviceImg2 from "./assets/service__img_2.svg";
import serviceImg3 from "./assets/service__img_3.svg";
import serviceImg4 from "./assets/service__img_4.svg";
import serviceImg5 from "./assets/service__img_5.svg";
import serviceBtnArrow from "./assets/service__btn_arrow.svg";
import './App.css';

function Service() {
  return (
    <section className="service">
      <div className="container">
        <div className="service__block">
          <div className="service__block__content">
            <h2 className="service__title">Our Services</h2>
            <p className="service__text">
              Executive Trade International is a University Application Centre, guiding Bangladeshi students to Australian, British, Canadian, and Irish universities!
            </p>
          </div>
          <div className="service__block__img">
            <div className="service__box_1">
              <img className="service__box__img" src={serviceImg5} alt="Career Counselling" />
              <div className="service__box__content">
                <h2 className="service__title">Career Counselling</h2>
                <p className="service__text">
                  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
                <a href="#"><img src={serviceBtnArrow} alt="Arrow" /></a>
              </div>
            </div>

            <div className="service__box_1">
              <img className="service__box__img" src={serviceImg1} alt="Career Counselling" />
              <div className="service__box__content">
                <h2 className="service__title">Career Counselling</h2>
                <p className="service__text">
                  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
                <a href="#"><img src={serviceBtnArrow} alt="Arrow" /></a>
              </div>
            </div>
            <div className="service__box_1">
              <img className="service__box__img" src={serviceImg2} alt="Career Counselling" />
              <div className="service__box__content">
                <h2 className="service__title">Career Counselling</h2>
                <p className="service__text">
                  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
                <a href="#"><img src={serviceBtnArrow} alt="Arrow" /></a>
              </div>
            </div>
            <div className="service__box_1">
              <img className="service__box__img" src={serviceImg3} alt="Career Counselling" />
              <div className="service__box__content">
                <h2 className="service__title">Career Counselling</h2>
                <p className="service__text">
                  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
                <a href="#"><img src={serviceBtnArrow} alt="Arrow" /></a>
              </div>
            </div>
            <div className="service__box_1">
              <img className="service__box__img" src={serviceImg4} alt="Career Counselling" />
              <div className="service__box__content">
                <h2 className="service__title">Career Counselling</h2>
                <p className="service__text">
                  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
                <a href="#"><img src={serviceBtnArrow} alt="Arrow" /></a>
              </div>
            </div>
            <div className="service__box_1">
              <img className="service__box__img" src={serviceImg5} alt="Career Counselling" />
              <div className="service__box__content">
                <h2 className="service__title">Career Counselling</h2>
                <p className="service__text">
                  Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum
                </p>
                <a href="#"><img src={serviceBtnArrow} alt="Arrow" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
