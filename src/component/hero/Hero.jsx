import React from "react";
import heroBg from "../../assets/hero-bg.svg";
import { FaApple } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container ">
        <div className="hero__content">
          <div className="text">
            <span>
              <FaApple className="apple__icon" />
              <h4> iPhone 14 Series </h4>
            </span>
            <h1>Up to 10% off Voucher</h1>
            <span>
              <a href="#">Shop Now</a>
              <FaLongArrowAltRight className="right" />
            </span>
          </div>
          <img src={heroBg} alt="" className="bg" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
