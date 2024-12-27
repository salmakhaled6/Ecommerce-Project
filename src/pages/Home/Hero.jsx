import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="background-container">
      <div className="text-overlay">
        <h1>
          Select Your <span>Accessories</span>
        </h1>
        <p>OVER 10.000 ACCESSORIES</p>
        <div className="boxes">
          <ul>
            <li>
              <select name="" id="">
                <option value="" disabled selected hidden>
                  Choose band
                </option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option value="" disabled selected hidden>
                  Choose model
                </option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option value="" disabled selected hidden>
                  Choose Accessories
                </option>
              </select>
            </li>
            <li>  <button>SELECT</button></li>
          
          </ul>
       
        </div>
      </div>
    </div>
  );
}

export default Hero;
