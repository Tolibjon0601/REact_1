import React from 'react';
import button from "./assets/button.svg";
import Logo from "./assets/Logo.png";
// Import other assets if needed
import heroImg from "./assets/hero_img.png";
import heroImg2 from "./assets/hero_img_2.png";
import heroImg3 from "./assets/hero_img_3.png";
import heroImg4 from "./assets/hero_img_4.png";
import heroImg5 from "./assets/hero_img_5.png";
import serviceImg1 from "./assets/service__img_1.svg";
import serviceImg2 from "./assets/service__img_2.svg";
import serviceImg3 from "./assets/service__img_3.svg";
import serviceImg4 from "./assets/service__img_4.svg";
import serviceImg5 from "./assets/service__img_5.svg";
import serviceBtnArrow from "./assets/service__btn_arrow.svg";
import './App.css';

function App() {
  return (
    <>
      <header className="main__header">
        <div className="container">
          <div className="main__header_block">
            <a href="#"><img src={Logo} alt="Logo" /></a>
            <ul className="header_list">
              <li className="header__item">
                <a className="header__link" href="#">Home</a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">About Us</a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">Our Services</a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">Responsibilities</a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">Country</a>
              </li>
            </ul>
            <a className="header_btn" href="#">Apply</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__block">
              <div className="hero__content">
                <h2 className="hero__title">
                  We Help to <span>Build</span><br />
                  Your Dream
                </h2>
                <p className="hero__text">
                  We are always available to consult on taking your higher
                  <br />education to the next level so you can stay competitive in the
                </p>
                <a className="hero_btn" href="#">Apply Online</a>
              </div>
              <div className="hero__img">
                <img src={heroImg} alt="Hero" />
              </div>
            </div>
          </div>
        </section>

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

        <section className="service">
          <div className="container">
            <div className="service__block">
              <div className="service__block__content">
                <h2 className="service__title">Our Services</h2>
                <p className="service__text">
                  Executive Trade International is a University Application
                  Centre, guiding Bangladeshi students <br />
                  to Australian, British, Canadian, and Irish universities!
                </p>
              </div>
              <div className="service__block__img">
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
                <div class="service__box_1">
                <img
                  class="service__box__img"
                  src={serviceImg2}
                  alt=""
                />
                <div class="service__box__content">
                  <h2 class="service__title">University Admissions</h2>
                  <p class="service__text">
                    Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus.
                  </p>
                  <a href="#"
                    ><img src={serviceBtnArrow} alt=""
                  /></a>
                </div>
              </div>
              <div class="service__box_1">
                <img
                  class="service__box__img"
                  src={serviceImg3}
                  alt=""
                />
                <div class="service__box__content">
                  <h2 class="service__title">Visa Consultancy</h2>
                  <p class="service__text">
                    Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut.  dicta accusantium fugiat.
                  </p>
                  <a href="#"
                    ><img src={serviceBtnArrow} alt=""
                  /></a>
                </div>
              </div>
              <div class="service__box_1">
                <img
                  class="service__box__img"
                  src={serviceImg4}
                  alt=""
                />
                <div class="service__box__content">
                  <h2 class="service__title">Accommodation</h2>
                  <p class="service__text">
                    Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis  dicta accusantium fugiat.
                  </p>
                  <a href="#"
                    ><img src={serviceBtnArrow} alt=""
                  /></a>
                </div>
              </div>
              <div class="service__box_1">
                <img
                  class="service__box__img"
                  src={serviceImg5}
                  alt=""
                />
                <div class="service__box__content">
                  <h2 class="service__title">Pre-Departure Briefing</h2>
                  <p class="service__text">
                    Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut.  dolorem dicta accusantium fugiat.
                  </p>
                  <a href="#"
                    ><img src={serviceBtnArrow} alt=""
                  /></a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
