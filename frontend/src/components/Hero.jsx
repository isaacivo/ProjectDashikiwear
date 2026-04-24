import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from "../assets/Kainene_African_Print_Maxi_Dress.jpg";
import kaineneDress from '../assets/Kainene_African_Print_Maxi_Dress.jpg';
import tomiwaShirt from '../assets/Tomiwa_African_Print_Zip_Up_Shirt.jpg';

const Hero = () => {
  return (
    <div
      className="position-relative d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
      }}
    >

      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'rgba(44, 26, 15, 0.55)',
        }}
      ></div>

      {/* LEFT PRODUCT */}
      <Link
        to="/product/p1"
        className="hero-side-img left d-none d-md-block"
      >
        <img src={kaineneDress} alt="Kainene Dress" />
      </Link>

      {/* RIGHT PRODUCT */}
      <Link
        to="/product/p13"
        className="hero-side-img right d-none d-md-block"
      >
        <img src={tomiwaShirt} alt="Tomiwa Shirt" />
      </Link>

      {/* CENTER CONTENT */}
      <div className="hero-content position-relative text-white">
        
        <h1 className="hero-title">
          Redefining African Fashion
        </h1>

        <p className="hero-subtext">
          Bold prints. Timeless culture. Modern elegance.
        </p>

        <Link to="/collections" className="hero-btn">
          Shop Collection
        </Link>

      </div>

    </div>
  );
};

export default Hero;