import React from 'react';
import Logo from "./assets/Logo.png";
import './App.css';
import Hero from './Hero';
import Symbol from './symbol';
import Service from './service';


function App() {
  return (
    <>
      <header className="main__header">
        <div className="container">
          <div className="main__header_block">
            <a href="#"><img src={Logo} alt="Logo" /></a>
            <ul className="header_list">
              <li className="header__item"><a className="header__link" href="#">Home</a></li>
              <li className="header__item"><a className="header__link" href="#">About Us</a></li>
              <li className="header__item"><a className="header__link" href="#">Our Services</a></li>
              <li className="header__item"><a className="header__link" href="#">Responsibilities</a></li>
              <li className="header__item"><a className="header__link" href="#">Country</a></li>
            </ul>
            <a className="header_btn" href="#">Apply</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Symbol />
        <Service />
      </main>
    </>
  );
}

export default App;
